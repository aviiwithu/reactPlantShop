const dotenv = require('dotenv').config()
const express = require("express");
const path = require('path');
const cors = require("cors");
const { v4: uuidv4 } = require('uuid');
const stripe = require("stripe")(process.env.STRIPE_API_KEY);
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'build','index.html'))
  })
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname,'build','index.html'))
  })

app.post("/checkout",async (req,res)=>{
    let error;
    let status;
    try {
        const {product,token} = req.body;
        const customer = await stripe.customers.create({
            email:token.email,
            source:token.id
        })
        const key = uuidv4();
        const charge = await stripe.charges.create(
            {
                amount:product.price*100,
                currency:"INR",
                customer:customer.id,
                receipt_email:token.email,
                description:"all product description",
                shipping:{
                    name:token.card.name,
                    address:{
                        line1:token.card.address_line1,
                        line2:token.card.address_line2,
                        city:token.card.city,
                        country:token.card.country,
                        postal_code:token.card.address_zip
                    }
                }
             },
            
            {idempotencyKey:key})
        status = "success";
    } catch(error){
        console.log(error);
        status = "error";
    }
    res.json({status});
})
app.listen(8080,()=>{
    console.log("your app is running at port 8080");
})
import React from 'react'
import {Link} from 'react-router-dom'

const PlantHomepage = () => {
    return (
        <>
            <section className="firstSection">
                <img src="https://source.unsplash.com/vrbZVyX2k4I/1420x459" alt="firstSection-img"  />
                {/* <div className="firstSectionText">
                             <h2 >Shop and Decorate</h2>
                </div> */}
            </section>
            <div className="secondSection">
                <div className="card1">
                    <img src="https://source.unsplash.com/c-8C2Tl97jQ/270x270" alt="card1"/>
                    <Link to="/cart" >
                    <div className="cardText" >
                        Decoration
                    </div>
                        </Link>
                </div>
                <div className="card1">
                    <img src="https://source.unsplash.com/MjGOk0PBC9E/270x270" alt="card1"/>
                    <Link to="/cart" >
                    <div className="cardText" >
                        Garden
                    </div>
                        </Link>
                </div>
                <div className="card1">
                    <img src="https://source.unsplash.com/An0uaO4IhcQ/270x270" alt="card1"/>
                    <Link to="/cart" >
                    <div className="cardText" >
                        Indoor Plant
                    </div>
                        </Link>
                </div>
                <div className="card1">
                    <img src="https://source.unsplash.com/FjwtL3YSZ9U/270x270" alt="card1"/>
                    <Link to="/cart" >
                    <div className="cardText" >
                        Flower
                    </div>
                        </Link>
                </div>
                </div>
                <div className="largeCardContainer">
                    <div className="largeCard1">
                        <img src="https://source.unsplash.com/Mum9_ImH5ko/657x418" alt="largeCard1"/>
                        <span className="largeCardText">
                            Yellow Flower
                        </span>
                    </div>
                    <div className="largeCard1">
                        <img src="https://source.unsplash.com/cOQP9StWSUA/657x418" alt="largeCard1"/>
                        <span className="largeCardText">
                            Pink White Flower
                        </span>
                    </div>
                </div>
            
        </>
    )
}

export default PlantHomepage

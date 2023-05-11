import React from 'react'
import './HeroImage2Styles.css'

const HeroImage2 = (props) => {
    return (
        <>
            <div className="hero-img">
                <div className="heading">
                    <h1>{props.heading}</h1>
                    <p>{props.text}</p>
                </div>
            </div>

        </>
    )
}

export default HeroImage2

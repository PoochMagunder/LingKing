import React from "react";
import '../assets/Homepage.css';
import Boatimg from '../assets/img/Boat image.jpg';
import Familyimg from '../assets/img/photo of ray.jpg';

const Homepage = () => {

    return (
        <div className="homepage-wrapper">
            <div className="about-wrapper">
                <aside className="boat-image-aside">
                    <img
                        className="boat-image"
                        src={Boatimg}
                        alt="image of company boat">
                    </img>
                </aside>
                <div className="about-us">
                    <header className="about-header">About The Company</header>
                    <p className="about-us-p">

                        On a serene summer's day, nature's symphony unfolded. The sun bathed the world in warmth, while a gentle breeze carried fragrances of flowers. 
                        Birds sang, and life embraced harmony. Families reveled in parks, and playful animals graced the scene. 
                        The taste of ripe peaches and the aroma of fresh bread delighted all. As the sun set, crickets and frogs serenaded the night sky. 
                        A fleeting moment of perfect balance, reminding us of our place in this enchanting symphony of life.
                    </p>
                </div>
                <div className="filler"></div>
                <div className="family-wrapper">
                    <aside className="family-image-aside">
                <img
                className="family-image"
                    src={Familyimg}
                    alt="image of family">
                </img>
                </aside>
                <div className="about-family">
                    <header className="about-family-header">About The Family</header>
                    <p className="about-family-p">On a serene summer's day, nature's symphony unfolded. The sun bathed the world in warmth, while a gentle breeze carried fragrances of flowers. 
                        Birds sang, and life embraced harmony. Families reveled in parks, and playful animals graced the scene. 
                        The taste of ripe peaches and the aroma of fresh bread delighted all. As the sun set, crickets and frogs serenaded the night sky. 
                        A fleeting moment of perfect balance, reminding us of our place in this enchanting symphony of life.
                        </p>
                        </div>
                </div>


            </div>
        </div>
    )
};

export default Homepage;
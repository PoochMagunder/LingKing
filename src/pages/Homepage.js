import React from "react";
import Slideshow from "../components/Slideshow";
import '../assets/css/Homepage.css';
import '../assets/css/Slideshow.css';
import boatimg1 from '../assets/img/boatImg1.jpg';
import boatimg2 from '../assets/img/boatImg2.jpg';
import boatimg3 from '../assets/img/boatImg3.jpg';
// import boatimg4 from '../assets/img/boatImg4.jpeg';
// import boatimg5 from '../assets/img/boatImg5.jpeg';
import familyimg1 from '../assets/img/familyImg1.jpg'
import familyimg2 from '../assets/img/familyImg2.jpg';
import familyimg3 from '../assets/img/familyImg3.jpg';
import familyimg4 from '../assets/img/familyImg4.jpg';
import familyimg5 from '../assets/img/familyImg5.jpg';


const Homepage = () => {

    const boatImages = [
        boatimg1,
        boatimg2,
        boatimg3,
        // boatimg4,
        // boatimg5,
    ];

    const familyImages = [
        familyimg1,
        familyimg2,
        familyimg3,
        familyimg4,
        familyimg5,
    ];

    return (
        <div className="homepage-wrapper">
            <div className="about-wrapper">
                <div class="boat-slideshow-container">
                    <Slideshow className="slideshow" images={boatImages} interval={5000} />
                </div>
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
                    <div className="family-slideshow-container">
                        <Slideshow className="slideshow" images={familyImages} interval={5000} />
                    </div>
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
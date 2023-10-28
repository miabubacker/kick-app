import React from 'react'
import "./Review.scss"
// import cardData from  "./ReviewData"
import img1 from '../../Components/Assets/Imgs/Elli1.png'
import img2 from '../../Components/Assets/Imgs/Elli2.png'
import img3 from '../../Components/Assets/Imgs/Elli3.png'


function Review() {
    return (
        <>
            <section className='review_section'>
                <div className="container">
                    <div className='review_title'>
                        <h1>REVIEWS</h1>
                        <button>SEE ALL</button>
                    </div>
                    <div className="review_cards">
                      <img src={img1} alt="" />
                    </div>
                </div>

            </section>

        </>

    )
}

export default Review
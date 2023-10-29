import React, { useState } from 'react'
import "./Review.scss"
// import cardData from  "./ReviewData"
import img1 from '../../Components/Assets/Imgs/Elli1.png'
import img2 from '../../Components/Assets/Imgs/Elli2.png'
import img3 from '../../Components/Assets/Imgs/Elli3.png'
import reviewshoe1 from '../Assets/Imgs/reviewshoes.svg'
import reviewshoe2 from '../Assets/Imgs/reviewshoes1.svg'
import reviewshoe3 from '../Assets/Imgs/reviewshoes2.svg'


function Review() {
    const [reviewCard, setReviewCard] = useState([{ header: "Good Quality ", comments: "I highly recommend shopping from kicks", star: 5, profile: img1, shoe: reviewshoe1 },
    { header: "Good Quality ", comments: "I highly recommend shopping from kicks", star: 5, profile: img2, shoe: reviewshoe2 },
    { header: "Good Quality ", comments: "I highly recommend shopping from kicks", star: 5, profile: img3, shoe: reviewshoe3 }

    ])
    return (
        <>
            <section className='review_section'>
                <div>
                    <div className='review_title'>
                        <h1>REVIEWS</h1>
                        <button>SEE ALL</button>
                    </div>
                    <div className="review_cards">
                        {reviewCard.map((data) => <div className='card_main'>
                            <div className='top_main'>
                                <div>
                                    <div className='review_header'>{data.header}</div>
                                    <div className='review_comments'>{data.comments}</div>
                                    <div className='review_stars'>   {[...Array(5)].map((star, index) => {
                                        return (
                                            <span key={index} className={"reviews_star"}>&#9733; </span>
                                        );
                                    })} <span style={{ marginLeft: '4px' }}>
                                            5.0
                                        </span></div>
                                </div>

                                <img src={data.profile} className='profile' />
                            </div>

                            {/* <div> */}
                            <img src={data.shoe} />
                            {/* </div> */}
                        </div>)}
                    </div>
                </div>

            </section>

        </>

    )
}

export default Review
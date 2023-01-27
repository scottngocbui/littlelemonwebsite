import {AiFillStar} from 'react-icons/ai';
import "./ReviewCards.css"

function ReviewCard() {

    return (
            <section className="review-card">
                <h1>Username</h1>
                <img alt="Photo" />
                <div className='stars'>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                </div>
                <p>User's Review Here</p>
            </section>
            );
}

export default ReviewCard
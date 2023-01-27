import ReviewCard from "./ReviewCards/ReviewCards";
import "./Testimonials.css"

function Testimonials() {

    return (
            <section className="testimonials">
                <h1>Testimonials</h1>
                <div className="testimonial-card1">
                    <ReviewCard />
                </div>
                <div className="testimonial-card2">
                    <ReviewCard />
                </div>
                <div className="testimonial-card3">
                    <ReviewCard />
                </div>
                <div className="testimonial-card4">
                    <ReviewCard />
                </div>
            </section>
            );
}

export default Testimonials
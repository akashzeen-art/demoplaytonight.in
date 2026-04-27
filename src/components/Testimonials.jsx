import './Testimonials.css'

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="test-header">
        <h2>What our customers say about us</h2>
        <p>Discover what users are saying about the benefits of our products:</p>
      </div>
      <div className="test-wrapper">
        <div className="test-cards">
          <div className="test-card">
            <div className="test-top">
              <img src="/img/men-review1.jpeg" alt="Rahul S." />
              <div><h4>Rahul S.</h4><div className="stars">★★★★★</div></div>
            </div>
            <p>Play Tonight has been a life-changer. My energy levels are higher, my performance is stronger, and I finally feel in control again. I couldn't be happier with the results.</p>
          </div>
          <div className="test-card">
            <div className="test-top">
              <img src="/img/men-review2.jpeg" alt="Amit K." />
              <div><h4>Amit K.</h4><div className="stars">★★★★★</div></div>
            </div>
            <p>I've tried other supplements, but nothing compares to Play Tonight. It gave me stamina, stronger erections, and the confidence I was missing. Highly recommended.</p>
          </div>
          <div className="test-card">
            <div className="test-top">
              <img src="/img/men-review3.jpeg" alt="Vikram R." />
              <div><h4>Vikram R.</h4><div className="stars">★★★★★</div></div>
            </div>
            <p>With Play Tonight, I last longer, feel more powerful, and my partner is more satisfied than ever. This product truly delivers on its promise.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

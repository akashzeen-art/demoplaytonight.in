import './Hero.css'

export default function Hero({ showPage }) {
  return (
    <section className="hero">
      <img src="/img/bg3.png" alt="Pink Bg" className="hero-bg" />
      <div className="hero-content">
        <h1 className="hero-title">Rediscover. Rejuvenate.</h1>
        <p className="hero-sub">pure ayurvedic wellness for a confident life</p>
        <div className="hero-badges">
          <div className="badge"><img src="/img/ISO.png" alt="ISO Certified" /><p>ISO</p><p>Certified</p></div>
          <div className="badge"><img src="/img/FDA.png" alt="FDA Approved" /><p>FDA</p><p>Approved</p></div>
          <div className="badge"><img src="/img/GMP.png" alt="GMP Certified" /><p>GMP</p><p>Certified</p></div>
          <div className="badge"><img src="/img/Ayurvedic.png" alt="100% Ayurvedic" /><p>100%</p><p>Ayurvedic</p></div>
          <div className="badge"><img src="/img/Natural.png" alt="Natural Pure Herbs" /><p>Natural</p><p>Pure Herbs</p></div>
          <div className="badge"><img src="/img/Specially.png" alt="Specially Formulated" /><p>Specially</p><p>Formulated</p></div>
        </div>
      </div>
      <div className="hero-cards">
        <div className="hero-card">
          <h3>FREE SHIPPING</h3>
          <div className="hero-card-body"><img src="/img/Truck.png" alt="Icon" /><p>Get free shipping on all orders above $50. Shop Now.</p></div>
        </div>
        <div className="hero-card">
          <h3>24X7 SUPPORT</h3>
          <div className="hero-card-body"><img src="/img/HeadPhone.png" alt="Icon" /><p>Our team is always ready to support 24x7.</p></div>
        </div>
        <div className="hero-card">
          <h3>100% GENUINE</h3>
          <div className="hero-card-body"><img src="/img/Ok.png" alt="Icon" /><p>Our products are 100% genuine and ethically sourced.</p></div>
        </div>
        <div className="hero-card">
          <h3>EASY RETURN</h3>
          <div className="hero-card-body"><img src="/img/Clock.png" alt="Icon" /><p>Easy return incase you don't like it or have issues.</p></div>
        </div>
      </div>
    </section>
  )
}

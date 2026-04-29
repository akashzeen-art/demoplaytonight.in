import './Policy.css'
import './AboutUs.css'
import Navbar from '../components/Navbar'

export default function AboutUs({ showPage }) {
  const nav = (p) => (e) => { e.preventDefault(); showPage(p) }

  return (
    <div>
      <Navbar showPage={showPage} />
      <div className="policy-header">
        <button className="policy-back" onClick={nav('home')}>← Back</button>
        <h1>About Us</h1>
        <p>Play Tonight – Men's Herbal Wellness</p>
      </div>

      <div className="about-body">
        <div className="about-intro-grid">
          <div className="about-text">
            <h2>About Us – Play Tonight</h2>
            <p>
              Play Tonight is a premium men's herbal wellness brand focused on supporting stamina,
              vitality, and confidence.
            </p>
            <p>
              Designed for today's fast-paced lifestyle, our formulations are crafted using carefully
              selected herbal ingredients to help men feel more energized, balanced, and ready to
              perform at their best.
            </p>
            <p>
              We believe in simple, effective wellness backed by quality, consistency, and trust.
            </p>
            <p className="about-tagline">Play Tonight — Powering Confidence, Naturally.</p>
          </div>
          <div className="about-image-wrap">
            <img src="/playtonightimage/playtonight image.png" alt="Play Tonight Product" className="about-product-img" />
          </div>
        </div>

        <div className="about-product-section">
          <h2>Play Tonight — Men's Herbal Wellness</h2>
          <p className="about-product-desc">
            A premium Herbal formulation designed to support stamina, vitality, endurance, and
            confidence for men's wellness.
          </p>

          <div className="about-benefits-grid">
            {['Enhanced Vitality', 'Improved Endurance', 'Performance Support', 'Boosted Confidence'].map(b => (
              <div className="about-benefit-card" key={b}>
                <span className="about-benefit-icon">✦</span>
                <span>{b}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="about-ingredients-section">
          <h2>Key Ingredients</h2>
          <div className="about-ingredients-grid">
            {[
              { name: 'Maca Root Extract', img: '/img/Root.png' },
              { name: 'Panax Ginseng', img: '/img/Ginseng.png' },
              { name: 'Tribulus Terrestris', img: '/img/Tribulus.png' },
              { name: 'Ashwagandha Extract', img: '/img/Ashwagandha.png' },
            ].map(({ name, img }) => (
              <div className="about-ingredient-card" key={name}>
                <img src={img} alt={name} />
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="policy-footer">
        <p>© 2026, Zeen Mediconnect OPC Pvt Ltd. All Rights Reserved.</p>
        <p style={{ marginTop: '8px' }}>
          <a href="#" onClick={nav('about')}>About Us</a> &nbsp;|&nbsp;
          <a href="#" onClick={nav('contact')}>Contact Us</a> &nbsp;|&nbsp;
          <a href="#" onClick={nav('disclaimer')}>Disclaimer</a> &nbsp;|&nbsp;
          <a href="#" onClick={nav('terms')}>Terms &amp; Conditions</a> &nbsp;|&nbsp;
          <a href="#" onClick={nav('privacy')}>Privacy Policy</a> &nbsp;|&nbsp;
          <a href="#" onClick={nav('refund')}>Refund &amp; Cancellation Policy</a>
        </p>
      </div>
    </div>
  )
}

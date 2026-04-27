import './CtaBanner.css'

export default function CtaBanner({ showPage }) {
  return (
    <section className="cta-banner">
      <div className="cta-content">
        <h2>UNLOCK YOUR TRUE NEW LIFE 2.0 TODAY WITH PLAY TONIGHT!</h2>
        <ul><li>Meant to Boost Stamina, Power, Increases Testosterone &amp; Reduce Fatigue.</li></ul>
        <p className="cta-desc">Enriched with a potent blend of herbal extracts,<br />essential minerals, and natural energy boosters,<br />these tablets are designed to help modern men stay active,<br />confident, and energized throughout the day.</p>
        <button className="cta-btn" onClick={() => showPage('checkout')}><span>▶</span> ORDER NOW</button>
      </div>
      <img src="/img/Capsules.png" alt="Order Visual" className="cta-img" />
    </section>
  )
}

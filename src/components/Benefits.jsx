import './Benefits.css'

export default function Benefits() {
  return (
    <section className="benefits">
      <div className="benefits-inner">
        <div className="benefits-text">
          <h2>POWER &amp; VITALITY TABLETS FOR MEN –<br />CAREFULLY CRAFTED<br />TO RESTORE STRENGTH.</h2>
          <p>Thanks to advanced herbal formulation and rapid action,<br />Play Tonight Tablets work together to<br />enhance stamina, restore firmness,<br />and help you enjoy the life better.</p>
        </div>
        <div className="benefits-images">
          <img src="/img/Capsules.png" alt="Product" className="prod-img" />
        </div>
      </div>
      <div className="benefits-points">
        <div className="point"><div className="point-num">1</div><p>100% Herbal &amp; Natural – Formulated with time-tested Ayurvedic Herbs &amp; Nutrients</p></div>
        <div className="point"><div className="point-num">2</div><p>Dual Action Formula – Boosts daily energy and enhances sexual vitality</p></div>
        <div className="point"><div className="point-num">3</div><p>Safe &amp; Non-Habit Forming – No artificial steroids or harmful chemicals</p></div>
      </div>
      <div className="benefits-footer">
        <p>STOP WORRYING ABOUT YOUR DAILY LIFE AND START</p>
        <p>ENJOYING IT TO THE FULLEST WITH PLAY TONIGHT TODAY!</p>
      </div>
    </section>
  )
}

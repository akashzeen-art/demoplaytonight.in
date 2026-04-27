import './Ingredients.css'

export default function Ingredients() {
  return (
    <section className="ingredients">
      <h2>KEY INGREDIENTS</h2>
      <div className="ing-grid">
        <div className="ing-item"><img src="/img/Root.png" alt="Maca Root Extract" /><p>Maca Root Extract</p></div>
        <div className="ing-item"><img src="/img/Ginseng.png" alt="Panax Ginseng" /><p>Panax Ginseng</p></div>
        <div className="ing-item"><img src="/img/Tribulus.png" alt="Tribulus Terrestris" /><p>Tribulus Terrestris</p></div>
        <div className="ing-item"><img src="/img/Ashwagandha.png" alt="Ashwagandha Extract" /><p>Ashwagandha Extract</p></div>
      </div>
      <div className="ing-strip">
        <h4>Elevate your Daily Energy, Fitness Goals, or Confidence.</h4>
        <h4>These tablets are a natural way to recharge your body and mind.</h4>
        <p>Get your Product now and start experiencing the benefits!</p>
      </div>
    </section>
  )
}

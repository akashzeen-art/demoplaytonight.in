import './Product.css'

export default function Product() {
  return (
    <section className="product">
      <div className="product-top">
        <div>
          <h2>2 CAPSULES AT A TIME FOR MAXIMUM PERFORMANCE</h2>
          <p>Tried and trusted, Play Tonight capsules are made to restore stamina, power, and confidence – helping men achieve a more satisfying intimate life.</p>
        </div>
      </div>
      <div className="product-features">
        <div className="product-left">
          <div><h3>Enhanced Vitality</h3><p>Naturally boosts stamina and energy.</p></div>
          <div><h3>Improved Endurance</h3><p>Supports longer-lasting performance.</p></div>
        </div>
        <img src="/img/Capsules.png" alt="Amero Product" className="product-center-img" />
        <div className="product-right">
          <div><h3>Stronger Erections</h3><p>Helps you stay firm whenever you desire.</p></div>
          <div><h3>Boosted Confidence</h3><p>Restores self-assurance in intimacy.</p></div>
        </div>
      </div>
    </section>
  )
}

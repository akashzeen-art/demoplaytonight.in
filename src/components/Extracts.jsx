import './Extracts.css'

const extracts = [
  {
    title: 'Ophiocordyceps sinensis Extract (Cordycepin – HPLC Standardized)',
    info: ['Botanical Name: Ophiocordyceps sinensis', 'Active Marker: Cordycepin (standardized by HPLC)'],
    apps: ['Enhances stamina, endurance, and oxygen utilization', 'Supports immune modulation and anti-inflammatory activity', 'Traditionally used for respiratory, kidney, and cardiovascular health'],
  },
  {
    title: 'Tribulus terrestris Extract',
    info: ['Botanical Name: Tribulus terrestris', 'Active Marker: Saponins / Protodioscin'],
    apps: ['Supports male vitality and testosterone modulation', 'Promotes energy, strength, and athletic performance', 'Used in managing urogenital health and overall endurance'],
  },
  {
    title: 'Lepidium sativum L. Extract (Garden Cress)',
    info: ['Botanical Name: Lepidium sativum L.', 'Active Compounds: Glucosinolates, Flavonoids, Minerals (Iron, Calcium)'],
    apps: ['Rich in antioxidants and micronutrients', 'Promotes bone density and joint health', 'Traditionally used for digestion, lactation, and immunity support'],
  },
  {
    title: 'Astaxanthin',
    info: ['Source: Haematococcus pluvialis (microalgae)', 'Active Marker: Astaxanthin (Carotenoid pigment)'],
    apps: ['One of the strongest natural antioxidants', 'Protects skin from UV damage and supports anti-aging', 'Enhances eye, brain, and cardiovascular health', 'Reduces exercise-induced fatigue and oxidative stress'],
  },
  {
    title: 'Withania somnifera Extract (Ashwagandha) + Biotin',
    info: ['Botanical Name: Withania somnifera', 'Active Markers: Withanolides (≥ 5%)', 'Combined With: Biotin (Vitamin B7)'],
    apps: ['Ashwagandha: Adaptogen reducing stress & improving vitality', 'Enhances energy, cognitive function, and sleep quality', 'Biotin: Improves hair, skin, and nail health; supports metabolism', 'Together: Holistic formula for stress resilience + beauty & wellness'],
  },
  {
    title: 'Chlorophytum borivilianum Extract (Safed Musli)',
    info: ['Botanical Name: Chlorophytum borivilianum', 'Active Compounds: Saponins, Alkaloids, Polysaccharides'],
    apps: ['Traditional Ayurvedic rejuvenator & aphrodisiac', 'Enhances male fertility, stamina, and strength', 'Supports recovery from fatigue and improves overall immunity', 'Used in sports nutrition & performance enhancement formulations'],
  },
]

export default function Extracts() {
  return (
    <section className="extracts">
      <h2>Herbal &amp; Nutraceutical Extracts</h2>
      <div className="extracts-grid">
        {extracts.map((e, i) => (
          <div className="extract-card" key={i}>
            <h3>{e.title}</h3>
            <ul>{e.info.map((item, j) => <li key={j}>{item}</li>)}</ul>
            <h4>Applications:</h4>
            <ul>{e.apps.map((item, j) => <li key={j}>{item}</li>)}</ul>
          </div>
        ))}
      </div>
    </section>
  )
}

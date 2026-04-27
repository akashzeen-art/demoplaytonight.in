import './IngredientsTable.css'

const rows = [
  [1, 'Ophiocordycepe Sinesis Extract Cordycepin 13000mcg/g HPLC', 30, 'mg'],
  [2, 'Tribulus Extract (50% Saponins)', 250, 'mg'],
  [3, 'Lepidium Sativum L Extract', 50, 'mg'],
  [4, 'Astaxanthin', 4, 'mg'],
  [5, 'Withania somnifera Extract 5% Withaolids HPLC', 175, 'mg'],
  [6, 'Biotin', 20, 'mg'],
  [7, 'Chlorphytum Borivilianum Extract 20% Saponins', 50, 'mg'],
]

export default function IngredientsTable() {
  return (
    <section className="table-section">
      <h2>KEY INGREDIENTS</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr><th>S.NO.</th><th>ITEM NAME</th><th>EACH</th><th>TAB</th></tr>
          </thead>
          <tbody>
            {rows.map(([no, name, each, tab]) => (
              <tr key={no}><td>{no}</td><td>{name}</td><td>{each}</td><td>{tab}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

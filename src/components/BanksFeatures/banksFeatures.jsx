import Features from '../../data/featureData'
import '../../styles/feature.css'

function BanksFeatures() {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      {Features.map((feature, index) => (
        <div className="feature-item" key={`${feature.title}-${index}`}>
          <img src={feature.logo} alt="feature Icon" className="feature-icon" />
          <h3 className="feature-item-title">{`${feature.title}`}</h3>
          <p>{`${feature.content}`}</p>
        </div>
      ))}
    </section>
  )
}

export default BanksFeatures

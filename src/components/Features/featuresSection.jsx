import FeatureElement from './featureElement'
import Features from '../../data/featureData'
import '../../styles/feature.css'

function FeaturesSection() {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      {Features.map((feature, index) => (
        <FeatureElement key={`${feature.title}-${index}`} title={feature.title} content={feature.content} logo={feature.logo} />
      ))}
    </section>
  )
}

export default FeaturesSection

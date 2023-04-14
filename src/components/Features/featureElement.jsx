function FeatureElement({ title, content, logo }) {
  return (
    <>
      <div className="feature-item">
        <img src={logo} alt="feature Icon" className="feature-icon" />
        <h3 className="feature-item-title">{`${title}`}</h3>
        <p>{`${content}`}</p>
      </div>
    </>
  )
}

export default FeatureElement

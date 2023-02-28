import './index.css'

const CardItem = props => {
  const {cartDetails} = props
  const {title, description, imgUrl, className} = cartDetails
  const cartClass = `card ${className}`
  return (
    <li className={cartClass}>
      <h3 className="card-heading">{title}</h3>
      <p className="card-description">{description}</p>
      <img className="image" src={imgUrl} alt={title} />
    </li>
  )
}

export default CardItem

const Item = (props) => {
  return (
      <article className="product-card" title={props.products.title}>
        <h3 className="product-card__title">{props.products.title}</h3>
        <img src={props.products.image} alt="imagen del producto" className="product-card__image" />
        <p className="product-card__description">${props.products.price}</p>
      </article>
  )
}
export default Item
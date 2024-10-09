/* eslint-disable react/prop-types */
function ProductItem({ product }) {
  return (
    <div className="products-items">
      <div className="products-items-img">
        <img
          src={product?.images[0].src}
          alt="product image"
          className="products-items-img__main"
        />
        <img className="products-items-img-fav" src="/img/favorite.svg" />
      </div>
      <div className="products-items__box">
        <h1>{product?.title}</h1>
        <p>$ {product?.variants[0].price}</p>
      </div>
    </div>
  );
}

export default ProductItem;

function ProductCard() {
  return (
    <div className="product">
      <img
        className="product__image"
        src="https://via.placeholder.com/300"
        alt=""
      />
      <span>Rs 300</span>
      <button>Add to cart</button>
    </div>
  );
}

export default ProductCard;

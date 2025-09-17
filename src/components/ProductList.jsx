const ProductList = ({ products, addToCart }) => {
    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '20px',
            }}
        >
            {
                products.map((product) => (
                    <div
                        key={product.id}
                        style={{
                            border: '1px solid #ddd',
                            padding: '10px',
                            borderRadius: '8px',
                        }}
                    >
                        <img
                            src={product.image}
                            alt={product.title}
                            style={{ width: '100px', height: '100px' }}
                        />
                        <h4>{product.title}</h4>
                        <p>
                            <strong>${product.price}</strong>
                        </p>
                        <button
                            onClick={() => addToCart(product)}
                            style={{
                                padding: '8px',
                                backgroundColor: 'green',
                                color: 'white',
                                border: 'none',
                                borderRadius: '5px',
                            }}
                        >
                            Add to Cart
                        </button>
                    </div>
                ))
            }
        </div>
    )
}
export default ProductList;
import React from 'react';
import Product from './Product/Product';
import Grid from '@material-ui/core/Grid';

const products = [
    { id: 1, name: 'Adidas Shoes', description: 'Running shoes', price: '$200', image: 'https://picsum.photos/400/200'},
    { id: 2, name: 'Macbook', description: 'Apple Macbook', price: '$3000', image: 'https://picsum.photos/400/200'},
];
function Products(props) {
    return (
        <main>
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    );
}

export default Products;
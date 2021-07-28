import React from 'react';
import Product from './Product/Product';
import Grid from '@material-ui/core/Grid';
import useStyle from './styles';

const products = [
    { id: 1, name: 'Adidas Shoes', description: 'Running shoes', price: '$200', image: 'https://media.gucci.com/style/DarkGray_Center_0_0_600x314/1538553607/552089_A9L00_9522_001_100_0000_Light.jpg'},
    { id: 2, name: 'Macbook', description: 'Apple Macbook', price: '$3000', image: 'https://cdn.tgdd.vn/Products/Images/44/231246/apple-macbook-air-2020-mgnd3saa-600x600.jpg'},
];

function Products(props) {
    const classes = useStyle();

    return (
        <main className={classes.content}>
            <div className={classes.toolbar}/>
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
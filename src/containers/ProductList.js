import React, {Component} from 'react';
import Product from '../components/Product'
import {Item} from 'semantic-ui-react';

// const productData = [
//     {
//         title: 'First item',
//         image
//     }
// ]

class ProductList extends Component {
    render() {
        return (
            <Item.Group divided>
                <Product />
                <Product />
            </Item.Group>
        )
    }
}

export default ProductList;
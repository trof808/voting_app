import React, {Component} from 'react';
import {Item} from 'semantic-ui-react';

class Product extends Component {
    render() {
        return (
            <Item>
                <Item.Image src={require('../images/products/image-aqua.png')} size="small" />
                <Item.Content>
                    hi
                </Item.Content>
            </Item>
        )
    }
}

export default Product;
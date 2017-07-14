import React, {Component} from 'react';
import {Container} from 'semantic-ui-react';
import ProductList from './ProductList';

class Root extends Component {
    render() {
        return (
            <Container>
                <ProductList />
            </Container>
        )
    }
}

export default Root;
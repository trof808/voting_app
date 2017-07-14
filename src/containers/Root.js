import React, {Component} from 'react';
import {Container, Header} from 'semantic-ui-react';
import ProductList from './ProductList';

const style = {
    padding: 20
}

class Root extends Component {
    render() {
        return (
            <Container>
                <Header as='h2' icon textAlign='center' dividing style={style}>
                    <Header.Content>
                        Popular Products
                    </Header.Content>
                </Header>
                <div style={style}>
                    <ProductList />
                </div>
            </Container>
        )
    }
}

export default Root;
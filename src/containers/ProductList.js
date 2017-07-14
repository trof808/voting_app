import React, {Component} from 'react';
import Product from '../components/Product'
import {Item} from 'semantic-ui-react';

const productData = [
    {
        id: 1,
        title: 'First item',
        description: 'Description of the first voting Item',
        image: 'image-aqua.png',
        authorImage: 'daniel.jpg',
        author: 'John Smith',
        likes: 2
    },
    {
        id: 2,
        title: 'Second item',
        description: 'Description of the second voting Item',
        image: 'image-rose.png',
        authorImage: 'elliot.jpg',
        author: 'Nikita Trofimov',
        likes: 6
    }
]

class ProductList extends Component {
    render() {
        return (
            <Item.Group divided>
                {
                    productData.map((data) => {
                        return <Product 
                                    key={data.id}
                                    title={data.title} 
                                    description={data.description}
                                    image={data.image}
                                    authorImage={data.authorImage}
                                    author={data.author}
                                    likes={data.likes}/>
                    })
                }
            </Item.Group>
        )
    }
}

export default ProductList;
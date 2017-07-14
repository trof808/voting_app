import React, {Component} from 'react';
import Product from '../components/Product'
import {Item, Icon, Button} from 'semantic-ui-react';

const productData = [
    {
        id: 1,
        title: 'First item',
        description: 'Description of the first voting Item',
        image: 'image-aqua.png',
        authorImage: 'daniel.jpg',
        author: 'John Smith',
        likes: 11
    },
    {
        id: 2,
        title: 'Second item',
        description: 'Description of the second voting Item',
        image: 'image-rose.png',
        authorImage: 'elliot.jpg',
        author: 'Eliot Carter',
        likes: 3
    },
    {
        id: 3,
        title: 'Third item',
        description: 'Description of the third voting Item',
        image: 'image-yellow.png',
        authorImage: 'justen.jpg',
        author: 'Justen Rose',
        likes: 9
    }
]

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Slikes: false,
            products: productData
        }
        this.sortedByLikes = this.sortedByLikes.bind(this);
    }
    sortedByLikes() {
        this.setState({ 
            Slikes: !this.state.Slikes,
            products: this.state.products.sort((a,b) => (
                this.state.Slikes ? b.likes - a.likes : a.likes - b.likes
            )) 
        })
    }
    render() {
        return (
            <div>
                <div className="sortes">
                    <span>Sorted by:</span> <br/>
                    <Button icon onClick={this.sortedByLikes}>
                        Likes <Icon name={this.state.Slikes ? 'caret down' : 'caret up'} />
                    </Button>
                </div>
                <Item.Group divided>
                    {
                        this.state.products.map((data) => {
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
            </div>
        )
    }
}

export default ProductList;
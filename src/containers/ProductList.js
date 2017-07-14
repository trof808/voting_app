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
        likes: 9
    },
    {
        id: 2,
        title: 'Second item',
        description: 'Description of the second voting Item',
        image: 'image-rose.png',
        authorImage: 'elliot.jpg',
        author: 'Eliot Carter',
        likes: 11
    },
    {
        id: 3,
        title: 'Third item',
        description: 'Description of the third voting Item',
        image: 'image-yellow.png',
        authorImage: 'justen.jpg',
        author: 'Justen Rose',
        likes: 3
    }
]

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Slikes: false,
            products: []
        }
        this.sortedByLikes = this.sortedByLikes.bind(this);
        this.handleProductUpVote = this.handleProductUpVote.bind(this);
    }
    componentDidMount() {
        this.setState({ products: productData })
    }
    handleProductUpVote(productId) {
        const nextProducts = this.state.products.map((product) => {
            if(product.id === productId) {
                return Object.assign({}, product, {
                    likes: product.likes + 1
                });
            } else {
                return product
            }
        })

        this.setState({ products: nextProducts })
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
                                        id={data.id}
                                        title={data.title} 
                                        description={data.description}
                                        image={data.image}
                                        authorImage={data.authorImage}
                                        author={data.author}
                                        likes={data.likes}
                                        onVote={this.handleProductUpVote}/>
                        })
                    }
                </Item.Group>
            </div>
        )
    }
}

export default ProductList;
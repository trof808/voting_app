import React, {Component} from 'react';
import {Item, Icon} from 'semantic-ui-react';

class Product extends Component {
    constructor(props) {
        super(props);

        this.handleVote = this.handleVote.bind(this);
    }

    handleVote() {
        this.props.onVote(this.props.id)
    }

    render() {
        return (
            <Item>
                <Item.Image src={require(`../images/products/${this.props.image}`)} size="small" floated="left" />
                <Item.Content>
                    <Item.Header as='a'>{this.props.title}</Item.Header>
                    <Item.Description>{this.props.description}</Item.Description>
                    <Item.Extra>
                        <span>Submitted by: </span>
                        <Item.Image src={require(`../images/avatars/${this.props.authorImage}`)} avatar size="tiny" />
                    </Item.Extra>
                    <Item.Extra>
                        <Icon name='like' onClick={this.handleVote}/>
                        {this.props.likes} Likes
                    </Item.Extra>
                </Item.Content>
                
            </Item>
        )
    }
}

export default Product;
import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Image, Button, Icon } from 'semantic-ui-react'
import { addToCart, add, subtract } from "../actions/action";

class ItemList extends Component {
  addToCart = (e, itemname) => {
    this.props.dispatch(addToCart(itemname));
  };

  add = (e, itemname) => {
    this.props.dispatch(add(itemname));
  };

  subtract = (e, itemname) => {
    this.props.dispatch(subtract(itemname));
  };
  render() {
    const { item } = this.props;
    const itemList = item.map((i, j) => {
      return (
        <div className=" col-xs-4 col-md-3 " data-cart-product key={j}>
          
              <Card.Group>
    <Card fluid>
      <Card.Content>
    
      <Image src={i.src} size='large' />
        <Card.Header fluid>{i.itemname}</Card.Header>
        <Card.Meta>{i.price}</Card.Meta>
       
      </Card.Content>
      <Card.Content extra>
       
      </Card.Content>
      <div>
              
              {!i.cartCount ? (
                <Button inverted color='green'
                  onClick={e => this.addToCart(e, i.itemname)}>
                  Add to cart
                </Button>
              ) : (
                  <div className="number">
                    <Button inverted color='red' onClick={e => this.subtract(e, i.itemname)}>-</Button>
                     <Button inverted color='yellow'> <Icon name='shop' />{i.cartCount}</Button>
                    <Button inverted color='blue' onClick={e => this.add(e, i.itemname)}>+</Button>
                  </div>
                )}
                </div>
                <p>{i.description}</p>
    </Card>
   
    </Card.Group>
          
            </div>
      );
    });
    return <div>{itemList}</div>;
  }
}

const mapStateToProps = state => ({
  item: state.products.item,
  cart: state.products.cart,
  total: state.products.total
});

export default connect(mapStateToProps)(ItemList);

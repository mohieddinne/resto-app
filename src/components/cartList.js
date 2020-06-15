import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Image, Button, Icon } from 'semantic-ui-react'


import { add, subtract, removeItemFromCart } from "../actions/action";

class CartList extends Component {
  add = (e, itemname) => {
    this.props.dispatch(add(itemname));
  };

  subtract = (e, itemname) => {
    this.props.dispatch(subtract(itemname));
  };

  removeItem = (e, itemname, amount) => {
    console.log("amount", amount);
    this.props.dispatch(removeItemFromCart(itemname, amount));
  };

  render() {
    const { cart } = this.props;
    const cartList = cart.map((i, j) => {
      return (
        <div className="col-xs-4 col-md-3" data-cart-product key={j}>
          <div className="thumbnail">
            <div className="caption">
              <h3>{i.itemname}</h3>
              <p>
                {i.price}*{i.cartCount}={i.price * i.cartCount}
              </p>
              <div className="number">
              <div className="number">
                    <Button inverted color='red' onClick={e => this.subtract(e, i.itemname)}>-</Button>
                     <Button inverted color='yellow'> <Icon name='shop' />{i.cartCount}</Button>
                    <Button inverted color='blue' onClick={e => this.add(e, i.itemname)}>+</Button>
                  </div>
                  <Button negative
                  onClick={e =>
                    this.removeItem(e, i.itemname, i.price * i.cartCount)
                  }
                >
                  Remove
                </Button>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return <div>{cartList}</div>;
  }
}

const mapStateToProps = state => ({
  item: state.products.item,
  cart: state.products.cart,
  total: state.products.total
});

export default connect(mapStateToProps)(CartList);

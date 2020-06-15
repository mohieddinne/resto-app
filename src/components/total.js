import React, { Component } from "react";
import { connect } from "react-redux";
import CartList from "./cartList"

class Total extends Component {
  render() {
    const { total } = this.props;
    return <div>
        <hr />
        <CartList />
        <hr />
      Total: {total}</div>;
  }
}

const mapStateToProps = state => ({
  total: state.products.total
});

export default connect(mapStateToProps)(Total);

import React, { Component } from "react";
import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
import ItemList from "./itemList.js";
import CartList from "./cartList.js";

import Total from "./total.js";
import { fetchProducts } from "../actions/fetchData";
import Navbar from "./navbar";

class Main extends Component {
  componentDidMount() {
    this.props.dispatch(fetchProducts());
  }

  render() {
    return (
      <div>
        
      
        <Navbar />
        
<div className="list">
        <ItemList /></div>
      
      </div>
    );
  }
}

const mapStateToProps = state => ({
  item: state.products.item,
  loading: state.products.loading,
  error: state.products.error
});

export default connect(mapStateToProps)(Main);

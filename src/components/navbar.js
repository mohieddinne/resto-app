import React from "react";
import {Image,Button} from 'semantic-ui-react'
import "./NavBar.css"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ItemList from "./itemList"
import CartList from "./cartList"
import Total from "./total.js";
import connection from "./connection";
import inscrit from "./inscrit";


export default class NavBar extends React.Component {
  render() {
    return (
     <ul>
       
      <li> <a>  <Image src='https://wearetech.fr/wp-content/uploads/2016/09/1-3.png' size='small' /></a>
 </li>
 <Router>
    <div>
      <ul>
        <li>

          <Link to="/"> <Image src='https://wearetech.fr/wp-content/uploads/2016/09/1-3.png' size='small' />
<h1>Home</h1></Link> 

        </li>
        <li>
          <Link ><Image src="https://lidiacrochettricot.com/wp-content/uploads/2017/03/Logo-panier-Lidia-Crochet-Tricot.png" size='small'></Image></Link>
          <Link to="/panier"> <h1>panier</h1></Link>
        </li>
        <li>
         <Button negative >  inscription </Button></li>
         <li>
         <Button positive >connexion </Button></li>
        
      </ul>

      <hr />

      <Route exact path="/" component={ItemList} />
      <Route exact path ="/panier" component ={Total}/>
      <Route path="/connx" showPlat={this.showPlat} component={connection} />        
        <Route path="/inscrit" component ={inscrit} />
    </div>
  </Router>;
    
     </ul>
    
      );
  }
} 
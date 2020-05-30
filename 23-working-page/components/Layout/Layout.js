import React, { Component } from 'react';
import Aux from "../../hoc/Aux";
import classes from "./Layout.module.css";
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      showSideDrawer: false
     };
  }

  sideDrawerClosedHAndler =() =>{
this.setState({showSideDrawer: false})
  }

  sideDrawerToogleHAndler =() =>{
    this.setState((prevState)=>{
      return {showSideDrawer: !prevState.showSideDrawer}})
      }


  render() {
    return (
      <Aux>
    <Toolbar drawerToggleClicked={this.sideDrawerToogleHAndler}/>
    <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHAndler}/>
    <main className={classes.content}>{this.props.children}</main>
  </Aux>
    );
  }
}

export default Layout;

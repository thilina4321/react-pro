import React, { Component } from "react";
import Burger from "../components/Burger";
import BurgerBoard from "../components/burgerBoard/BurgerBoard";

export default class BurgerController extends Component {
  state = {
    ingredients: {
      salad: 0,
      source: 0,
      cheese: 0,
    },
  };

  onAddHandler = (item) => {
      let updateIng = {...this.state.ingredients}
      updateIng[item] = this.state.ingredients[item] + 1

      this.setState((item) => {
        return {
            ingredients: updateIng
        };
    });
  };

  onRemoveHandler = (item) => {
      if(this.state.ingredients[item] === 0){
          return
      }

      
    let updateIng = {...this.state.ingredients}
      updateIng[item] = this.state.ingredients[item] - 1

      this.setState((item) => {
        return {
            ingredients: updateIng
        };
    });

  };

  render() {
    return (
      <div className="burger">
        <Burger ingredient={this.state.ingredients} />
        <BurgerBoard
          more={(item) => this.onAddHandler(item)}
          less={(item) => this.onRemoveHandler(item)}
          items={this.state.ingredients}
        />
      </div>
    );
  }
}

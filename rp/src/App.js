import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import FruitBowlCard from "./components/FruitBowlCard";
import Footer from "./components/Footer";
import fruit from "./fruit.json";
import "./App.css";

//sets state to 0 or empty
class App extends Component {
  state = {
    fruit,
    clickedFruit: [],
    score: 0
  };

//When you click on a card, the fruit is taken out of the array
  imageClick = event => {
    const currentFruit = event.target.alt;
    const FruitAlreadyClicked =
      this.state.clickedFruit.indexOf(currentFruit) > -1;

//If you click on a fruit that has already been selected, the game is reset and cards reordered.
    if (FruitAlreadyClicked) {
      this.setState({
        fruit: this.state.fruit.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedFruit: [],
        score: 0
      });
        alert("Sorry - you dropped the bowl of fruit...play again?");

//If you click on an available fish, your score is increased and cards reordered
    } else {
      this.setState(
        {
          fruit: this.state.fruit.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedFruit: this.state.clickedFruit.concat(
            currentFruit
          ),
          score: this.state.score + 1
        },
//if you get all 12 fish corrent you get a congrats message and the game resets        
        () => {
          if (this.state.score === 12) {
            alert("Great Job - You Win!");
            this.setState({
              fruit: this.state.fruit.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedFruit: [],
              score: 0
            });
          }
        }
      );
    }
  };

//the order of components to be rendered: navbar, jumbotron, friendcard, footer 
  render() {
    return (
      <div>
        <Navbar 
          score={this.state.score}
        />
        <Jumbotron />
        <div className="wrapper">
          {this.state.fruit.map(fruit => (
            <FruitBowlCard
              imageClick={this.imageClick}
              id={fruit.id}
              key={fruit.id}
              image={fruit.image}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;
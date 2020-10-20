import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  /* 
  constructor(){
    super();
    console.log("App-Constructor");
  }

  componentDidMount(){
    //Ajax Call
    console.log("App-Mounted");
  }

  render(){
    console.log("App-Rendered");
  }

  componentDidUpdate(prevProps, prevState){
    console.log("prevProps", prepProps);
    console.log("prevState", prepState);
    if(prevProps.counnter.value !== this.prop.counter.value){
      // Ajax call and get new data from the server
    }
  }

  componentWillUnmount(){
    console.log("Counter-Unmount")
  }

*/

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counter[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;

import React, { Component } from "react";
import axios from "axios";
import "./Test.css"

class Test extends Component {
  state = {
    age: Number,
    fact: "",
    chuckFact: ""
  };

  async componentDidMount() {
    try {
      const res = await fetch("https://api.chucknorris.io/jokes/random");
      const data = await res.json();
      this.setState({ chuckFact: data.value });
      console.log(this.state.chuckFact)
    }
    catch (e) {
      console.log(e);
    }
  };





  handleClick = () => {

    const url = "https://api.binance.com";
    const status = url + "/sapi/v1/system/status";
    /* const coins = url + "/sapi/v1/capital/config/getall";
    const time = url + "/api/v3/time"
    const info = url + "/api/v1/exchangeinfo" */
    const timestamp = Date.now();
    try {
      axios.get(status, {
        params: {
          timestamp: timestamp
        }
      })
        .then(res => (console.log(res)));
    } catch (e) {
      console.log(e);
    }
  };

  chuck = () => {
    const res = fetch("https://api.chucknorris.io/jokes/random");
    const data = res.json();
    this.setState({ chuckFact: data.value });
    console.log(this.state.chuckFact)
  }

  render() {
    return (
      <section style={{ padding: "10px" }} id="test">
        {/* <div className="block">
          <h1>Binance</h1>
          <button onClick={this.handleClick}> Binance Status</button>
        </div> */}
        <div className="container">
          <div className="block">
            <h1>Chuck Norris</h1>
            <button onClick={() => this.chuck}> Get a Fact</button>
          </div>
          <div className="block">
            {this.state.chuckFact}
          </div>
        </div>
      </section>
    );
  }
}

export default Test;

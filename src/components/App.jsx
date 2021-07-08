import React, { Component } from 'react';
import CardList from '/src/components/CardList';
import SearchBox from '/src/components/SearchBox';
import Scroll from '/src/components/Scroll';
import ErrorBoundry from '/src/components/ErrorBoundry';
import '/src/assets/css/app.css';
import '/src/assets/js/vendor.js';

class App extends Component {
  state = { robots: [], inputField: '' };

  onSearchChange = (e) => this.setState({ inputField: e.target.value});

  async componentDidMount() {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const json = await res.json();
      const users = await json; 
      setTimeout(() => {
        this.setState({robots: users});
      }, 300);

    } catch(err) {
      console.log(err);
    }
  }

  render() {
    const filteredRobots = this.state.robots.filter(robot => robot.name.toLowerCase().includes(this.state.inputField.toLowerCase()));

    if (!this.state.robots.length) {
      return (
        <div className="app">
          <h1>RoboFriends</h1>
          <h1>Loading<i className="fas fa-spinner fa-pulse"></i></h1>
        </div>
      );
    }

    return (
      <div className="app">
        <h1>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <ErrorBoundry>
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </ErrorBoundry>
      </div>
    );
  }
}
export default App;

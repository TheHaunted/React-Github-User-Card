import React from 'react';
import './App.css';
import UserCard from './components/UserCard';
import 'semantic-ui-css/semantic.min.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      followers: []
    }
  }

  componentDidMount() {
    fetch('https://api.github.com/users/thehaunted')
    .then(res => res.json())
    .then(data => this.setState({user: data}));

    fetch('https://api.github.com/users/thehaunted/followers')
    .then(res => res.json())
    .then(data => this.setState({followers: data}))
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <UserCard user={this.state.user} followers={this.state.followers} />
      </div>
    )
  }
}

export default App;

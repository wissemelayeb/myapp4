import React, { Component } from 'react';

// App component
class App extends Component {
  constructor(props) {
    super(props);

    // Initialize state
    this.state = {
      person: {
        fullName: 'John Doe',
        bio: "I'm a web developer.",
        imgSrc: 'https://example.com/image.jpg',
        profession: 'Web Developer',
      },
      shows: false,
      timeSinceMount: 0,
    };
  }

  // Lifecycle method: componentDidMount
  componentDidMount() {
    // Update timeSinceMount state every second
    this.interval = setInterval(() => {
      this.setState({
        timeSinceMount: this.state.timeSinceMount + 1,
      });
    }, 1000);
  }

  // Lifecycle method: componentWillUnmount
  componentWillUnmount() {
    // Clear the interval when the component is unmounted
    clearInterval(this.interval);
  }

  render() {
    // Destructure state values
    const { person, shows, timeSinceMount } = this.state;

    return (
      <div>
        {/* Button to toggle the profile visibility */}
        <button onClick={() => this.setState({ shows: !shows })}>
          {shows ? 'Hide' : 'Show'} Profile
        </button>

        {/* Conditional rendering of the profile */}
        {shows && (
          <div>
            {/* Profile image */}
            <img src={person.imgSrc} alt={person.fullName} />
            {/* Profile full name */}
            <h2>{person.fullName}</h2>
            {/* Profile bio */}
            <p>{person.bio}</p>
            {/* Profile profession */}
            <p>{person.profession}</p>
          </div>
        )}

        {/* Display the time since mount */}
        <p>Time since mount: {timeSinceMount} seconds</p>
      </div>
    );
  }
}

export default App;

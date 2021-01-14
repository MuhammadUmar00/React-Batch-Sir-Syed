import React from "react";
import Profile from "../Profile";

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      clock: new Date().getSeconds(),
      showResume: false,
      navigate: false,
    };
  }

  //   componentDidMount() {
  //     // very first time after render()
  //     console.log("DID MOUNT");
  //     // this.timerID = setInterval(() => {
  //     //   this.setState({ clock: new Date().getSeconds() });
  //     // }, 1000);
  //   }

  //   componentDidUpdate() {
  //     // on re-render or update
  //     console.log("DID UPDATE");
  //   }

  //   componentDidCatch() {
  //     // on error
  //     console.log("DID CATCH");
  //   }

  //   componentWillUnmount() {
  //     // when component  is going to end
  //     console.log("HOME UNMOUNT");
  //   }

  _doNavigate = () => {
    this.setState({ navigate: true });
  };

  _toggleResume = () => {
    this.setState({ showResume: !this.state.showResume });
  };

  _stopClock = () => {
    console.log("CLOCK STOPPED");
    // clearInterval(this.timerID);
    this._toggleResume();
    this._doNavigate();
  };

  _resumeClock = () => {
    console.log("CLOCK RESUMED");
    this.timerID = setInterval(() => {
      this.setState({ clock: new Date().getSeconds() });
    }, 1000);
    this._toggleResume();
  };

  render() {
    console.log("RENDER");
    let { clock, showResume, navigate } = this.state;
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>Home Component </p>
        <p>{clock}</p>
        <button onClick={this._stopClock}>Stop Clock</button>
        {showResume === true && (
          <button onClick={this._resumeClock}>Resume Clock</button>
        )}
      </div>
    );
  }
}

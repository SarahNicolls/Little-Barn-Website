import React, { Component } from "react";
import glamorous from "glamorous";

class Hero extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
      backgroundImg: backgroundArr[0]
    };
  }

  changeBackgroundFn = () => {
    const { counter } = this.state;

    if (counter === backgroundArr.length - 1) {
      this.setState(state => ({
        ...state,
        counter: 0,
        backgroundImg: backgroundArr[0]
      }));
    } else {
      this.setState(state => ({
        ...state,
        counter: counter + 1,
        backgroundImg: backgroundArr[counter + 1]
      }));
    }
  };

  backgroundInterval = setInterval(this.changeBackgroundFn, 4000);

  componentDidMount() {
    this.backgroundInterval;
  }

  componentWillUnmount() {
    clearInterval(this.backgroundInterval);
  }

  render() {
    const { backgroundImg, counter } = this.state;
    return (
      <div className="App">
        <header>
          <h1>React background carousel</h1>
        </header>
        <Carousel background={backgroundImg} />
      </div>
    );
  }
}

const backgroundArr = ["url(/images/doors.jpeg)", "url(/images/Dresser.jpg)"];

const Carousel = glamorous.div(props => ({
  minWidth: 300,
  minHeight: 600,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  transition: "background 1s linear",
  backgroundImage: props.background || "purple"
}));

export default Hero;

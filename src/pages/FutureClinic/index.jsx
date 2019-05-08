import React, { Component } from "react";
import BScroll from "better-scroll";
import Future1 from "./component/future1";
import Future2 from "./component/future2";
import Future3 from "./component/future3";
import Future4 from "./component/future4";
import Future5 from "./component/future5";
import Future6 from "./component/future6";
import Future7 from "./component/future7";
import Future8 from "./component/future8";
import Future9 from "./component/future9";
import Future10 from "./component/future10";
import "./style.styl";

export default class FutureClinic extends Component {
  constructor(props) {
    super(props);
    // this.setHtmlFontSize();
    document.title = "未来诊所介绍";
    this.state = {
      height: window.innerHeight || document.body.clientHeight
    };
  }
  _initSlide() {
    this.slide = new BScroll(this.list, {
      scrollX: false,
      scrollY: true,
      momentum: false,
      directionY: -1,
      snap: {
        loop: false,
        threshold: 0,
        speed: 400
      },
      bounce: false,
      click: true
    });
  }

  componentDidMount() {
    this._initSlide();
  }

  nextSlide() {
    this.slide.next();
  }

  setHtmlFontSize() {
    const html = document.querySelector("html");
    const device_width = window.innerWidth || document.body.clientWidth;
    let scale = device_width / 375;
    let distSize = scale * 50;
    if (distSize > 80) {
      distSize = 80;
    }
    html.style.fontSize = `${distSize}px`;
  }

  render() {
    const { height } = this.state;
    return (
      <div
        id="list"
        className="list"
        ref={el => (this.list = el)}
        style={{ height: height }}
      >
        <div className="list-group" style={{ height: height * 10 }}>
          <Future1
            styles={{ height: height }}
            next={this.nextSlide.bind(this)}
          />
          <Future2
            styles={{ height: height }}
            next={this.nextSlide.bind(this)}
          />
          <Future3
            styles={{ height: height }}
            next={this.nextSlide.bind(this)}
          />
          <Future4
            styles={{ height: height }}
            next={this.nextSlide.bind(this)}
          />
          <Future5
            styles={{ height: height }}
            next={this.nextSlide.bind(this)}
          />
          <Future6
            styles={{ height: height }}
            next={this.nextSlide.bind(this)}
          />
          <Future7
            styles={{ height: height }}
            next={this.nextSlide.bind(this)}
          />
          <Future8
            styles={{ height: height }}
            next={this.nextSlide.bind(this)}
          />
          <Future9
            styles={{ height: height }}
            next={this.nextSlide.bind(this)}
          />
          <Future10
            styles={{ height: height }}
            next={this.nextSlide.bind(this)}
          />
        </div>
      </div>
    );
  }
}

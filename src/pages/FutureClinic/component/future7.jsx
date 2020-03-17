/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import pic1 from "./a1.png";
import pic2 from "./a2.png";
import pic3 from "./a3.png";
import pic4 from "./a4.png";
import pic5 from "./a5.png";
import pic6 from "./a6.png";
import pic7 from "./a7.png";
import pic8 from "./a8.png";
import pic9 from "./a9.png";
import pic10 from "./a10.png";
import pic11 from "./a11.png";
import pic12 from "./a12.png";
export default class FutureClinic extends Component {
  constructor() {
    super();
    this.state = {
      allList: [
        "BMI值",
        "血压",
        "身高cm",
        "血氧%",
        "体脂lbs",
        "心率次/分",
        "体重Kg",
        "基础代谢",
        "呼吸次/分",
        "内脏脂肪等级",
        "蛋白质",
        "骨骼量"
      ],
      allPic: [
        pic1,
        pic2,
        pic3,
        pic4,
        pic5,
        pic6,
        pic7,
        pic8,
        pic9,
        pic10,
        pic11,
        pic12
      ]
    };
  }
  render() {
    return (
      <div className="container_future7">
        <div className="title">基础体征检测数据类型：</div>
        <ul className="bar">
          {this.state.allList.map((val, num) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <li key={num}>
                <img src={this.state.allPic[num]} alt="图片" />
                <span>{val}</span>
              </li>
            );
          })}
        </ul>
        <div className="nextBtn" />
      </div>
    );
  }
}

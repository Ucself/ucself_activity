import React, { Component } from "react";
import f10_line from "./imgs/f10_line.png";

export default class FutureClinic extends Component {
  constructor() {
    super();
    this.state = {
      allList: [
        {
          name: "AI安全用药",
          description:
            "用药风险及时提醒，用法用量合理规划，药物冲突实时预警，为您的用药安全提供双重保障"
        },
        {
          name: "AI辅诊系统",
          description:
            "全科医生的好帮手，AI 智能提示可能诊断、检验检查、药品等，每一位为您诊疗的医生，都能达到专家水平"
        },
        {
          name: "AI导诊",
          description:
            "不知道看什么科室和医生？不用在导诊台排队等待，直接问AI为您指路"
        },
        {
          name: "AI预问诊",
          description:
            "看医生说不清自己的问题？AI预问诊，一问一答之间，帮助医生更好地理解您"
        },
        {
          name: "......",
          description: ""
        }
      ]
    };
  }
  render() {
    const { styles } = this.props;
    return (
      <div className="future10 future-page" style={styles}>
        {/* <img src={require('./all.png')} alt="" className="bg" /> */}
        <div className="sectionInfo">
          <div className="secondPage_title">
            <div className="secondPage_sequence">05</div>
            <div className="secondPage_title_parent">
              <div className="secondPage_title_tag" />
              <div className="secondPage_title_name">AI 全能赋能</div>
            </div>
            <div className="secondPage_subtitle">
              第二颗超智慧大脑，为你的看病保驾护航
            </div>
          </div>
        </div>
        <ul className="bar">
          {this.state.allList.map((val, num) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <li key={num}>
                {num === 0 ? (
                  ""
                ) : (
                  <img className="imgName" src={f10_line} alt="图片" />
                )}

                <img
                  className="imgHead"
                  src={require("./imgs/f10_" + (num + 1) + ".png")}
                  alt="图片"
                />
                <div className="bigName">{val.name}</div>
                <div className="smallName">{val.description}</div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

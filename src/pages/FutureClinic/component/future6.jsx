import React, { Component } from "react";
import "../style.styl";
import "./future6.styl";
import secondPage from "./Future6Images/secondPage.png";
export default class Future6 extends Component {
  render() {
    const { styles } = this.props;
    return (
      <div className="future2 future-page" style={styles}>
        <div className="sectionInfo">
          <div className="secondPage_title">
            <div className="secondPage_sequence">03</div>
            <div className="secondPage_title_parent">
              <div className="secondPage_title_tag" />
              <div className="secondPage_title_name">健康终端体测魔镜</div>
            </div>
            <div className="secondPage_subtitle">
              健康微体测魔镜，让您及时了解身体的变化
            </div>
          </div>
          <div className="secondPage_detailThreeN">
            通过微信扫码开启体测，全程仅需1~2分钟即可自助完成基础体征指标的测量。魔镜会对您的健康状况进行分析，报告5秒自动发送至手机，包括体重、BMI、心电、血氧、肌肉量、基础代谢等，为您在控重、纤体、肌肉训练、营养平衡和诊断疾病等方面提供科学有效的数据。而基于人脸识别的自助分诊屏，能帮助您进行智能分诊。同时，优选硬件展示区，会提供一些智能硬件实现您的自助健康管理。
          </div>
          <div className="secondPage_detailTwoN">
            <img
              src={secondPage}
              className="secondPage_detailTwo_image"
              alt="图片"
            />
          </div>
        </div>
        <div className="pulldown" onClick={this.props.next}>
          <img src={require("./imgs/pulldown.png")} alt="" />
        </div>
      </div>
    );
  }
}

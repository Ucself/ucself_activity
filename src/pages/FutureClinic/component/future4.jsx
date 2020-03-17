import React, { Component } from "react";
import "../style.styl";
import "./future4.styl";
import secondPage from "./Future4Images/secondPage.png";
export default class Future4 extends Component {
  render() {
    const { styles } = this.props;
    return (
      <div className="future2 future-page" style={styles}>
        <div className="sectionInfo">
          <div className="secondPage_title">
            <div className="secondPage_sequence">02</div>
            <div className="secondPage_title_parent">
              <div className="secondPage_title_tag" />
              <div className="secondPage_title_name">健康小站</div>
            </div>
            <div className="secondPage_subtitle">
              让优质的健康医疗服务触手可及
            </div>
          </div>
          <div className="secondPage_detailOne">
            <div className="secondPage_detailOne_text">
              我们畅想一种方式, 能够让每一个地区、每一个有人聚集的地方,
              都能有便捷的诊所为大家提供医疗健康服务
            </div>
          </div>
          <div className="secondPage_detailTwo">
            <img
              src={secondPage}
              className="secondPage_detailTwo_image"
              alt="图片"
            />
          </div>
          <div className="secondPage_detailThree">
            健康小站，正是基于这一理念应运而生。我们希望,
            通过互联网与智能设备的融合,
            将便捷健康检测、远程面诊、以及快捷的健康医疗产品获取融为一体，以“智能微型诊所”的形态部署至所有人能够方便抵达的距离内，让优质的健康医疗服务触手可及。
          </div>
        </div>
        <div className="pulldown" onClick={this.props.next}>
          <img src={require("./imgs/pulldown.png")} alt="" />
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import "../style.styl";
import "./future8.styl";
import secondPage from "./Future8Images/secondPage.png";
export default class Future8 extends Component {
  render() {
    const { styles } = this.props;
    return (
      <div className="future2 future-page" style={styles}>
        <div className="sectionInfo">
          <div className="secondPage_title">
            <div className="secondPage_sequence">04</div>
            <div className="secondPage_title_parent">
              <div className="secondPage_title_tag" />
              <div className="secondPage_title_name">未来专家诊室</div>
            </div>
            <div className="secondPage_subtitle">
              获得更权威的治疗建议，感受有温度的医疗
            </div>
          </div>
          <div className="secondPage_detailOne">
            <div className="secondPage_detailOne_text">
              想在家门口就能看上三甲医生？想不用长途拔涉，就能看上北上广专家？想在伴侣出差时，也能一起陪孩子看病？
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
            在企鹅诊所的未来诊室，这一切都能实现。医助提前帮你整理看病资料，全科医生现场与你面对面，专家和亲友远程接过视频接入，在未来专家诊室，获得更权威的治疗建议，也感受到医疗的温度。
          </div>
        </div>
        <div className="pulldown" onClick={this.props.next}>
          <img src={require("./imgs/pulldown.png")} alt="图片" />
        </div>
      </div>
    );
  }
}

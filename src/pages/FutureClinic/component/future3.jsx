import React, { Component } from "react";
import "../style.styl";
import "./future3.styl";
import thirdPage01 from "./Future3Images/thirdPage_01.png";
import thirdPage02 from "./Future3Images/thirdPage_02.png";
import thirdPage03 from "./Future3Images/thirdPage_03.png";
import thirdPage04 from "./Future3Images/thirdPage_04.png";
import thirdPage01bg from "./Future3Images/thirdPage_01bg.png";
import thirdPage02bg from "./Future3Images/thirdPage_02bg.png";
import thirdPage03bg from "./Future3Images/thirdPage_03bg.png";
import thirdPage04bg from "./Future3Images/thirdPage_04bg.png";
export default class Future3 extends Component {
  render() {
    const { styles } = this.props;
    return (
      <div className="future2  future-page" style={styles}>
        <div className="sectionInfo thirdPage">
          <div className="thirdPage_2">
            <div className="thirdPage_2_content">
              <img
                src={thirdPage02}
                className="thirdPage_itemImage"
                alt="图片"
              />
              <img src={thirdPage02bg} className="thirdPage_2_bg" alt="图片" />
              <div className="thirdPage_itemTitle">基因检测</div>
              <div className="thirdPage_itemSubTitle">看见命运的底牌</div>
              <div
                className="thirdPage_itemContentCell"
                style={{ "margin-top": 5 }}
              >
                <div className="thirdPage_itemContentPoint" />
                <div className="thirdPage_itemContentTitle">
                  肿瘤风险基因检测
                </div>
              </div>
              <div className="thirdPage_itemContentCell">
                <div className="thirdPage_itemContentPoint" />
                <div className="thirdPage_itemContentTitle">
                  用药指导基因检测
                </div>
              </div>
              <div className="thirdPage_itemContentCell">
                <div className="thirdPage_itemContentPoint" />
                <div className="thirdPage_itemContentTitle">
                  个人特质基因检测
                </div>
              </div>
            </div>
          </div>
          <div className="thirdPage_1">
            <div className="thirdPage_1_content">
              <img
                src={thirdPage01}
                className="thirdPage_itemImage"
                alt="图片"
              />
              <img src={thirdPage01bg} className="thirdPage_1_bg" alt="图片" />
              <div className="thirdPage_itemTitle">体液检测</div>
              <div className="thirdPage_itemSubTitle">卫生间量身定制的检测</div>
              <div
                className="thirdPage_itemContentCell"
                style={{ "margin-top": 5 }}
              >
                <div className="thirdPage_itemContentPoint" />
                <div className="thirdPage_itemContentTitle">尿液健康自测</div>
              </div>
              <div className="thirdPage_itemContentCell">
                <div className="thirdPage_itemContentPoint" />
                <div className="thirdPage_itemContentTitle">早早孕检测</div>
              </div>
              <div className="thirdPage_itemContentCell">
                <div className="thirdPage_itemContentPoint" />
                <div className="thirdPage_itemContentTitle">排卵检测</div>
              </div>
            </div>
          </div>
          <div className="thirdPage_4">
            <div className="thirdPage_4_content">
              <img
                src={thirdPage04}
                className="thirdPage_itemImage"
                alt="图片"
              />
              <img src={thirdPage04bg} className="thirdPage_4_bg" alt="图片" />
              <div className="thirdPage_itemTitle">健康个护产品</div>
              <div className="thirdPage_itemSubTitle">便捷自如</div>
              <div
                className="thirdPage_itemContentCell"
                style={{ "margin-top": 5 }}
              >
                <div className="thirdPage_itemContentPoint" />
                <div className="thirdPage_itemContentTitle">
                  卫生巾、安全套、纸巾
                </div>
              </div>
              <div className="thirdPage_itemContentCell">
                <div className="thirdPage_itemContentPoint" />
                <div className="thirdPage_itemContentTitle">
                  组合、伤口快速处理包
                </div>
              </div>
            </div>
          </div>
          <div className="thirdPage_3">
            <div className="thirdPage_3_content">
              <img
                src={thirdPage03}
                className="thirdPage_itemImage"
                alt="图片"
              />
              <img src={thirdPage03bg} className="thirdPage_3_bg" alt="图片" />
              <div className="thirdPage_itemTitle">自助检测</div>
              <div className="thirdPage_itemSubTitle">
                自己就能轻易完成的 健康筛查
              </div>
              <div
                className="thirdPage_itemContentCell"
                style={{ "margin-top": 5 }}
              >
                <div className="thirdPage_itemContentPoint" />
                <div className="thirdPage_itemContentTitle">HPV病毒检测</div>
              </div>
              <div className="thirdPage_itemContentCell">
                <div className="thirdPage_itemContentPoint" />
                <div className="thirdPage_itemContentTitle">噗噗管便检</div>
              </div>
            </div>
          </div>
        </div>
        <div className="pulldown" onClick={this.props.next}>
          <img src={require("./imgs/pulldown.png")} alt="图片" />
        </div>
      </div>
    );
  }
}

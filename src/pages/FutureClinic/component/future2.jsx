import React, { Component } from 'react';
import '../style.styl';
import './future2.styl';
import secondPage from './Future2Images/secondPage.png';
export default class Future2 extends Component {
    render() {
        const { styles } = this.props;
        return (
            <div className="future2 future-page" style={styles}>
                <div className="sectionInfo">
                    <div className="secondPage_title">
                        <div className="secondPage_sequence">01</div>
                        <div className="secondPage_title_parent">
                            <div className="secondPage_title_tag" />
                            <div className="secondPage_title_name">
                                智能健康终端
                            </div>
                        </div>
                        <div className="secondPage_subtitle">
                            健康终端是一种全新的健康筛查与检测方式
                        </div>
                    </div>
                    <div className="secondPage_detailOne">
                        <div className="secondPage_detailOne_text">
                            它会部署在您身边的写字楼、商场、社区卫生间当中，您可以通过微信扫码获取多种方便快捷的无创健康自测产品。
                        </div>
                    </div>
                    <div className="secondPage_detailTwo">
                        <img
                            src={secondPage}
                            className="secondPage_detailTwo_image"
                        />
                    </div>
                    <div className="secondPage_detailThree">
                        不必排队去医院，足不出户就可以做一次健康检查。
                        如尿常规检测、早孕检测、排卵检测,
                        或者是来一次超便捷的基因检测,
                        让您在日常工作和生活的空间内即可进行专业级的健康筛查;
                        同时还提供一些便捷的健康个护产品以应对您的不时之需,
                        例如卫生巾与安全套。
                    </div>
                </div>
                <div className="pulldown" onClick={this.props.next}>
                    <img src={require('./imgs/pulldown.png')} alt="" />
                </div>
            </div>
        );
    }
}

import React, { Component } from 'react';
import '../style.styl';
export default class Future5 extends Component {
    render() {
        const { styles } = this.props;
        return (
            <div className="future5 future-page" style={styles}>
                <div className="item" style={{ 'padding-top': 50 }}>
                    <div className="icon">
                        <img src={require('./imgs/5-icon-1.png')} alt="" />
                    </div>
                    <div className="right">
                        <div className="title">健康新零售</div>
                        <div className="desc">
                            15种日常个护产品及⾮处方药物零售，覆盖90%⽇常紧急购药场景，24小时开放，步行距离5KM内
                        </div>
                    </div>
                </div>

                <div className="item">
                    <div className="icon">
                        <img src={require('./imgs/5-icon-2.png')} alt="" />
                    </div>
                    <div className="right">
                        <div className="title">自助体检</div>
                        <div className="desc">
                            3分钟急速自助体检，覆盖9项人体最基本体征数据,集成现有市场所有无创式检测设备
                        </div>
                    </div>
                </div>

                <div className="item">
                    <div className="icon">
                        <img src={require('./imgs/5-icon-3.png')} alt="" />
                    </div>
                    <div className="right">
                        <div className="title">远程问诊</div>
                        <div className="desc">
                            数百位企鹅全科医生全程候诊，随时随地，与医生面对面沟通
                        </div>
                    </div>
                </div>

                <div className="item">
                    <div className="icon">
                        <img src={require('./imgs/5-icon-4.png')} alt="" />
                    </div>
                    <div className="right">
                        <div className="title">线上电子处方</div>
                        <div className="desc">
                            体检舱数据实时同步问诊端医生，以数据为支撑，在线开具电子处方，各大药店30分钟内配送上门
                        </div>
                    </div>
                </div>

                <div className="item">
                    <div className="icon">
                        <img src={require('./imgs/5-icon-5.png')} alt="" />
                    </div>
                    <div className="right">
                        <div className="title">氧吧</div>
                        <div className="desc">
                            头昏疲惫嗜睡、反应迟钝、精神不集中等多种症状，健康小站氧吧沉浸式环境，帮助您祛除疲惫、压力的阴霾
                        </div>
                    </div>
                </div>

                <img
                    src={require('./imgs/5-bg.png')}
                    alt=""
                    className="feature5_bg"
                />
                <div className="pulldown" onClick={this.props.next}>
                    <img src={require('./imgs/pulldown.png')} alt="" />
                </div>
            </div>
        );
    }
}

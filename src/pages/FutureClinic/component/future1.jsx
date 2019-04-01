import React, { Component } from 'react';
import '../style.styl';
export default class Future1 extends Component {
    render() {
        const { styles } = this.props;
        return (
            <div className="future1 future-page" style={styles}>
                <img src={require('./imgs/1-icon.png')} className="icon" />
                <div className="title">
                    <img src={require('./imgs/1-title.png')} />
                </div>
                <div className="desc">
                    健康终端机器、智能微体测魔镜、健康小站以及未来专家诊室
                </div>
                <div className="desc">
                    皆致力于随时随地帮助用户发现健康问题。
                </div>
                <div className="desc">
                    我们专注于您的健康，而您可以专注于生活。
                </div>
                <div className="clinic">
                    <img src={require('./imgs/1-clinic.png')} />
                </div>
                <div className="pulldown" onClick={this.props.next}>
                    <img src={require('./imgs/pulldown.png')} alt="" />
                </div>
            </div>
        );
    }
}

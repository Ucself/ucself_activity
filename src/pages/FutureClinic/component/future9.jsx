import React, { Component } from 'react';
export default class FutureClinic extends Component {
    constructor() {
        super();
        this.state = {
            allList: [
                {
                    name: '更权威',
                    description:
                        '更权威的治疗方案与建议、全国44万专家任选、线上线下专家随诊'
                },
                {
                    name: '更省时',
                    description:
                        '更省时的就诊及检验服务、全国33家企鹅门诊、 公立价格私立服务'
                },
                {
                    name: '更快速',
                    description:
                        '更快获得检验及诊疗结果、加速获得检查结果、 私密就诊无需排队'
                },
                {
                    name: '更安心',
                    description:
                        '更安心的家人朋友远程陪诊、一键邀约亲友 同步面诊全程'
                }
                // },
                // {
                //     name: '更智能',
                //     description:
                //         'AI安全用药、AI辅诊系统……第二颗超智慧大脑，为你的看病保驾护航'
                // }
            ]
        };
    }
    render() {
        const { styles } = this.props;
        return (
            <div className="container_future9 future-page" style={styles}>
                <img
                    src={require('./all.png')}
                    alt=""
                    className="feature9_bg"
                />
                <div className="title">企鹅医生见专家，你会拥有：</div>
                <ul className="bar">
                    {this.state.allList.map((val, num) => {
                        return (
                            // eslint-disable-next-line react/jsx-key
                            <li key={num}>
                                <div className="bigName">{val.name}</div>
                                <div className="smallName">
                                    {val.description}
                                </div>
                            </li>
                        );
                    })}
                </ul>
                <div className="pulldown" onClick={this.props.next}>
                    <img src={require('./imgs/pulldown.png')} alt="" />
                </div>
            </div>
        );
    }
}

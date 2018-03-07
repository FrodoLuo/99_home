import React from 'react';
import { Icon } from 'antd';
import commonStyle from './common-style.less';
import style from './cover.less';

import bg from '../../assets/image/about/a_01.jpg';

class Cover extends React.Component {
  state = {
    interested: false,
  }
  handleInterest = () => {
    this.setState({
      interested: true,
    });
  }
  handleInterestLost = () => {
    this.setState({
      interested: false,
    });
  }
  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${bg})`,
        }}
        className={commonStyle['card-wrap']}
      >
        <div className={style['content-wrap']}>
          <div className={style['interest-area']} onMouseEnter={this.handleInterest} />
          <div
            className={style['welcome']}
            style={{
              opacity: this.state.interested ? 0 : 1,
            }}
          >
            <h1>始于连接的未来企业</h1>
          </div>
          <div
            className={style['intro']}
            style={{
              opacity: this.state.interested ? 1 : 0,
            }}
          >
            <p>
              玖久诞生于2016年, 诞生之初, 便不拘泥于定式,
              以在线(Online)方式为起始组件咨询服务团队,
              并纳入全国诸多优秀高校学生的智慧资产; 虽不十分成熟,
              却很快获得快速发展的商业巨头认可, 心怀感激。发展至今,
              就就已经聚合了足以新来的指挥人才, 并与数以百计的新青年建立信任纽带,
              而自身则以创造价值内核, 不断突破传统, 致力于为企业创造&quot;无边界的商业资讯服务体验&quot;:
              包括人力(智力)资源无边界(提供不设上限的人力(智力)资源支持),
              服务地域范围无边界(已经以&quot;自营&quot;的方式, 在全国超过30个主要城市(的线下),
              随时发起高品质的市场调查), 敏捷程度无边界(远远快过业内标准,
              能最大程度匹配企业洞察市场的时效), 探索前沿无边界(基于玖九)。
              而与此同时, 优秀的青年人在也在玖久的平台上获取了商业事业和咨询技能, 快速成长。
            </p>
            <div onClick={this.props.next} className={style['button']}>
              <Icon type="down" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Cover;

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
          <div className={style['interest-area']} />
          <div
            className={style['welcome']}
            style={{
              opacity: this.state.interested ? 0 : 1,
            }}
          >
            <h1>始于连接的未来企业</h1>
          </div>
          <div
            onMouseEnter={this.handleInterest}
            className={style['intro']}
            style={{
              opacity: this.state.interested ? 1 : 0,
            }}
          >
            <p>
              玖久诞生于2016年，由数位前尼尔森资深咨询顾问创立，<br />独具一格地采用全在线协作的方式，纳入全国各地优秀高校学子为核心智慧资产，<br />致力于为合作伙伴提供 “无边界的市场咨询服务”的同时，也赋能青年商业实践机会。<br />
              <br />
              <p>
                玖久致力于的“无边界”体验有三：<br /><br />
                <b>服务地域范围无边界</b><br />
                能快速发起全国超过30个城市的线下市场调查<br />
                <b>敏捷程度无边界</b><br />
                可随时发起项目，项目处理时效远超同业，保证及时洞察商机<br />
                <b>人力（智力）资源无边界</b><br />
                以不设上限的优质人力（智力）资源支持项目，保证项目高质量<br />
              </p>
              <br />
              而这样的服务理念和品质，也让玖久先后获得多家商业巨头和数以百计的全国高校学子的信任与支持。<br />
              心怀感激的同时，玖久也将继续大步前行，力求更好地链接企业和青年学子、提供合作伙伴更优质的服务。<br />
              <br />
              在此，玖久也诚挚的邀请您成为我们的合作伙伴，共同以高效形态探索商业前沿、洞察市场先机！<br />
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

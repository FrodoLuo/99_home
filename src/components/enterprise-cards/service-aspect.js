import React from 'react';
import { connect } from 'dva';
import commonStyle from './common-style.less';
import SimpleCarousel from '../simple-carousel/simple-carousel';
import bg from '../../assets/image/enterprise/e_01.jpg';
import bg2 from '../../assets/image/enterprise/e_02.jpg';
import bg3 from '../../assets/image/enterprise/e_03.jpg';
import Button from '../button/button';

import { e1, e2, e3 } from '../../assets/article';

import style from './service-aspect.less';

const buttonStyle = {
  bottom: 0,
  left: 0,
  position: 'absolute',
  width: '8rem',
  fontSize: '1.1rem',
  margin: 0,
};

function ServiceAspect(props) {
  return (
    <div
      className={commonStyle['card-wrap']}
      style={{ backgroundImage: `url(${bg})` }}
    >
      <SimpleCarousel>
        <div className={style['content-card']} data-background={bg}>
          <div className={style['intro']}>
            <h1>追赶式洞察</h1>
            <p>
              通过深度量化的方式，收集用户反馈，帮助企业紧跟快速升级用户诉求。<br />
              玖久蜂鸟，敏捷高效。
            </p>
          </div>
          <Button
            small
            onClick={() => {
              props.dispatch({
                type: 'article/setContent',
                payload: e1,
              });
            }}
            style={buttonStyle} text="了解更多"
          />
        </div>
        <div className={style['content-card']} data-background={bg2}>
          <div className={style['intro']}>
            <h1>零距离洞察</h1>
            <p>
              基于有效场景下的科学观察法，采用标准化的信息采集方式，挖掘用户行为及需求背后的一切可能性关联，帮助企业深入了解用户诉求。<br />
              玖久魔镜，直达用户的心。
            </p>
          </div>
          <Button
            small
            onClick={() => {
              props.dispatch({
                type: 'article/setContent',
                payload: e2,
              });
            }} style={buttonStyle} text="了解更多"
          />
        </div>
        <div className={style['content-card']} data-background={bg3}>
          <div className={style['intro']}>
            <h1>青年浸润研究</h1>
            <p>
              以青年视角零距离观察年轻用户，全面挖掘年轻用户的想法，帮助企业牢牢抓住“未来”的商业趋势及价值所在。<br />
              以青年之眼，还原最真实的青年用户。
            </p>
          </div>
          <Button
            small
            onClick={() => {
              props.dispatch({
                type: 'article/setContent',
                payload: e3,
              });
            }} style={buttonStyle} text="了解更多"
          />
        </div>
      </SimpleCarousel>
    </div>
  );
}


export default connect()(ServiceAspect);

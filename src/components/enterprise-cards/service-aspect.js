import React from 'react';
import { connect } from 'dva';
import commonStyle from './common-style.less';
import SimpleCarousel from './simple-carousel';
import bg from '../../assets/image/enterprise/e_01.jpg';
import bg2 from '../../assets/image/enterprise/e_02.jpg';
import bg3 from '../../assets/image/enterprise/e_03.jpg';
import Button from '../button/button';

import { e1, e2, e3 } from '../../assets/article';

import style from './service-aspect.less';

const buttonStyle = {
  left: '2rem',
  bottom: '2.5rem',
  position: 'absolute',
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
              通过深度量化的方式，收集用户反馈，帮助企业紧跟快速升级用户诉求。
              了解你的用户，只需要这一小步
            </p>
          </div>
          <Button
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
              基于有效场景下的观察，采用标准化的信息采集方式，近距离挖掘用户需求及行为，以搜集更多用户信息及其态度。
              玖久带您走进用户场景，零距离洞察用户心智
                      </p>
          </div>
          <Button
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
              通过记录青年真实行为和挖掘青年内在想法，帮助企业深入洞察青年用户。
              以青年之眼，还原最真实的青年用户
            </p>
          </div>
          <Button
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

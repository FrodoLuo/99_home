import React from 'react';
import { connect } from 'dva';

import { insight_1 as insight1, insight_2 as insight2 } from '../../assets/article';

import commonStyle from './common-style.less';
import bg from '../../assets/image/enterprise/e_04.jpg';
import style from './think-depth.less';
import listImg from '../../assets/image/500056635.png';

function ThinkDepth(props) {
  return (
    <div
      className={commonStyle['card-wrap']}
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className={style['content-wrap']}>
        <div className={style['left-wrap']}>
          <div className={style['content']}>
            <h1>商业评价</h1>
          </div>
        </div>
        <div className={style['right-wrap']}>
          <div className={style['content']}>
            <h1>思考洞察</h1>
            <div className={style['list-wrap']}>
              <span className={style['order']}>01</span>
              <a
                onClick={() => {
                  props.dispatch({
                    type: 'article/setContent',
                    payload: insight1,
                  });
                }}
              >
                未来已来
              </a>
              <img src={listImg} role="presentation" />
            </div>
            <div className={style['list-wrap']}>
              <span className={style['order']}>02</span>
              <a
                onClick={() => {
                  props.dispatch({
                    type: 'article/setContent',
                    payload: insight2,
                  });
                }}
              >
                近来, 为什么深度思考越发重要?
              </a>
              <img src={listImg} role="presentation" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect()(ThinkDepth);

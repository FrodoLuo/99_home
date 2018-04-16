import React from 'react';
import { connect } from 'dva';

import { insight_1 as insight1, insight_2 as insight2 } from '../../assets/article';
import { xuezack } from '../../assets/author';

import commonStyle from './common-style.less';
import bg from '../../assets/image/enterprise/e_04.jpg';
import style from './think-depth.less';
import listImg from '../../assets/image/enterprise/insight/r-1.jpg';
import listImg2 from '../../assets/image/enterprise/insight/r-2.jpg';

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
            <div style={{ visibility: 'hidden', width: '100%', textAlign: 'center', fontSize: '1.5rem' }}>
              文章修改中
            </div>
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
                    type: 'article/setContentWithAuthor',
                    payload: { content: insight1, author: xuezack },
                  });
                }}
              >
                未来已来<br />
                <span>by Zach</span>
              </a>
              <img src={listImg} role="presentation" />
            </div>
            <div className={style['list-wrap']}>
              <span className={style['order']}>02</span>
              <a
                onClick={() => {
                  props.dispatch({
                    type: 'article/setContentWithAuthor',
                    payload: { content: insight2, author: xuezack },
                  });
                }}
              >
                近来, 为什么深度思考越发重要?<br />
                <span>by Zach</span>
              </a>
              <img src={listImg2} role="presentation" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect()(ThinkDepth);

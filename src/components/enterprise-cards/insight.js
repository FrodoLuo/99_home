import React from 'react';
import { connect } from 'dva';
import commonStyle from './common-style.less';
// import bg from '../../assets/image/537222.png';
import style from './insight.less';

function Insight(props) {
  return (
    <div
      className={commonStyle['card-wrap']}
      // style={{
      //   backgroundImage: `url(${bg})`,
      // }}
    >
      <div className={style['content-wrap']}>
        <div className={`${style['left']} ${style['sub-card']}`}>
          <div className={style['title']}>
            <h1>
              初创企业
            </h1>
            <h2>
              方法论
            </h2>
          </div>
        </div>
        <div className={`${style['right-top']} ${style['sub-card']}`}>
          <div className={style['title']}>
            <h1>
              大型企业
            </h1>
            <h2>
              方法论
            </h2>
          </div>
        </div>
        <div
          className={`${style['right-bottom-left']} ${style['sub-card']}`}
          onClick={
            () => {
              props.dispatch({
                type: 'article/setContent',
                payload: (
                  <div>
                    <h1 id="对话年轻群体" name="对话年轻群体">
                      对话年轻群体
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                      deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste
                      natus error sit voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                      beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                      sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
                      qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
                      dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
                      quia non numquam eius modi tempora incidunt ut labore et dolore magnam
                      aliquam quaerat voluptatem.
                    </p>
                    <h1 id="123" name="123">
                      测试目录跳转
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                      deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste
                      natus error sit voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                      beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                      sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
                      qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
                      dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
                      quia non numquam eius modi tempora incidunt ut labore et dolore magnam
                      aliquam quaerat voluptatem.
                    </p>
                  </div>
                ),
              });
            }
          }
        >
          <div
            className={style['title']}
          >
            <h1>
              巨头企业
            </h1>
            <h2>
              方法论
            </h2>
          </div>
        </div>
        <div className={`${style['right-bottom-right']} ${style['sub-card']}`}>
          <div className={style['title']}>
            <h1>
              其他企业
            </h1>
            <h2>
              方法论
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
export default connect()(Insight);

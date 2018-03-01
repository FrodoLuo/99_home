import React from 'react';
import { connect } from 'dva';
import commonStyle from './common-style.less';
import style from './create.less';

import brainStorm from '../../assets/image/brain-storm.png';
import out from '../../assets/image/outside.png';
import bg from '../../assets/image/youth/y_05.jpg';
import Button from '../button/button';

import { inside, outside } from '../../assets/article';

function Create(props) {
  return (
    <div
      className={commonStyle['card-wrap']}
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className={style['content-wrap']}>
        <div className={style['content']}>
          <div className={style['logo']}>
            <img src={brainStorm} role="presentation" />
          </div>
          <div className={style['title']}>
            内部创造
          </div>
          <div className={style['intro']}>
            <p>
              一个最简单能证明玖久站在时代前沿、拥有把握住趋势脉搏的洞察，
              是这里的思考与方法论同样适用于掀起外部世界的创造与变革，
              这里可以让你站在不同群体、认知之间，每一次回首，都有巨大的浪潮可以掀起。
            </p>
          </div>
          <Button
            style={{ transform: 'scale(0.7)' }}
            onClick={() => {
              props.dispatch({
                type: 'article/setContent',
                payload: inside,
              });
            }} text="了解更多"
          />
        </div>
        <div className={style['content']}>
          <div className={style['logo']}>
            <img src={out} role="presentation" />
          </div>
          <div className={style['title']}>
            外部创造
          </div>
          <div className={style['intro']}>
            <p>
              整个商业世界在以越来越快的速度物演进步，领导潮流的不再只是企业，
              也涌入越来越多的前沿消费者，如果想了解他们，不再是看热点、
              填问卷和爬取消费习惯数据那么简单。想要发现什么，我们不断追问自己。
            </p>
          </div>
          <Button
            style={{ transform: 'scale(0.7)' }}
            onClick={() => {
              props.dispatch({
                type: 'article/setContent',
                payload: outside,
              });
            }} text="了解更多"
          />
        </div>
      </div>
    </div>
  );
}

export default connect()(Create);

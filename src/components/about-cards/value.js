import React from 'react';
import { connect } from 'dva';
import commonStyle from './common-style.less';
import style from './value.less';
import bg from '../../assets/image/about/a_05.jpg';

import Button from '../button/button';
import SimpleTab from '../simple-tab/simple-tab';

import { value } from '../../assets/article';

function Value(props) {
  return (
    <div
      className={commonStyle['card-wrap']}
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <SimpleTab
        style={{
          height: '30rem',
          width: '50%',
          left: 0,
          right: 0,
          top: '2rem',
          bottom: 0,
          margin: 'auto',
        }}
        index={1}
        data={[
          {
            title: '愿景',
            content: (
              <div className={style['content-wrap']}>
                <p>
                  <b>未来1-3年</b>，玖久期望通过持续通过连接商业力量（企业、商业人和新青年）的方式构建玖久自身和提供服务。<br />
                </p>
                <p>
                  <b>对企业</b>，玖久将致力于成长为“企业人力（智力）资源配置解决方案提供商“，为企业提供差异化的人资配置方案。<br />
                </p>
                <p>
                  <b>对新青年</b>，玖久将为青年学生提供海量商业实践机会并会打造一所商业思维学堂。<br />
                </p>
                <Button
                  colorful
                  onClick={() => {
                    props.dispatch({
                      type: 'article/setContent',
                      payload: value,
                    });
                    window.location.hash = '#愿景';
                  }}
                  style={{
                    transform: 'scale(0.7)',
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    margin: '0 auto',
                    bottom: '-30px',
                  }} text="了解更多"
                />
              </div>
            ),
          }, {
            title: '使命',
            content: (
              <div className={style['content-wrap']}>
                <p>
                  致力于为企业创造价值，为青年赋能。
                </p>
                <p>
                  在理解和逐步融入企业、商业人和新青年的基础上，玖久通过将多方需求进行连接和匹配，最大限度的调动各方优势，创造新价值。
                </p>
                <p>
                  与此同时，玖久自身也将努力探索这种商业模式下的发展潜力和空间，践行玖久关注事物本质的价值观。
                </p>
                <Button
                  colorful
                  onClick={() => {
                    props.dispatch({
                      type: 'article/setContent',
                      payload: value,
                    });
                    window.location.hash = '#使命';
                  }}
                  style={{
                    transform: 'scale(0.7)',
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    margin: '0 auto',
                    bottom: '-30px',
                  }} text="了解更多"
                />
              </div>
            ),
          }, {
            title: '价值观',
            content: (
              <div className={style['content-wrap']}>
                <p>
                  致力于引领工业革命和信息革命后的另一次革命: 智慧革命.
                  基于对人类资源和当前社会与商业形态的重新思考.
                  玖久致力于以全新的方式构建商业组织: 建立全新
                  的智慧平台型组织, 高效使用所有可以集中起来的智慧资源
                </p>
                <Button
                  colorful
                  onClick={() => {
                    props.dispatch({
                      type: 'article/setContent',
                      payload: value,
                    });
                    window.location.hash = '#价值观';
                  }}
                  style={{
                    transform: 'scale(0.7)',
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    margin: '0 auto',
                    bottom: '-30px',
                  }} text="了解更多"
                />
              </div>
            ),
          },
        ]}
      />
    </div>
  );
}

export default connect()(Value);

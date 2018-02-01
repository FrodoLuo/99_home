import React from 'react';

import commonStyle from './common-style.less';
import style from './value.less';
import bg from '../../assets/image/500553231.png';

import Button from '../button/button';
import SimpleTab from '../simple-tab/simple-tab';

export default function () {
  return (
    <div
      className={commonStyle['card-wrap']}
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <SimpleTab
        style={{
          height: '55%',
          width: '70%',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          margin: 'auto',
        }}
        data={[
          {
            title: '愿景',
            content: (
              <div className={style['content-wrap']}>
                <p>
                  致力于引领工业革命和信息革命后的另一次革命: 智慧革命.
                  基于对人类资源和当前社会与商业形态的重新思考.
                  玖久致力于以全新的方式构建商业组织: 建立全新
                  的智慧平台型组织, 高效使用所有可以集中起来的智慧资源
                </p>
                <Button
                  backgroundColor="rgb(0, 110, 255)"
                  style={{
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
                  致力于引领工业革命和信息革命后的另一次革命: 智慧革命.
                  基于对人类资源和当前社会与商业形态的重新思考.
                  玖久致力于以全新的方式构建商业组织: 建立全新
                  的智慧平台型组织, 高效使用所有可以集中起来的智慧资源
                </p>
                <Button
                  backgroundColor="rgb(0, 110, 255)"
                  style={{
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
                  backgroundColor="rgb(0, 110, 255)"
                  style={{
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

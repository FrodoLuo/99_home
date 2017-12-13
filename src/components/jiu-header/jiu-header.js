import React from 'react';
import style from './jiu-header.less';

export default () => {
  return (
    <div className={style['header-wrap']}>
      <div className={style['header-nav-part']}>
        <span>
          <a>企业服务</a>
        </span>
        <span>
          <a>新青年实践</a>
        </span>
      </div>
      <div className={style['header-logo']}>
        <span>
          <a>
            Logo Here.
          </a>
        </span>
      </div>
      <div className={style['header-nav-part']}>
        <span>
          <a>关于玖久</a>
        </span>
        <span>
          <a>联系我们</a>
        </span>
      </div>
    </div>
  );
};

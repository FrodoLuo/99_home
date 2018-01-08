import React from 'react';
import style from './jiu-header.less';
import logo from '../../assets/image/logo.png';

export default (props) => {
  return (
    <div className={style['header-wrap']}>
      <div className={style['header-nav-part']}>
        <span className={props.enterprise ? style['active'] : ''}>
          <a href="/enterprise">企业服务</a>
        </span>
        <span className={props.young ? style['active'] : ''}>
          <a href="/young">新青年实践</a>
        </span>
      </div>
      <div className={style['header-logo']}>
        <span>
          <a href="/">
            <img className={style['logo']} src={logo} role="presentation" />
          </a>
        </span>
      </div>
      <div className={style['header-nav-part']}>
        <span className={props.about ? style['active'] : ''}>
          <a>关于玖久</a>
        </span>
        <span className={props.contact ? style['active'] : ''}>
          <a>联系我们</a>
        </span>
      </div>
    </div>
  );
};

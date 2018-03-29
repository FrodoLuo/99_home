import React from 'react';
import { Icon } from 'antd';
import { Link } from 'dva/router';
import style from './jiu-header.less';
import logo from '../../assets/image/logo.png';

export default (props) => {
  return (
    <div id="header" className={style['header-wrap']} style={{ position: props.fixed ? 'fixed' : '' }}>
      <div className={style['header-nav-part']}>
        <span className={props.enterprise ? style['active'] : ''}>
          <Link to="/enterprise">企业服务</Link>
        </span>
        <span className={props.young ? style['active'] : ''}>
          <Link to="/young">新青年实践</Link>
        </span>
      </div>
      <div className={style['header-logo']}>
        <span>
          <Link to="/">
            <img className={style['logo']} src={logo} role="presentation" />
            <Icon className={style['home']} type="home" />
          </Link>
        </span>
      </div>
      <div className={style['header-nav-part']}>
        <span className={props.about ? style['active'] : ''}>
          <Link to="/about">关于玖久</Link>
        </span>
        <span className={props.contact ? style['active'] : ''}>
          <Link to="/contact" onClick={() => { window.scrollTo(0, 0); }}>联系我们</Link>
        </span>
      </div>
    </div>
  );
};

import React from 'react';
import style from './jiu-footer.less';

export default function (props) {
  return (
    <div className={style['footer-wrap']}>
      <div className={style['footer-info-wrap']}>
        <div className={style['footer-info-left-wrap']}>
          leftparts
          <div className={style['logo-and-intro']}>
            <div>
              this is a part of logo
            </div>
            <div>
              <p>
                A Paragraph of  a instruction.
              </p>
            </div>
          </div>
          <div>
            <span>玖久大成合作伙伴</span>
            <div className={style['logos-container']}>
              <span>logo1</span>
              <span>logo1</span>
              <span>logo1</span>
            </div>
          </div>
        </div>
        <div className={style['footer-info-right-wrap']}>
          right-parts\n
          consists of contacts.
        </div>
      </div>
      <div className={style['footer-bottom-wrap']}>
        <div className={style['footer-nav']}>
          <a>首页</a>
          <a>企业服务</a>
          <a>新青年实践</a>
          <a>关于玖久</a>
          <a>联系我们</a>
        </div>
        <div className={style['footer-copyright']}>
          <span>
            <a>京ICP备12047175号-4</a>Copyright 2017 玖久
          </span>
        </div>
      </div>
    </div>
  );
}

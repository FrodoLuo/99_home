import React from 'react';
import { Affix, Button, Icon } from 'antd';

import style from './author-intro.less';

class AuthorIntro extends React.Component {
  render() {
    return (

      <div className={style['wrap']} style={{ flex: 1 }}>
        <div className={style['intro-wrap']}>
          <h1>作者简介</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
               sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit
                 esse cillum dolore eu fugiat nulla pariatur. Excepteur
                 sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim.
            </p>
        </div>
        <Affix offsetTop={0} onChange={(para) => { return false; }}>
          <div className={style['button-wrap']}>
            <div className={style['button']}>
              <Icon type="edit" />
            </div>
            <div className={style['button']}>
              <Icon type="scan" />
            </div>
          </div>
        </Affix>
      </div>

    );
  }
}
export default AuthorIntro;

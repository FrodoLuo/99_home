import React from 'react';
import commonStyle from './common-style.less';
import SimpleCarousel from './simple-carousel';
import bg from '../../assets/image/500459742.png';


export default function ServiceAspect(props) {
  return (
    <div
      className={commonStyle['card-wrap']}
      style={{ backgroundImage: `url(${bg})` }}
    >
      <SimpleCarousel>
        <div>rua!</div>
        <div>aha!</div>
      </SimpleCarousel>
    </div>
  );
}

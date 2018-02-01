import React from 'react';
import style from './button.less';

function Button(props) {
  const color = props.color || 'rgb(255,255,255)';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="213px" height="77px"
      onClick={props.onclick}
      className={style['button-wrap']}
      style={props.style}
    >
      <path
        fillRule="evenodd"
        stroke={props.backgroundColor ? props.backgroundColor : color}
        strokeWidth="2px"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        fill={props.backgroundColor || 'none'}
        d="M38.000,1.000 L175.000,1.000 C195.435,1.000 212.000,17.565 212.000,38.000 C212.000,58.435 195.435,75.000 175.000,75.000 L38.000,75.000 C17.565,75.000 1.000,58.435 1.000,38.000 C1.000,17.565 17.565,1.000 38.000,1.000 Z"
      />
      <path
        fillRule="evenodd"
        stroke={color}
        strokeWidth="2px"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        fill="none"
        d="M76.000,9.000 L38.000,9.000 C38.000,9.000 17.154,9.751 11.000,31.000 "
      />
      <path
        fillRule="evenodd"
        stroke={color}
        strokeWidth="2px"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        fill="none"
        d="M10.000,37.000 C10.000,37.000 9.060,44.918 13.000,50.000 "
      />
      <path
        fillRule="evenodd"
        stroke={color}
        strokeWidth="2px" strokeLinecap="butt"
        strokeLinejoin="miter" fill="none"
        d="M202.000,45.000 C202.000,45.000 199.673,62.950 179.000,68.000 "
      />
      <text
        fontFamily="HYQiHei" fill={color} fontSize="29.167px" x="107px" y="48.6210000000001px" textAnchor="middle"
      >
        {props.text}
      </text>
    </svg>
  );
}
export default Button;

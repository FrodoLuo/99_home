import React from 'react';
import { Icon } from 'antd';
import style from './carousel.less';

export default class Carousel extends React.Component {
  state = {
    currentIdex: 0,
    children: [],
    left: 0,
  }
  componentDidMount() {
    if (this.props.autoplay) { this.interval = setTimeout(this.next, 5000); }
  }
  componentWillUpdate() {
    clearTimeout(this.interval);
  }
  componentDidUpdate() {
    if (this.props.autoplay) { this.interval = setTimeout(this.next, 5000); }
  }
  interval = null;
  next = () => {
    const index = this.state.currentIdex;
    this.setState({
      currentIdex: index === this.props.children.length - 1 ? 0 : index + 1,
    });
  }
  prev = () => {
    const index = this.state.currentIdex;
    this.setState({
      currentIdex: index === 0 ? this.props.children.length - 1 : index - 1,
    });
  }
  nextIndex = (index) => {
    return index === this.props.children.length - 1 ? 0 : index + 1;
  }
  prevIndex = (index) => {
    return index === 0 ? this.props.children.length - 1 : index - 1;
  }
  render() {
    const arrowStyle = {
      fontSize: 48,
      color: 'rgba(255,255,255,0.7)',
      cursor: 'pointer',
    };
    const children = [];
    for (const item of this.props.children) {
      children.push(
        <div
          key={children.length}
          className={style['content']}
        >
          {item}
        </div>,
      );
    }
    let dots = null;
    if (this.props.dots) {
      dots = [];
      for (const item of this.props.children) {
        const index = dots.length;
        dots.push(
          <span
            className={`${style['dot']} ${this.state.currentIdex === dots.length ? style['active'] : ''}`}
            key={dots.length}
            onClick={() => {
              this.setState({
                currentIdex: index,
              });
            }}
          />,
        );
      }
    }
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          overflow: this.props.fade ? 'visiable' : 'hidden',
        }}
      >
        <div
          className={style['content-wrap']}
          style={{
            left: (-100 * this.state.currentIdex).toString().concat('%'),
            width: (this.props.children.length * 100).toString().concat('%'),
          }}
        >
          {children}
        </div>
        {this.props.arrows ? (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: '100%',
              width: this.props.fade ? '140%' : '100%',
              position: 'absolute',
              padding: '10%',
              left: this.props.fade ? '-20%' : 0,
              top: 0,
            }}
          >
            <div
              style={arrowStyle}
              onClick={this.prev}
            >
              {this.props.prevArrow || <Icon
                style={{ color: this.props.fade ? '#333333' : '#ffffff' }}
                type="left"
              />}
            </div>
            <div
              style={arrowStyle}
              onClick={this.next}
            >
              {this.props.nextArrow || <Icon
                style={{ color: this.props.fade ? '#333333' : '#ffffff' }}
                type="right"
              />}
            </div>
          </div>
        ) : null}
        {this.props.dots ? (
          <div className={style['dots-wrap']}>
            {dots}
          </div>
        ) : null}
      </div>
    );
  }
}

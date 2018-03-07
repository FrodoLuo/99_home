import React from 'react';
import { Icon, Tooltip } from 'antd';
import style from './fullscreen-scroll.less';
import QR from '../../assets/image/QRCode/public.bmp';

class FullScreenScroll extends React.Component {
  state = {
    currentIndex: 0,
    next: true,
    clientHeight: 0,
    showQR: false,
  }
  componentDidMount() {
    this.header = window.document.getElementById('header');
  }
  data = {
    startX: 0,
    endX: 0,
    startY: 0,
    endY: 0,
  }
  header = null;
  scrollTo = (index) => {
    let i = index < 0 ? 0 : index;
    i = i >= this.props.children.length ? this.props.children.length - 1 : i;
    this.setState({
      currentIndex: i,
    });
  };
  handleScroll = (event) => {
    if (event.deltaY > 0) {
      this.scrollNext(event);
    } else {
      this.scrollPrev(event);
    }
  }
  handleTouchStart = (event) => {
    console.log(event.targetTouches);
  }
  handleTouchEnd = (event) => {
    console.log(event.changedTouches);
  }
  scrollNext = (event) => {
    const index = this.state.currentIndex;
    if (index === this.props.children.length - 2) {
      this.headerFade(false);
    }
    if (index < this.props.children.length - 1) {
      event.preventDefault();
      this.setState({
        currentIndex: index + 1,
        next: true,
      });
    }
  }
  scrollPrev = (event) => {
    const index = this.state.currentIndex;
    if (index === this.props.children.length - 1) {
      this.headerFade(true);
    }
    if (index > 0) {
      event.preventDefault();
      this.setState({
        currentIndex: index - 1,
        next: false,
      });
    }
  }
  wrapChildren = () => {
    const children = [];
    let os = 0;
    if (this.state.currentIndex === this.props.children.length - 1) {
      os = '522px';
    }
    const last = this.state.currentIndex === this.props.children.length - 1;

    for (const child of this.props.children) {
      const index = children.length;
      const over = children.length < this.state.currentIndex;
      const at = children.length === this.state.currentIndex;
      const below = children.length > this.state.currentIndex;
      const beforeLast = children.length === this.props.children.length - 2;
      const atLast = children.length === this.props.children.length - 1;
      const cover = children.length === 0 && this.props.withCover;
      const clonedCover = React.cloneElement(child, {
        next: this.scrollNext,
      });
      children.push(
        <div
          onWheel={at || beforeLast ? this.handleScroll : null}
          key={children.length}
          style={{
            clip: (at || below) ? 'rect(auto auto 100vh auto)' : (last && beforeLast) ? 'rect(auto auto 100vh auto)' : 'rect(auto auto 0vh auto)',
            zIndex: atLast ? 0 : (this.props.children.length - children.length - 1) * 100,
            bottom: last && beforeLast ? '522px' : 0,
            transitionDelay: at ? '0s' : '0.1s',
          }}
          className={`${style['child-wrap']} ${at ? '' : style['not-active']}`}
        >
          {cover ? clonedCover : child}
          {beforeLast ? (
            <div
              className={style['masking']}
              style={{
                visibility: last ? 'visible' : 'hidden',
                opacity: last ? 1 : 0,
              }}
            />
          ) : null}
        </div>,
      );
    }
    return children;
  }
  wrapDot = () => {
    const dots = [];
    for (let i = 0; i < this.props.children.length; i += 1) {
      const cover = i === 0 && this.props.withCover;
      if (!(this.props.children[i].props['data-ignore'] || cover)) {
        dots.push(
          <div
            key={i}
            className={`${style['dot']} ${i === this.state.currentIndex ? style['active'] : ''}`}
            onClick={() => { this.scrollTo(i); }}
          >
            <div
              className={`${style['dot-ahead']} ${i === this.state.currentIndex ? style['active-dot'] : ''}`}
            >
              <span>{this.props.children[i].props.title || null}</span>
            </div>
          </div>,
        );
      }
    }
    return dots;
  }
  headerFade = (flag) => {
    window.document.getElementById('header').style.opacity = flag ? 1 : 0;
    window.document.getElementById('header').style.visibility = flag ? 'visible' : 'hidden';
  }
  toggleQR = () => {
    this.setState({
      showQR: !this.state.showQR,
    });
  }
  render() {
    const cover = this.state.currentIndex === 0 && this.props.withCover;
    return (
      <div style={{ height: '100%', minWidth: 1024, position: 'relative' }}>
        <div
          className={style['QR-masking-wrapper']}
          onClick={this.toggleQR}
          style={this.state.showQR ?
          {
            opacity: 1,
            visibility: 'visible',
          }
          :
          {
            opacity: 0,
            visibility: 'hidden',
          }}
        >
          <img src={QR} className={style['QR-code']} alt="" />
          <p>
            扫描二维码关注玖久大成微信公众号<br /> 及时获取最新咨询
          </p>
          <span>
            <Icon type="close" />
          </span>
        </div>
        <div
          onTouchStart={this.handleTouchStart}
          onTouchEnd={this.handleTouchEnd}
          className={style['scroll-wrap']}
        >
          {this.wrapChildren()}
        </div>
        <div
          className={style['dots-wrap']}
          style={{
            opacity: (this.state.currentIndex === this.props.children.length - 1) || cover ? 0 : 1,
          }}
        >
          {this.wrapDot()}
        </div>
        <div
          className={style['button-wrap']}
          style={{ opacity: this.state.currentIndex === this.props.children.length - 1 ? 0 : 1 }}
        >

          {this.props.enterprise ? (
            <Tooltip title="需求问卷" text>
              <a href="https://jinshuju.net/f/XF0Poy" className={style['button']}>
                <Icon type="edit" />
              </a>
            </Tooltip>
          ) : null}
          <Tooltip title="关注玖久" text>
            <div className={style['button']} onClick={this.toggleQR}>
              <Icon type="scan" />
            </div>
          </Tooltip>
        </div>
      </div>
    );
  }
}
export default FullScreenScroll;

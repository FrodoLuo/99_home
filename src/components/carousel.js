import React from 'react';

export default class Carousel extends React.Component {
  state = {
    currentIdex: 0,
    children: [],
  }
  componentWillMount() {
    const c = [];
    for (const item of this.props.children) {
      c.push(React.cloneElement(item, {
        style: {
          ...item.props.style,
          position: 'absolute',
          left: 0,
          top: 0,
        },
        key: c.length,
        className: item.props.className.concat(' carousel-child'),
      }));
    }
    this.setState({
      children: c,
    });
  }
  componentDidMount() {
    for (let i = 1; i < this.state.children.length; i += 1) {
      window.document.getElementsByClassName('carousel-child')[i].style.opacity = 0;
    }
    this.interval = setTimeout(this.next, 5000);
  }
  componentWillUpdate() {
    clearTimeout(this.interval);
    window.document.getElementsByClassName('carousel-child')[this.state.currentIdex].style.opacity = 0;
    window.document.getElementsByClassName('carousel-child')[this.nextIndex(this.state.currentIdex)].style.opacity = 0;
  }
  componentDidUpdate() {
    window.document.getElementsByClassName('carousel-child')[this.state.currentIdex].style.opacity = 1;
    this.interval = setTimeout(this.next, 5000);
  }
  interval = null;
  next = () => {
    const index = this.state.currentIdex;
    this.setState({
      currentIdex: index === this.state.children.length - 1 ? 0 : index + 1,
    });
  }
  prev = () => {
    const index = this.state.currentIdex;
    this.setState({
      currentIdex: index === 0 ? this.state.children.length - 1 : index - 1,
    });
  }
  nextIndex = (index) => {
    return index === this.state.children.length - 1 ? 0 : index + 1;
  }
  prevIndex = (index) => {
    return index === 0 ? this.state.children.length - 1 : index - 1;
  }
  render() {
    return (
      <div style={{ width: '100%', height: '100%', display: 'flex', position: 'relative' }}>
        <div style={{ width: '100%', height: '100%', display: 'flex', position: 'relative' }}>
          {this.state.children}
        </div>
        {this.props.arrows ? (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: '100%',
              width: '100%',
              position: 'absolute',
              left: 0,
              top: 0,
            }}
          >
            <div>
              {this.props.prevArrow || null}
            </div>
            <div>
              {this.props.nextArrow || null}
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

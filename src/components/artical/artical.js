import React from 'react';
import { connect } from 'dva';
import { Icon, Button } from 'antd';
import style from './artical.less';

class Article extends React.Component {
  state = {
    content: '',
    visible: false,
    rendered: false,
  };
  componentWillReceiveProps(nextProps) {
    this.setState({
      content: nextProps.content,
      visible: nextProps.visible,
      author: nextProps.author || null,
      rendered: true,
    });
    if (this.state.visible) {
      if (window.document.getElementById('article').scrollTo) { window.document.getElementById('article').scrollTo(0, 0); }
      window.document.body.style.overflow = 'auto';
    } else {
      window.document.body.style.overflow = 'hidden';
    }
  }
  componentWillUnmount() {
    window.document.body.style.overflow = 'auto';
  }
  renderNav = () => {
    if (!this.state.content) {
      return '';
    } else {
      const navList = [];
      const children = this.state.content.props.children;
      for (const item of children) {
        if (item.type === 'h1') {
          navList.push(
            <a href={`#${item.props.id}`} key={navList.length}>
              {item.props.children}
            </a>,
          );
        }
      }
      return navList;
    }
  }

  render() {
    if (this.state.rendered) {
      window.document.getElementById('header').style.padding = this.state.visible ? '2.5rem 10rem' : '4.5rem 10rem';
    }
    return (
      <div className={this.state.visible ? style['article-wrap-open'] : style['article-wrap-close']}>
        <div className={this.state.visible ? style['artical-content-wrap'] : style['artical-content-wrap-hidden']}>
          <div id="article" className={this.state.visible ? style['artical-content'] : style['artical-content-hidden']}>
            {this.state.content}
          </div>
        </div>
        <div className={style['button-wrap']}>
          <Button
            onClick={
              () => {
                this.props.dispatch({
                  type: 'article/setVisible',
                  payload: false,
                });
              }
            }
            shape="circle"
            type="primary"
            className={this.state.visible ? style['button'] : style['button-hidden']}
          >
            <Icon className={style['button-icon']} type="close" />
          </Button>
        </div>
        <div className={this.state.visible ? style['article-wrap-background'] : style['article-wrap-background-hidden']}>
          {this.state.author ?
            (
              <div className={`${style['author-wrapper']} ${this.state.visible ? '' : style['author-wrap-hidden']}`}>
                <h3>作者信息</h3>
                <div className={style['author']}>
                  <span className={style['name']}>{this.state.author.name}</span><span className={style['position']}>{this.state.author.position}</span>
                </div>
                <div className={style['author-intro']}>
                  <p>
                    {this.state.author.intro}
                  </p>
                </div>
              </div>
            )
            :
            (
              <div className={`${style['nav-wrap']} ${this.state.visible ? '' : style['nav-wrap-hidden']}`}>
                {this.renderNav()}
              </div>
            )}
        </div>
      </div>
    );
  }
}
export default connect(
  (models) => {
    return models.article;
  },
)(Article);

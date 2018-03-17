import React from 'react';
import { connect } from 'dva';
import { Icon, Button } from 'antd';
import style from './artical.less';

class Article extends React.Component {
  state = {
    content: '',
    visible: false,
  };
  componentWillReceiveProps(nextProps) {
    this.setState({
      content: nextProps.content,
      visible: nextProps.visible,
      author: nextProps.author || null,
    });
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
    return (
      <div className={this.state.visible ? style['article-wrap-open'] : style['article-wrap-close']}>
        <div className={this.state.visible ? style['artical-content-wrap'] : style['artical-content-wrap-hidden']}>
          <div className={this.state.visible ? style['artical-content'] : style['artical-content-hidden']}>
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

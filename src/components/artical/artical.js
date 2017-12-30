import React from 'react';
import { Icon, Button } from 'antd';
import style from './artical.less';

class Artical extends React.Component {
  state = {
    content: '',
  };
  componentWillMount() {
    // todo 根据传来的path参数来请求文章内容
    console.log(this.props.path);
  }
  render() {
    return (
      <div className={style['artical-wrap']}>
        <div className={style['artical-content']}>
          {this.state.content}
          <h1>
            对话年轻群体
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste
            natus error sit voluptatem accusantium doloremque laudantium, totam rem
            aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
            beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
            sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
            qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
            dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
            quia non numquam eius modi tempora incidunt ut labore et dolore magnam
            aliquam quaerat voluptatem.
          </p>
        </div>
        <Button shape="circle" type="primary" className={style['button']}>
          <Icon className={style['button-icon']} type="close" />
        </Button>
      </div>
    );
  }
}
export default Artical;

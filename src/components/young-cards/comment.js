import React from 'react';
import { connect } from 'dva';
import commonStyle from './common-style.less';
import style from './comment.less';
import Carousel from '../carousel/carousel';
import bg from '../../assets/image/youth/y_08.jpg';
import hhk from '../../assets/image/youth/hhk.jpg';
import ly from '../../assets/image/youth/ly.jpg';
import zbe from '../../assets/image/youth/zbe.jpg';
import { commentHHK, commentLY, commentZBE } from '../../assets/article';
import { huanghuikai, luoyang, zhaobill } from '../../assets/author';
// import avatar from '../../assets/image/avatar.png';

function Comment(props) {
  const showArticle = (article, author) => {
    props.dispatch({
      type: 'article/setContentWithAuthor',
      payload: { content: article, author },
    });
  };
  return (
    <div
      className={commonStyle['card-wrap']}
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className={style['content-wrap']}>
        <Carousel arrows>
          <div className={style['single-wrap']} onClick={() => { showArticle(commentHHK, huanghuikai); }}>
            <div className={style['avatar-wrap']}>
              <img role="presentation" src={hhk} />
            </div>
            <div className={style['intro-wrap']}>
              <span className={style['name']}>黄晖凯</span>
              <span className={style['title']}>玖久创始团队成员</span>
            </div>
            <div className={style['intro']}>
              <p>
                现就职于欧莱雅集团，曾于梅赛德斯-奔驰、阿玛尼美妆及帕特农咨询等公司或品牌实习
            </p>
            </div>
            <div className={style['comment']}>
              <p>
                入职玖久的学生可以成为产品经理、咨询项目经理，也可以是各部门的老大或成员，
                玖久充分相信高校学生的潜力，在每个业务线上都鼓励成员做最重要的事情，
                积极发挥个人创造性，从而让成员收获更多区别于普通实习的成就感，终至个人时间高度价值化。
            </p>
            </div>
          </div>
          <div className={style['single-wrap']} onClick={() => { showArticle(commentLY, luoyang); }}>
            <div className={style['avatar-wrap']}>
              <img role="presentation" src={ly} />
            </div>
            <div className={style['intro-wrap']}>
              <span className={style['name']}>罗杨</span>
              <span className={style['title']}>玖久创始团队成员</span>
            </div>
            <div className={style['intro']}>
              <p>
                就职于网易游戏影业部门，宝洁BRM Summer intern offer，曾在RB、ATK、联合利华、Uber、网易等实习
            </p>
            </div>
            <div className={style['comment']}>
              <p>
                无论在我求职过程中还是工作之后，我接触过大量有潜力但在某些关键环节出现问题的实习生：
                用惯性思考来理解所有未知的事物，在沟通中更关注将自己所想所解表达出来、有着“对方需要
                理解我”的执念，对自我成长的定义模糊，以“事情做完一件是一件”的态度工作着。
            </p>
            </div>
          </div>
          <div className={style['single-wrap']} onClick={() => { showArticle(commentZBE, zhaobill); }}>
            <div className={style['avatar-wrap']}>
              <img role="presentation" src={zbe} />
            </div>
            <div className={style['intro-wrap']}>
              <span className={style['name']}>赵比尔</span>
              <span className={style['title']}>玖久创始团队成员</span>
            </div>
            <div className={style['intro']}>
              <p>
                京东集团管培生。曾在华夏幸福战略发展中心、链家研究院、正心谷创新资本实习。
            </p>
            </div>
            <div className={style['comment']}>
              <p>
                “99ers对解决商业问题充满兴趣，有着难能可贵的自我驱动力。
                不断追求高效地工作之余，又轻松愉快地进行各种商业逻辑或
                未来畅想等话题的讨论。99ers的自驱性和接受的各种训练，
            使得其异常优秀”<br />
                这是我的体会。<br />
                我希望，你也来尝试；我想，你会有意想不到的收获
            </p>
            </div>
          </div>
        </Carousel>
      </div>
    </ div>
  );
}
export default connect()(Comment);

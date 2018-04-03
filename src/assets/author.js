/* eslint-disable */
class author {
  _name;
  _position;
  _intro;
  constructor(name, position, intro) {
    this._name = name;
    this._position = position;
    this._intro = intro;
  }
  get name() {
    return this._name;
  }
  get position() {
    return this._position;
  }
  get intro() {
    return this._intro;
  }
}
export const zhaobill = new author('赵比尔', '玖久创始团队成员', '京东集团管培生。曾在华夏幸福战略发展中心、链家研究院、正心谷创新资本实习。');

export const luoyang = new author('罗杨', '玖久创始团队成员', '就职于网易游戏，宝洁BRM Summer intern offer，曾在RB、ATK、联合利华、Uber、网易等实习。');

export const panyibin = new author('潘毅斌', '管理团队，思维培训部Member', '参与百度品牌营销、IBM战略转型研究、中铁TOD模式设计、HBR中国战略推广等项目；慎思行内容运营专员，欧睿国际研究员；FMA金融管理师；台湾大学大陆同学会副会长，南开大学两岸交流协会会长，厦门市政府专家库顾问。');

export const huanghuikai = new author('黄晖凯', '玖久创始团队成员', '现就职于欧莱雅集团，曾于梅赛德斯-奔驰、阿玛尼美妆及帕特农咨询等公司或品牌实习。');

export const yinyuhua = new author('尹钰华', '人力资源部Leader', 'Enactus创行中国媒体专员、财务专员，AIESEC中国大陆区中南分会国际青年人才引进项目部副主席、分会主席，曾于玖久参与多次实践并于2016年加入玖久。');

export const wangbangwei = new author('汪邦威', '管理团队，企业运营部Member', '毕马威华振会计师事务所精英计划成员，网易影业众创者泛文娱行业研究，麦肯锡公司项目短期PTA；中山大学生涯规划社团部长。');

export const xuezack = new author('薛占奎', '玖久思维训练部成员', 'ijoin公益咨询 intern，Enactus 南大分会leader，Enactus 苏皖大区EU 项目专员，南大创享社（创业类组织） 创始人，玖久-受访者渠道搭建 PTA。');

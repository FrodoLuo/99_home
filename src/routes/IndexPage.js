import React from 'react';
import { Layout } from 'antd';
import { connect } from 'dva';
import style from './IndexPage.css';

import Footer from '../components/jiu-footer/jiu-footer';
import Header from '../components/jiu-header/jiu-header';
import Cover from '../components/cover/cover';
import YoundAndEnterprise from '../components/young-and-enterprise/young-and-enterprise';
import Button from '../components/button/button';

function IndexPage() {
  return (
    <Layout style={{ display: 'flex' }}>
      <Header />
      <Layout.Content className={style['main-container']}>
        <Cover />
        <div className="card-container">
          <YoundAndEnterprise />
        </div>
      </Layout.Content>
      <Footer />
    </Layout>

  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);

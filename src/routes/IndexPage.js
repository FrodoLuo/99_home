import React from 'react';
import { Button, Layout } from 'antd';
import { connect } from 'dva';
import styles from './IndexPage.css';

import Footer from '../components/jiu-footer/jiu-footer';

function IndexPage() {
  return (
    <Layout>
      <Footer />
    </Layout>

  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);

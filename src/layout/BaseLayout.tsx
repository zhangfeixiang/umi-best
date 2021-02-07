import BottomNav from '@/components/BottomNav';
import React, { useEffect } from 'react';
import '@/static/iconfont/iconfont.css';
import styles from './BasicLayout.less';
import { connect, Dispatch } from 'umi';
interface BaseLayoutProps {
  location: Location;
  dispatch: Dispatch;
  user: any
}

const BaseLayout: React.FC<BaseLayoutProps> = (props) => {
  const { children, location, dispatch, user } = props;
  useEffect(() => {
      // 获取用户信息
      if(dispatch) {
        dispatch({
            type: 'user/fetchCurrent'
        })
      }
  }, []);
  return (
    <div className={styles.main}>
      <article>{children}</article>
      <footer>
        <BottomNav pathname={location.pathname}></BottomNav>
      </footer>
    </div>
  );
};

export default connect(({user}) => ({user}))(BaseLayout);

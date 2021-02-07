import { ConnectProps, ConnectState, UserModelState } from '@/models/connect';
import React from 'react';
import { connect, Redirect } from 'umi';
import styles from './index.less';
import { LoginParamsType } from '@/services/login'
import LoginForm from './LoginForm'

interface LoginProps extends ConnectProps {
  user: UserModelState;
}

const Login: React.FC<LoginProps> = ({ user, location, dispatch }) => {
  console.log(user);
  const { userid } = user.currentUser;
  const isLogin = !!userid;
  if (isLogin) {
    const { from = '/' } = location.state || {};
    return <Redirect to={from}></Redirect>;
  }
  function handleSubmit(value : LoginParamsType) {
    console.log(value)
    dispatch({type: 'user/login', payload: value})
  }
  return (
    <div className={styles.main}>
      <div className={styles.logo}></div>
      <LoginForm handleSubmit={handleSubmit}></LoginForm>
    </div>
  );
};

export default connect(({ user }: ConnectState) => ({ user }))(Login);

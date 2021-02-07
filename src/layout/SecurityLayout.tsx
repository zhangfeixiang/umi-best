import { ConnectState } from '@/models/connect';
import React from 'react';
import { connect, ConnectProps, Redirect, UserModelState } from 'umi';

interface SecurityLayoutProps extends ConnectProps {
  user: UserModelState;
}

const SecurityLayout: React.FC<SecurityLayoutProps> = ({
  user,
  location,
  children,
}) => {
  const { userid } = user.currentUser;
  const isLogin = !!userid;
  if (!isLogin) {
    return (
      <Redirect
        to={{ pathname: '/login', state: { from: location.pathname } }}
      ></Redirect>
    );
  }
  return <div>{children}</div>;
};

export default connect(({ user }: ConnectState) => ({ user }))(SecurityLayout);

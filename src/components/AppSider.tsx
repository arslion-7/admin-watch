import {
  BuildOutlined,
  LoginOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Image, Layout, Menu } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

const { Sider } = Layout;

import imgUrl from '@/assets/admin_watch_logo.jpg';
import { PATHS } from '@/routes/paths';

export default function AppSider() {
  const navigate = useNavigate();

  const [selectedKeys, setSelectedKeys] = useState('/');

  useEffect(() => {
    const pathName = location.pathname;
    console.log('pathName', pathName);
    setSelectedKeys(location.pathname);
  }, [location.pathname]);

  const items = [
    {
      label: 'Watches',
      icon: <BuildOutlined />,
      key: 'watches',
    },
    {
      label: 'Settings',
      icon: <SettingOutlined />,
      key: 'settings',
      children: [
        // {
        //   label: 'Ulanyjylar',
        //   key: PATHS.USERS,
        //   icon: <TeamOutlined />,
        // },
        {
          label: 'Sign out',
          key: PATHS.SIGNIN,
          icon: <LoginOutlined />,
        },
      ],
    },
  ];

  return (
    <Sider>
      <div className='logo-container'>
        {/* New wrapper div */}
        <Image className='logo' width={40} src={imgUrl} />
      </div>
      <Menu
        theme='dark'
        onClick={(item) => {
          //item.key
          navigate(item.key);
        }}
        mode='inline'
        // defaultSelectedKeys={[]}
        selectedKeys={[selectedKeys]}
        defaultOpenKeys={['share', 'settings']}
        items={items}
      />
    </Sider>
  );
}

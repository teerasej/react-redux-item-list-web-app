import React from 'react'
import { Layout, Menu } from 'antd';
const { Header } = Layout;

export default function HeaderBar() {
    return (
        <Header>
            <div className="logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                style={{
                    lineHeight: '64px'
                }}>
                <Menu.Item key="1">Home</Menu.Item>
            </Menu>
        </Header>
    )
}
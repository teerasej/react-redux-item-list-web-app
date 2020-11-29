import { List, Typography } from 'antd';
import React from 'react'

export default function ItemList() {

    const data = [
        'Racing car sprays burning fuel into crowd.',
        'Japanese princess to wed commoner.',
        'Australian walks 100km after outback crash.',
        'Man charged over missing wedding girl.',
        'Los Angeles battles huge wildfires.',
    ];

    return (
        <List
            header={<div>Header</div>}
            bordered
            dataSource={data}
            renderItem={item => (
                <List.Item>
                    <Typography.Text mark>[ITEM]</Typography.Text> {item}
                </List.Item>
            )}
        />
    )
}

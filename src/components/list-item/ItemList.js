import { List, Typography } from 'antd';
import React from 'react'
import { useSelector } from 'react-redux'


export default function ItemList() {

    const items = useSelector(state => state.items)

    const data = [
        'Racing car sprays burning fuel into crowd.',
        'Japanese princess to wed commoner.',
        'Australian walks 100km after outback crash.',
        'Man charged over missing wedding girl.',
        'Los Angeles battles huge wildfires.',
    ];

    return (
        <List
            header={<div>Store</div>}
            bordered
            dataSource={items}
            renderItem={item => (
                <List.Item>
                    <div>{item.name}</div>
                    <div>
                        <Typography.Text mark>
                            {item.status}
                        </Typography.Text>
                    </div>
                </List.Item>
            )}
        />
    )
}

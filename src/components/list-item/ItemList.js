import { List, Typography } from 'antd';
import React from 'react'
import { useEffect } from 'react'


export default function ItemList() {

    const items = useSelector(state => state.items)

    useEffect(() => {
        const loadMessage = async () => {
        }
        loadMessage();
    }, [])

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

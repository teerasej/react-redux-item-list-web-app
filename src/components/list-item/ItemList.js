import { List, Typography } from 'antd';
import React from 'react'
import { useEffect } from 'react'
import Axios from 'axios';


export default function ItemList() {

    const items = useSelector(state => state.items)

    useEffect(() => {
        const loadMessage = async () => {
            const notes = await Axios.get('http://localhost:3010/notes')
            console.log('notes loaded:', notes.data);

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

import { List, Typography } from 'antd';
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import Axios from 'axios';
import action from '../../redux/action';


export default function ItemList() {

    const items = useSelector(state => state.items)
    const dispatch = useDispatch()

    useEffect(() => {
        const loadMessage = async () => {
            const notes = await Axios.get('http://localhost:3010/notes')
            console.log('notes loaded:', notes.data);

            dispatch({
                type: action.MESSAGE_LOADED,
                payload: notes.data
            })
        }
        loadMessage();
    }, [])

    return (
        <List
            header={<div>Notes</div>}
            bordered
            dataSource={items}
            renderItem={item => (
                <List.Item>
                    <div>{item.message}</div>
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

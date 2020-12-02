import React from 'react'
import { Form, Input, Button, Select } from 'antd';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux'
import Action from '../../redux/action'
import { useHistory } from "react-router-dom";
import Axios from 'axios';

const { Option } = Select;

export default function NewItemForm() {

    const dispatch = useDispatch()
    const history = useHistory();

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };
    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    };

    const [form] = Form.useForm();

    const onFinish = async (values) => {
        console.log(values);

        await Axios.post('http://localhost:3010/notes', values)

        dispatch({ 
            type: Action.CREATE_NEW_ITEM,
            payload: values
        })
        history.goBack();
    };

    return (
        <div
            style={{
                background: '#fff',
                padding: 24,
                width: 350
            }}>
            <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
                <Form.Item name="message" label="Message" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Create
                    </Button>
                    <Link to="/">
                        <Button htmlType="button">
                            Cancel
                        </Button>
                    </Link>
                </Form.Item>
            </Form>
        </div>
    )
}

import React from 'react'
import { Form, Input, Button, Select } from 'antd';
import { Link } from "react-router-dom";

const { Option } = Select;

export default function NewItemForm() {

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };
    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    };

    const [form] = Form.useForm();

    const onFinish = values => {
        console.log(values);
    };

    return (
        <div
            style={{
                background: '#fff',
                padding: 24,
                width: 350
            }}>
            <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
                <Form.Item name="name" label="Name" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="status" label="Status" rules={[{ required: true }]}>
                    <Select placeholder="Status">
                        <Option value="instock">In Stock</Option>
                        <Option value="preorder">Pre-order</Option>
                    </Select>
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

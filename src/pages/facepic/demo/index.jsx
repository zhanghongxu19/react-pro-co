import React, { useState } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Card, Form, Input, DatePicker, Select, Radio, Button, InputNumber } from 'antd';
import { connect } from 'umi';

import style from './style.less';


const { RangePicker } = DatePicker;
const { Option } = Select;
const { TextArea } = Input;
const FormItem = Form.Item;

const BasicForm = props => {
    const { submitting } = props
    const [form] = Form.useForm();
    const [showPublicUsers, setShowPublicUsers] = useState(false);

    const formItemLayout = {
        labelCol: {
            xs: {
                span: 24,
            },
            sm: {
                span: 7,
            },
        },
        wrapperCol: {
            xs: {
                span: 24,
            },
            sm: {
                span: 12,
            },
            md: {
                span: 10,
            },
        },
    };

    const submitFormLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 10,
            offset: 7,
          },
        },
      };

      const onFinish = values => {
          console.log(111)
        const {dispatch} =  props;
        dispatch({
            type: 'formAndbasicForm/submitRegularForm',
            payload: values,
        })
      }

      const onChangeRadio = e => {
          setShowPublicUsers(e.target.value === '2');
      }

    return (
        <PageHeaderWrapper>
            <Card bordered={false}>
                <Form form={form}
                onFinish={onFinish}
                >
                    <Form.Item {...formItemLayout} label="标题" name="title" rules={[
                        {
                            required: true,
                            message: '请输入标题',
                        }
                    ]}>
                        <Input placeholder="给目标起个名字"/>
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="起止日期" name="date" rules={[
                        {
                            required: true,
                            message: '请选择起止日期',
                        }
                    ]}>
                        <RangePicker/>
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="目标描述" name="goal" rules={[
                        {
                            required: true,
                            message: '请输入目标描述',
                        }
                    ]}>
                        <TextArea placeholder="请输入你的阶段性工作目标"/>
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="衡量标准" name="standard" rules={[
                        {
                            required: true,
                            message: '请输入衡量标准',
                        }
                    ]}>
                        <TextArea placeholder="请输入衡量标准"/>
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="客户" name="client">
                        <Input placeholder="请描述你服务的客户，内部客户直接 @姓名 / 工号"/>
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="邀评人" name="invites">
                        <Input placeholder="请直接 @姓名 / 工号，最多可邀请5人"/>
                    </Form.Item>
                    <Form.Item {...formItemLayout} label={
                        <span>
                            权重
                            <em className={style.optional}>（选填）</em>
                        </span>
                    } name="weight">
                        <InputNumber max="100" min="1" placeholder="请输入"/>
                        <span>%</span>
                    </Form.Item>
                    <FormItem {...formItemLayout} label="目标公开" name="" help="客户、邀评人默认被分享" name="publicType">
                        <Radio.Group onChange={onChangeRadio}>
                            <Radio value="1">公开</Radio>
                            <Radio value="2">部分公开</Radio>
                            <Radio value="3">不公开</Radio>
                        </Radio.Group>
                        <FormItem style={{display: showPublicUsers ? 'block' : 'none'}}>
                            hehe
                        </FormItem>
                    </FormItem>
                    <FormItem {...submitFormLayout}>
                        <Button type="primary" htmlType="submit" loading={submitting}>
                            提交
                        </Button>
                        <Button style={{marginLeft: 8}}>保存</Button>
                    </FormItem>
                </Form>
            </Card>
        </PageHeaderWrapper>
    );
};

export default connect(({ loading }) => ({
    submitting: loading.effects['formAndbasicForm/submitRegularForm'],
  }))(BasicForm);
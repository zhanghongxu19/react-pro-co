import React, { useState, useEffect } from 'react';
import { Form, Card, Row, Col, Input, TimePicker, DatePicker, Select } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import moment from 'moment';

import './style.less';
import MultiLang from '@/components/MultiLang';
import Abtest from '@/components/Abtest';


const { Option } = Select;

const addFacepic = () => {


  function renderForm(){

    let json_scheme = {
      form: {
        button1: {
          value: "2",
          type: "select",
          linkage: ["button2", "button3"]
        },
        button2: {
          value: "0",
          type: "select",
          linkage: ["button3"]
        },
        button3: {
          value: "0",
          type: "select",
          linkage: []
        }
      },
      linkage: {
        button2: {
          1: [
            {
              value: 1,
              title: 'hehe'
            },
            {
              value: 10086,
              title: 'hehe1'
            },
            {
              value: 10085,
              title: 'hehe'
            },
          ],
          2: [
            {
              value: 20085,
              title: 'haha1'
            },
            {
              value: 87457,
              title: 'haha2'
            },
            {
              value: 8754,
              title: 'haha3'
            },
          ]
        },
        button3: {
          10086: [
            {
              value: 1,
              title: 'he2121he'
            },
            {
              value: 10086,
              title: 'he2121he1'
            },
            {
              value: 10085,
              title: '21212'
            },
          ],
          87457: [
            {
              value: 20085,
              title: '3232'
            },
            {
              value: 87457,
              title: 'hah43434a2'
            },
            {
              value: 8754,
              title: '43543'
            },
          ]
        }
      }
    };

    for (let k in json_scheme.form) {
      let form_item = json_scheme.form[k];
      let linkage_len = form_item.linage.length;
      if (linkage_len > 0) {
        form.setFieldsValue({
          k: form_item.value
        });
        if (json_scheme.linkage[form_item.linkage[0]] !== undefined) {
          json_scheme.linkage[form_item.linkage[0]]
        }
      }
    }

    form.setFieldsValue({
      button1: "2"
    });
  }

  useEffect(() => {
    // renderForm();
  });


  const changeButton2 = {
    1: [
      {
        value: 1,
        title: 'hehe'
      },
      {
        value: 10086,
        title: 'hehe1'
      },
      {
        value: 10085,
        title: 'hehe'
      },
    ],
    2: [
      {
        value: 20085,
        title: 'haha1'
      },
      {
        value: 87457,
        title: 'haha2'
      },
      {
        value: 8754,
        title: 'haha3'
      },
    ]
  };

  const changeButton3 = {
    10086: [
      {
        value: 1,
        title: 'he2121he'
      },
      {
        value: 10086,
        title: 'he2121he1'
      },
      {
        value: 10085,
        title: '21212'
      },
    ],
    87457: [
      {
        value: 20085,
        title: '3232'
      },
      {
        value: 87457,
        title: 'hah43434a2'
      },
      {
        value: 8754,
        title: '43543'
      },
    ]
  };

  const multilang = {
    12212: {
      en_name: 'en_name',
    },
    424324: {
      en_name: 'enname121',
    }
  };

  const [form] = Form.useForm();
  const [button2, setButton2] = useState([]);
  const [button3, setButton3] = useState([]);
  const [showSpecialCard, setShowSpecialCard] = useState(false);
  const [showButton1, setShowButton1] = useState(false);

  const [display1, setDisplay1] = useState(false);

  function button1Change() {
    let button1 = form.getFieldValue('button1');
    form.setFieldsValue({button2: undefined});
    // 设置 undefined select 框才会保留 placeholder，如果设置''，placeholder都会清楚掉
    form.setFieldsValue({button3: undefined});
    
    if (button1 === '1') {
      setShowSpecialCard(true);
    } else {
      setShowSpecialCard(false);
    }

    if (changeButton2[button1] !== undefined) {
      setButton2(changeButton2[button1]);
    } else {
      setButton2([]);
    }
    setButton3([]);
  }

  function button2Change() {
    let button2 = form.getFieldValue('button2');
    form.setFieldsValue({button3: undefined});
    
    if (changeButton3[button2] !== undefined) {
      setButton3(changeButton3[button2]);
    } else {
      setButton3([]);
    }
  }

  function buttonShowChange(){
    let button_show = form.getFieldValue('button_show');
    
    setShowButton1(button_show === '1');
  }

  function onSearchFacePicMullang(){
    console.log('onSearchFacePicMullang');
  }

  function changeMullang(value, mul_type){
    console.log('value:', value);
    console.log('mul_type:', mul_type);
  }

  function selectMullang(value){
    console.log('select', value)
  }

  const typeOnChange = value => {
    setDisplay1(value === '2');
  };

  const message = 'This is required fields！';
  
  const twoColLayout = {
    lg: {
      span: 16
    }
  };

  const oneColLayout = {
    lg: {
      span: 8
    }
  }

  return (
    <Form form={form}>
      <PageHeaderWrapper content="这个是 pageHeaderWrapper 的content">
        <Card bordered={false}>
          <Row gutter={16}>
            <Col {...oneColLayout}>
              <Form.Item
                label="popup ID"
                name="id"
                rules={[
                  {
                    required: true,
                    message,
                  },
                ]}
              >
                <Input disabled/>
              </Form.Item>
            </Col>
            <Col {...oneColLayout}>
              <Form.Item
                label="popup type"
                name="type"
              >
                <Select onChange={typeOnChange} defaultValue="1">
                    <Option value="1">(1)Newplayer signin</Option>
                    <Option value="2">(2)Ordinary</Option>
                    <Option value="3">(3)OTO</Option>
                    <Option value="4">(4)First Recharge</Option>
                    <Option value="5">(5)Special pop-up 1</Option>
                    <Option value="6">(6)Special pop-up 2</Option>
                    <Option value="7">(7)Special pop-up 3</Option>
                    <Option value="8">(8)Special pop-up 4</Option>
                    <Option value="9">(9)9 Soldier back popup</Option>
                    <Option value="10">(10)dynamic pop-up 1</Option>
                    <Option value="11">(11)dynamic pop-up 2</Option>
                    <Option value="12">(12)dynamic pop-up 3</Option>
                    <Option value="13">(13)dynamic pop-up 4</Option>
                    <Option value="14">(14)Rabbit</Option>
                    <Option value="15">(15)Character emote</Option>
                    <Option value="21">(21)21</Option>
                  </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col {...oneColLayout}>
                <Form.Item
                  label="start time"
                >
                  <DatePicker placeholder="start time"
                    format="YYYY-MM-DD HH:mm:ss"
                    showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss')}}
                  />
                </Form.Item>
            </Col>
            <Col {...oneColLayout}>
              <Form.Item
                  label="end time"
                >
                  <DatePicker placeholder="end time"
                    format="YYYY-MM-DD HH:mm:ss"
                    showTime={{ defaultValue: moment('23:59:59', 'HH:mm:ss')}}
                  />
                </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col {...oneColLayout}>
              <Form.Item label="buttom jump1" name="button1">
                <Select placeholder="请选择" onChange={button1Change}>
                  <Option value="1">呵呵</Option>
                  <Option value="2">哈哈</Option>
                  <Option value="3">第三个</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col {...oneColLayout}>
              <Form.Item label="buttom jump2" name="button2">
                <Select placeholder="请选择" onChange={button2Change}>
                  {button2.length > 0 && button2.map(item=><Option key={item.value} value={item.value}>{item.title}</Option>)}
                </Select>
              </Form.Item>
            </Col>
            <Col {...oneColLayout}>
              <Form.Item label="buttom jump3" name="button3">
                <Select placeholder="请选择">
                {button3.length > 0 && button3.map(item=><Option key={item.value} value={item.value}>{item.title}</Option>)}
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col {...oneColLayout}>
              <Form.Item
                label="sequence"
                name="sequence"
              >
                <Input/>
              </Form.Item>
            </Col>
            <Col {...oneColLayout}>
                <Form.Item
                  label="popup type"
                  name="type"
                  rules={[
                    {
                      required: true,
                      message
                    }
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col {...oneColLayout}>
                <Form.Item
                  label="enter_sequence"
                  name="enter_sequence"
                  rules={[
                    {
                      required: true,
                      message
                    }
                  ]}
                >
                  <Select defaultValue="0">
                      <Option value="0">0 Not ENTER</Option>
                      <Option value="1">1 ENTER</Option>
                  </Select>
                </Form.Item>
              </Col>
          </Row>
          <Row gutter={16}>
            <Col {...oneColLayout}>
              <Form.Item
                label="POP source"
                name="pop_source"
              >
                <Select defaultValue="1">
                    <Option value="1">local pic(1)</Option>
                    <Option value="2">CDN pic(2)</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col {...oneColLayout}>
                <Form.Item
                  label="bg name or CDN link"
                  name="bg_link"
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col {...oneColLayout}>
                <Form.Item
                  label="jump url"
                  name="jump_url"
                >
                  <Input/>
                </Form.Item>
              </Col>
          </Row>
        </Card>

        <Card title="for Special types of popup(picture + multi-language text)" style={{marginTop: "15px",display: display1 ? 'block' : 'none'}}>
          <Row>
            <Col>
              <Form.Item
                label="title desc ID"
              >
              <Select placeholder="Please Choose Language">
                <Option value="1">xxxxxx</Option>
              </Select>
            </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Item label="button show" name="button_show">
                <Select onChange={buttonShowChange} placeholder="请选择">
                  <Option value="0">no(0)</Option>
                  <Option value="1">yes(1)</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <MultiLang label="多语言1" name="lang1" data={multilang}/>
        </Card>

        <Card title="for regional operation" style={{marginTop: "15px"}}>
          <Row gutter={16}>
            <Col {...oneColLayout}>
              <Form.Item
                label="group ID"
                name="group_id"
              >
              <Input/>
            </Form.Item>
            </Col>
            <Col {...oneColLayout}>
              <Form.Item label="region ID" name="regionIdSelect">
                <Select defaultValue="">
                  <Option value="">Please Choose Region ID</Option>
                  <Option value="123456">123456--测试</Option>
                  <Option value="12356">12356--32</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
        </Card>

        <Abtest/>
      </PageHeaderWrapper>
    </Form>
  );
};

export default addFacepic;

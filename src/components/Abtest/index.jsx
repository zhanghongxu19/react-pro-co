import React, {useState} from 'react';
import {Card,Row,Col,Select,Input,Form,DatePicker,Button} from 'antd';
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import moment from 'moment';
import AbtestSeg from './components/AbtestSeg';

const {Option} = Select;

const Abtest = () => {
    const oneColLayout = {
        lg: {
          span: 8
        }
      }

    const [display2, setDisplay2] = useState(false);
    const [display3, setDisplay3] = useState(false);
    const [data, setData] = useState([
       1,2,3
    ]);
    
    const segmentOnChange = value => setDisplay2(value === '1');

    const abtestOnChange = value => setDisplay3(value === '1');

    const rules = [{ required: true }];

    return (
        <Card title="ABtest/segment related" style={{marginTop: "15px"}}>
          <Row gutter={16}>
            <Col {...oneColLayout}>
              <Form.Item
                label="segment"
                name="be_abtest_segment"
              >
              <Select onChange={segmentOnChange} defaultValue="0">
                <Option value="0">no(0)</Option>
                <Option value="1">yes(1)</Option>
              </Select>
            </Form.Item>
            </Col>
          </Row>
          <Row style={{display: display2 ? 'flex' : 'none'}}>
            <Col>
              <Form.Item label="stat start time">
                <DatePicker format="YYYY-MM-DD HH:mm:ss" showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss')}}/>
              </Form.Item>
            </Col>
          </Row>
          <Form.List name="users">
            {
                (fields, {add, remove}) => {
                    return (
                        <div>
                            {fields.map((field, index) => (
                                // <Row key={field.key}>
                                //     <Col>
                                //         <Form.Item
                                //         name={[field.name, "lastName"]}
                                //         fieldKey={[field.fieldKey, "lastName"]}
                                //         >
                                //         <Input placeholder="last name" />
                                //         </Form.Item>
                                //     </Col>
                                //     <Col>
                                //         <Form.Item
                                //         name={[field.name, "firstName"]}
                                //         fieldKey={[field.fieldKey, "firstName"]}
                                //         >
                                //         <Input placeholder="first name" />
                                //         </Form.Item>
                                //     </Col>
                                //     <Col flex="none">
                                //         <MinusCircleOutlined
                                //         className="dynamic-delete-button"
                                //         onClick={() => {
                                //             remove(field.name);
                                //         }}
                                //         />
                                //     </Col>
                                // </Row>
                                <Card title="abtest_segment_list">
                                    <Row>
                                        <Col>
                                            <Form.Item label="dimension" name={[field.name, "dimension"]}>
                                                <Select defaultValue="0">
                                                    <Option value="0">Please Choose dimension</Option>
                                                    <Option value="1">1 level 玩家等级</Option>
                                                    <Option value="2">2 activeday last week 活跃天数</Option>
                                                    <Option value="3">3 online time last week 在线时长</Option>
                                                    <Option value="4">4 mode play time/game time % 模式时间占比</Option>
                                                    <Option value="5">5 ladder scores  (instantly) 游戏段位分</Option>
                                                    <Option value="6">6 match score (instantly) 游戏匹配分</Option>
                                                </Select>
                                            </Form.Item>
                                        </Col>
                                        <Col>
                                            <Form.Item label="additional1" name={[field.name, "additional1"]}>
                                                <Input />
                                            </Form.Item>
                                        </Col>
                                        <Col>
                                            <Form.Item label="additional2" name={[field.name, "additional2"]}>
                                                <Input />
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Item label="value1" name={[field.name, "value1"]}>
                                                <Input />
                                            </Form.Item>
                                        </Col>
                                        <Col>
                                            <Form.Item label="value2" name={[field.name, "value2"]}>
                                                <Input />
                                            </Form.Item>
                                        </Col>
                                        <Col>
                                            <Form.Item label="value3" name={[field.name, "value3"]}>
                                                <Input />
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Item label="value4" name={[field.name, "value4"]}>
                                                <Input />
                                            </Form.Item>
                                        </Col>
                                        <Col>
                                            <Button onClick={()=> remove(field.name)}>删除</Button>
                                        </Col>
                                    </Row>
                                </Card>
                            ))}
                            <Form.Item>
                                <Button
                                type="dashed"
                                onClick={() => {
                                    add();
                                }}
                                style={{ width: "100%" }}
                                >
                                <PlusOutlined /> Add field
                                </Button>
                            </Form.Item>
                        </div>
                    );
                }
            }
          </Form.List>
          
          <Row gutter={16} style={{marginTop: 20}}>
            <Col {...oneColLayout}>
              <Form.Item
                label="ABtest"
                name="ABtest"
              >
              <Select onChange={abtestOnChange} defaultValue="0">
                <Option value="0">no(0)</Option>
                <Option value="1">yes(1)</Option>
              </Select>
            </Form.Item>
            </Col>
          </Row>
          <Row style={{display: display3 ? 'flex' : 'none'}} gutter={16}>
            <Col {...oneColLayout}>
              <Form.Item label="AB test group">
                <Input/>
              </Form.Item>
            </Col>
            <Col {...oneColLayout}>
              <Form.Item label="ratio in the group">
                <Input/>
              </Form.Item>
            </Col>
            <Col {...oneColLayout}>
              <Form.Item label="abtest rejudge">
                <Input/>
              </Form.Item>
            </Col>
          </Row>
          <Row style={{display: display3 ? 'flex' : 'none'}} gutter={16}>
            <Col {...oneColLayout}>
              <Form.Item label="layer">
                <Input/>
              </Form.Item>
            </Col>
            <Col {...oneColLayout}>
              <Form.Item label="group config num">
                <Input/>
              </Form.Item>
            </Col>
            <Col {...oneColLayout}>
              <Form.Item label="task index">
                <Input/>
              </Form.Item>
            </Col>
          </Row>
        </Card>
    );
};

export default Abtest;
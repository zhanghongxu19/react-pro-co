import React from 'react';
import { Row,Col,Select,Input,Form,Card } from 'antd';

const {Option} = Select;

const addAbtest = () => {
    const newData = data
};

const delAbtest = () => {

};

const AbtestSeg = () => {
    return (
        <Card title="abtest_segment_list" extra={<div><a onClick={addAbtest}>add</a><a onClick={()=>alert(delAbtest)} style={{marginLeft:10}}>del</a></div>}>
            <Row>
                <Col>
                    <Form.Item label="dimension" name="abtest_cond_type">
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
                    <Form.Item label="additional1" name="additional1">
                        <Input />
                    </Form.Item>
                </Col>
                <Col>
                    <Form.Item label="additional1" name="additional1">
                        <Input />
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Item label="value1" name="value1">
                        <Input />
                    </Form.Item>
                </Col>
                <Col>
                    <Form.Item label="value2" name="value2">
                        <Input />
                    </Form.Item>
                </Col>
                <Col>
                    <Form.Item label="value3" name="value3">
                        <Input />
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Item label="value4" name="value4">
                        <Input />
                    </Form.Item>
                </Col>
            </Row>
        </Card>
    );
};

export default AbtestSeg;
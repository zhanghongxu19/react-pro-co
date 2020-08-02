import React from 'react';
import { Form, Card, Row, Col, Input } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

const addFacepic = () => {
  return (
    <Form>
      <PageHeaderWrapper content="这个是 pageHeaderWrapper 的content">
        <Card title="仓库管理">
          <Row gutter={16}>
            <Col lg={6} md={12} style={{ backgroundColor: 'red' }}>
              <Form.Item
                label="仓库名"
                name="name"
                rules={[
                  {
                    required: true,
                    message: '请输入仓库名称',
                  },
                ]}
              >
                <Input placeholder="请输入仓库名称" />
              </Form.Item>
            </Col>
            <Col lg={6} md={12} style={{ backgroundColor: 'gray' }}>
              <Form.Item>
                <Input placeholder="请输入" />
              </Form.Item>
            </Col>
            <Col lg={6} md={12} style={{ backgroundColor: 'green' }}>
              33333
            </Col>
          </Row>
        </Card>
      </PageHeaderWrapper>
    </Form>
  );
};

export default addFacepic;

import React from 'react';
import { Row, Col, Form, Select } from 'antd';

const MultiLang = props => {

    function onSearchFacePicMullang(){

    }

    function changeMullang(){

    }

    function selectMullang(value){
        console.log('selectMullang ', value);
    }

    return (
        <Row>
            <Col lg={6}>
                <Form.Item 
                label={props.label} 
                name={props.name}
                >
                    <Select placeholder="Please Choose Language"
                        showSearch
                        onSearch={onSearchFacePicMullang}
                        onChange={changeMullang(this, 4)}
                        onSelect={selectMullang}
                        // 搜索 option text 的内容，不是搜索 value
                        optionFilterProp="children"
                        // filterOption={(input, option) =>{
                        //     console.log('input', input);
                        //     console.log('option.children', option.children);
                        //     return option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        //   }
                        // }
                    >
                        {
                            Object.keys(props.data).map(id => <Option value={id}>{props.data[id].en_name}({id})</Option>)
                        }
                    </Select>
                </Form.Item>
            </Col>
        </Row>
    );
};


export default MultiLang;
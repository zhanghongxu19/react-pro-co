import React, { useEffect,useState } from 'react';
import { Table, Input,Select } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import request from 'umi-request';

const {Option} = Select;

const getRequest = async (params = {}) => {
    let res = request("https://www.fastmock.site/mock/e23e8a42cf9ffc1a369a2f62475d9b14/api/login", {
        params
    });
    res.then(res => {
        console.log(res.result);
        return res.result;
    })
};

const TableList = () => {

    const [area, setArea] = useState([]);

    const getAreaList = () => {
        request.get('https://www.fastmock.site/mock/e23e8a42cf9ffc1a369a2f62475d9b14/api/login').then((res) => {
            console.log('res');
            console.log(res);
            setArea([
                {
                    value: 1,
                    title: "202"
                },
                {
                    value: 2,
                    title: "4049"
                }
            ]);        
        })
    }

    useEffect(() => {
        getAreaList();
    }, []);

    const columns = [
        {
            title: "ID",
            dataIndex: "id",
            // hideInSearch: true,
        },
        {
            title: "add time",
            dataIndex: "address",
            hideInSearch: true,
        },
        {
            title: "type",
            dataIndex: "birthday",
            hideInSearch: true,
        },
        {
            title: "bottom jump1",
            dataIndex: "id",
            hideInSearch: true,
        },
        {
            title: "bottom jump2",
            dataIndex: "id",
            hideInSearch: true,
        },
        {
            title: "button jump3",
            dataIndex: "id",
            hideInSearch: true,
        },
        {
            title: "enter sequence",
            dataIndex: "id",
            hideInSearch: true,
        },
        {
            title: "start time",
            dataIndex: "id",
            valueType: "dateTime",
            hideInSearch: true,
        },
        {
            title: "area",
            dataIndex: "area",
            hideInTable: true,
            // filters: true,
            renderFormItem: (_, { type, defaultRender, ...rest }, form) => {
                console.log('renderFormItem');
                return <Select style={{ width: 120 }} defaultValue="请选择">;
                {
                    area.map((item) => {
                        return <Option value={item.value}>{item.title}</Option>
                    })
                }
                </Select>;
              },
        }
    ];

    return (
        <PageContainer>
            <ProTable 
            columns={columns}
            request={getRequest()}
            />
        </PageContainer>
    );
};

export default TableList;
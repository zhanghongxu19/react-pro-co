import React from 'react';
import { Button } from 'antd';
import './index.less';

export default function(){
    return (
        <div className="main">
            <Button>default</Button>
            <Button type="primary">primary</Button>
        </div>
    );
}
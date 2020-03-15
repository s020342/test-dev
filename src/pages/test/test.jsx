import React, { Component } from 'react';
import Form from './componentd/Form';
import Item from './componentd/Item';

class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [{
                computed: false,
                val: '初始化内容'
            }]
        }
    }
    addHandle = (val) => {
        this.setState({
            list: [{ computed: false, val }].concat(this.state.list)
        });
    }
    render () {
        return (
            <div className="App">
                <Form add={this.addHandle} />
                <div className={'list'}>
                    {
                        this.state.list.map((item, index) => {
                            return <Item item={item} key={index} ></Item>
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Test;
import React, { Component } from 'react';
import { connect } from 'dva';
import { withRouter } from 'react-router-dom';

const TIMER = 800;
let timeoutId = null;

class Live extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            show: false
        }
    }

    componentWillMount () {
        const { loading } = this.props;
       
        if (loading) {
            console.log('加载完成')
        } else {
            console.log('加载失败')
        }
        this.props.fetch(6666)
    }

    render () {
        console.log(this.props)
   
        return (
            <div>
               
                666
                
                
            </div>
        );
    }
}


function mapStateToProps (state) {
    return {
        count: state.count,
        loading: state.loading.global && !state.loading.models.live
    };
}


function mapDispatchToProps (dispatch) {
    return {
        fetch (count) {
            console.log(count)
            dispatch({ type: "live/fetch", payload: count });
        }
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Live));

import React from 'react';

import './index.less';

class MyAssets extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            isCertifi:"block"
        }
    }

    componentDidMount() {
        if (localStorage.getItem('isCertifi')) {
            this.setState({
                isCertifi: 'none'
            })
        }
    }

    render() {
        const {isCertifi} = this.state;
        return(
            <div id="person_contract">
                <div className="top_info" style={{display: isCertifi}}>
                    您尚未进行认证，只能使用象链测试服务 <a href="#/info">立刻认证>></a>
                </div>
            </div>
        )
    }
}


export default MyAssets

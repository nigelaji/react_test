import React, { Component , Fragment} from 'react';

class ShowFooter extends Component{
    
    render(){
        return(
            <Fragment>
                {/* <hr color="#a4a1a1"></hr> */}
                <p style={{margin:0 ,fontSize: 12}}>
            Powered by Loneliness、Failure、Inferiority、Misery、 Anger | Theme inspired by GitHub | <a href="http://beian.miit.gov.cn/publish/query/indexFirst.action">粤ICP备19076691号</a>
                </p>
            </Fragment>
        )
    }
}


export default ShowFooter ;
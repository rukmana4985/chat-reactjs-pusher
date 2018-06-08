import React, {Component} from 'react'
import Chatkit from '@pusher/chatkit'
 
export default class ChatScreen extends Component{

    componentDidMount(){
        const chatManager = new Chatkit.chatManager({
            instanceLocator : 'v1:us1:f78c2c86-aedd-4031-83fe-6f61caca6947',
            userId : this.props.currentUsername,
            tokenProvider : new Chatkit.TokenProvider({
                url : 'http://localhost:3001/authenticate'
            })
        })
    }
    render(){
        return(
            <div>
                <h1>Chat</h1>
            </div>
        )
    }
}
// import { Component } from "react";

// class Message extends Component {
//     render() {
//         return <h1> This is a Class Component </h1>;
//     }
// }

// export default Message;

import { Component } from "react";

class Message extends Component {
    render() {
        return <h1> Message : {this.props.messagecode}</h1>;
    }
}

export default Message;
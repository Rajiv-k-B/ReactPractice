// const name = "Rajiv"

const displayMessage = () => {
    return "I need Help!"
};

function Hello() {
    return <h1>The Measage is : {displayMessage()}</h1>;
}
// function Hello(){
//     return <h1> Hello World!</h1>
// }

// const Hello = () => <h1>Hello There</h1>  //JSX-allow to write code like xml , also allow to use all power of javascript

// Both the above syntax will work for creating a component in react

export default Hello;
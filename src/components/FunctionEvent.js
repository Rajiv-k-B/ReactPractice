// function FunctionEvent()
// {
//     function handleClick(){
//         console.log("Button is Clicked");
//     }
//     return(
//         <div>
//             <button onClick={handleClick}>Click Here</button>
//         </div>
//     );
// }

// export default FunctionEvent;


function FunctionEvent() {
    const handleClick = () => {
        console.log("Button is Clicked");
    };
    return (
        <div>
            <button onClick={handleClick}>Click Here</button>
        </div>
    );
}

export default FunctionEvent;
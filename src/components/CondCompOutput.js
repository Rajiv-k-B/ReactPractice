import { useState } from "react";

export default function CondCompOutput() {
    const [display, setdisplay] = useState(true);
    let output;
    if (display) {
        output = <h3>This is a conditional Component</h3>;
    }
    else {
        output = <h3>Nothing to see here</h3>
    }
    return <div>{output}</div>
}
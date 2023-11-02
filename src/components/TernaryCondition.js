import { useState } from "react";

export default function TernaryCondition() {
    const [display, setDisplay]=useState(true);

    return display ? (
        <div>
            <h3>This is a Conditional Component</h3>
        </div>
    ): (
        <div>
            <h3>Nothing to see here</h3>
        </div>
    );
}
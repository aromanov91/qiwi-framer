import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"

export function MyComponent(props) {
    return <div>{props.title}</div>
}

MyComponent.defaultProps = {
    title: "Hello World!",
    // toggle: true,
}

addPropertyControls(MyComponent, {
    title: {
        type: ControlType.FusedNumber,
        defaultValue: 0,
        toggleKey: "isPerSide",
        valueKeys: ["top", "left", "right", "bottom"],
        valueLabels: ["T", "L", "R", "B"],
        min: 0,
    },
})

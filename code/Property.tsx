import * as React from "react"
import { addPropertyControls, ControlType } from "framer"

// Set default properties
Properties.defaultProps = {
    text: "Framer X",
    color: "#05F",
    boolean: true,
    numberA: 0,
    numberB: 0,
    image: "",
    file: "",
    enum: "A",
    segment: "A",
    fused: 0,
    fusedPerSide: false,
    fusedTop: 0,
    fusedRight: 0,
    fusedBottom: 0,
    fusedLeft: 0,
    width: 500,
    height: 500,
    showHide: false,
}

// Items shown in property panel
addPropertyControls(Properties, {
    text: {
        type: ControlType.String,
        title: "Text",
        placeholder: "Framer X",
    },
    color: {
        type: ControlType.Color,
        title: "Color",
    },
    image: { type: ControlType.Image, title: "Image" },
    numberA: {
        type: ControlType.Number,
        title: "Number A",
        min: 0,
        max: 100,
        step: 1,
    },
    numberB: {
        type: ControlType.Number,
        title: "Number B",
        min: 0,
        max: 100,
        step: 1,
        displayStepper: true,
    },
    fused: {
        type: ControlType.FusedNumber,
        toggleKey: "fusedPerSide",
        toggleTitles: ["All Sides", "Per Side"],
        valueKeys: ["fusedTop", "fusedRight", "fusedBottom", "fusedLeft"],
        valueLabels: ["T", "R", "B", "L"],
        min: 0,
        title: "Fused",
    },
    boolean: {
        type: ControlType.Boolean,
        title: "Boolean",
        enabledTitle: "True",
        disabledTitle: "False",
    },
    segment: {
        type: ControlType.SegmentedEnum,
        options: ["fusedTop", "fusedRight", "fusedBottom", "fusedLeft"],
        optionTitles: ["A", "B", "C"],
        title: "Segment",
    },
    enum: {
        type: ControlType.Enum,
        options: ["A", "B", "C"],
        optionTitles: ["fusedTop", "fusedRight", "fusedBottom", "fusedLeft"],
        title: "Enum",
    },
    file: {
        type: ControlType.File,
        allowedFileTypes: ["png", "jpg"],
        title: "File",
    },
    showHide: {
        type: ControlType.Boolean,
        title: "Hidden",
        enabledTitle: "Show",
        disabledTitle: "Hide",
    },
    hiddenProperty: {
        type: ControlType.String,
        title: "Text",
        placeholder: "Found me!",
        hidden(props) {
            return props.showHide === false
        },
    },
})

// Property component
export function Properties(props) {
    // Default styles
    const style: React.CSSProperties = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        color: "#FFF",
        background: props.color,
        backgroundImage: `url("${props.image}")`,
        backgroundSize: "cover",
        overflow: "hidden",
        fontSize: 15,
        lineHeight: 1.5,
    }

    // Visualize property values
    return (
        <div style={style}>
            <div>
                <div>
                    <span style={{ fontWeight: 700 }}>Text:</span> {props.text}
                </div>
                <div>
                    <span style={{ fontWeight: 700 }}>Color:</span>{" "}
                    {props.color}
                </div>
                <div>
                    <span style={{ fontWeight: 700 }}>Boolean: </span>
                    {JSON.stringify(props.boolean)}
                </div>
                <div>
                    <span style={{ fontWeight: 700 }}>Image:</span>{" "}
                    {props.image ? new URL(props.image).pathname : "No Image"}
                </div>
                <div>
                    <span style={{ fontWeight: 700 }}>File:</span>{" "}
                    {props.file ? new URL(props.file).pathname : "No File"}
                </div>
                <div>
                    <span style={{ fontWeight: 700 }}>Number A:</span>{" "}
                    {props.numberA}
                </div>
                <div>
                    <span style={{ fontWeight: 700 }}>Number B:</span>{" "}
                    {props.numberB}
                </div>
                <div>
                    <span style={{ fontWeight: 700 }}>Enum:</span> {props.enum}
                </div>
                <div>
                    <span style={{ fontWeight: 700 }}>Segment:</span>{" "}
                    {props.segment}
                </div>
                <div>
                    <span style={{ fontWeight: 700 }}>Fused:</span>{" "}
                    {props.fusedPerSide
                        ? props.fusedTop +
                          " " +
                          props.fusedRight +
                          " " +
                          props.fusedBottom +
                          " " +
                          props.fusedLeft
                        : props.fused}
                </div>
            </div>
        </div>
    )
}

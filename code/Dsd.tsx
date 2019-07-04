import * as React from "react"
import {
    Frame,
    addPropertyControls,
    ControlType,
    useTapGesture,
    useCycle,
    PropertyControls,
} from "framer"
import DesignSystem from "./DesignSystem"

// const buttonBackground = {
//     brand: "#ff8c00",
//     simple: "#fff",
// }

// const buttonHoverBackground = {
//     brand: "#ff8200",
//     simple: "#F5F5F5 padding-box",
// }

// const buttonActiveBackground = {
//     brand: "#FF7600",
//     simple: "#e6e6e6 padding-box",
// }

// const buttonFocusBackground = {
//     brand: "#FF9000",
//     simple: "#ccc padding-box",
// }

// // Del
// const accentButtonBackground = {
//     brand: "linear-gradient(to bottom, #ff9810, #ff8300)",
//     simple: "#fff padding-box",
// }

// const buttonBorder = {
//     brand: "none",
//     simple: "1px solid rgba(0, 0, 0, 0.14)",
// }

// const buttonHoverBorder = {
//     brand: "none",
//     simple: "1px solid rgba(0, 0, 0, 0.22)",
// }

// const buttonFocusBorder = {
//     brand: "1px solid rgba(197, 108, 0, 1.0)",
//     simple: "1px solid rgba(0, 0, 0, 0.30)",
// }

// const buttonRadius = {
//     accent: 30 * DesignSystem.spacing,
//     normal: 24 * DesignSystem.spacing,
//     minor: 20 * DesignSystem.spacing,
// }

// const buttonSize = {
//     accent: 15 * DesignSystem.spacing,
//     normal: 12 * DesignSystem.spacing,
//     minor: 10 * DesignSystem.spacing,
// }

// const buttonMinWith = {
//     accent: 50 * DesignSystem.spacing,
//     normal: 37.5 * DesignSystem.spacing,
//     minor: 25 * DesignSystem.spacing,
// }

// const contextPaddingX = {
//     accent: 9 * DesignSystem.spacing,
//     normal: 8 * DesignSystem.spacing,
//     minor: 7 * DesignSystem.spacing,
// }

// const textColor = {
//     brand: "#fff",
//     simple: "#000",
// }

// const textSize = {
//     accent: 5,
//     normal: 4,
//     minor: 3.5,
// }

// const shadow = {
//     brand: "0 15px 50px -10px rgb(255, 206, 135)",
//     simple: "0 15px 50px -10px rgba(0, 0, 0, 0.15)",
// }

// const hoverShadow = {
//     brand: "0 25px 50px -10px rgb(255, 206, 135)",
//     simple: "0 25px 50px -10px rgba(0, 0, 0, 0.15)",
// }

interface Props {
    buttonType: string
    text: string
    bgColor: string
    textColor: string
    border: string
    height: number
    radius: number
    size: string
}

export class Dsd extends React.Component<Props> {
    static defaultProps = {
        buttonType: "simple",
        text: "Hello World!",
        bgColor: "#fff",
        textColor: "#000",
        border: "1px solid #e6e6e6",
        height: 48,
        radius: 8,
    }

    static propertyControls: PropertyControls = {
        text: { type: ControlType.String, title: "Text" },

        buttonType: {
            type: ControlType.SegmentedEnum,
            title: "Text color",
            defaultValue: "simple",
            options: ["simple", "brand"],
            optionTitles: ["Simple", "Brand"],
        },

        size: {
            type: ControlType.Enum,
            title: "Size",
            defaultValue: "normal",
            options: ["accent", "normal", "minor"],
            optionTitles: ["Accent", "Normal", "Minor"],
        },
    }

    render() {
        if (this.props.buttonType == "simple") {
            return 34
        } else if (this.props.buttonType == "brand") {
            return 34
        }
    }
}

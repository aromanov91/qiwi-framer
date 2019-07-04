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

const buttonBackground = {
    brand: "#ff8c00",
    simple: "#fff",
}

const buttonHoverBackground = {
    brand: "#ff8200",
    simple: "#F5F5F5 padding-box",
}

const buttonActiveBackground = {
    brand: "#FF7600",
    simple: "#e6e6e6 padding-box",
}

const buttonFocusBackground = {
    brand: "#FF9000",
    simple: "#ccc padding-box",
}

// Del
const accentButtonBackground = {
    brand: "linear-gradient(to bottom, #ff9810, #ff8300)",
    simple: "#fff padding-box",
}

const buttonBorder = {
    brand: "none",
    simple: "1px solid rgba(0, 0, 0, 0.14)",
}

const buttonHoverBorder = {
    brand: "none",
    simple: "1px solid rgba(0, 0, 0, 0.22)",
}

const buttonFocusBorder = {
    brand: "1px solid rgba(197, 108, 0, 1.0)",
    simple: "1px solid rgba(0, 0, 0, 0.30)",
}

const buttonRadius = {
    accent: 30,
    normal: 24,
    minor: 20,
}

const buttonSize = {
    accent: 15 * DesignSystem.spacing,
    normal: 12 * DesignSystem.spacing,
    minor: 10 * DesignSystem.spacing,
}

const buttonMinWith = {
    accent: 50 * DesignSystem.spacing,
    normal: 37.5 * DesignSystem.spacing,
    minor: 25 * DesignSystem.spacing,
}

const contextPaddingX = {
    accent: 9 * DesignSystem.spacing,
    normal: 8 * DesignSystem.spacing,
    minor: 7 * DesignSystem.spacing,
}

const textColor = {
    brand: "#fff",
    simple: "#000",
}

const textSize = {
    accent: 5,
    normal: 4,
    minor: 3.5,
}

const shadow = {
    brand: "0 15px 50px -10px rgb(255, 206, 135)",
    simple: "0 15px 50px -10px rgba(0, 0, 0, 0.15)",
}

const hoverShadow = {
    brand: "0 25px 50px -10px rgb(255, 206, 135)",
    simple: "0 25px 50px -10px rgba(0, 0, 0, 0.15)",
}

interface Props {
    kind: string
    text: string
    bgColor: string
    textColor: string
    border: string
    height: number
    radius: number
    size: string
    disabled: boolean
}

export class Button extends React.Component<Props> {
    static defaultProps = {
        buttonType: "simple",
        text: "Button",
        bgColor: "#fff",
        textColor: "#000",
        border: "1px solid #e6e6e6",
        height: 48,
        radius: 8,
    }

    static propertyControls: PropertyControls = {
        text: { type: ControlType.String, title: "Text" },

        kind: {
            type: ControlType.SegmentedEnum,
            title: "Kind",
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
        disabled: {
            type: ControlType.Boolean,
            title: "Disabled",
            defaultValue: false,
            enabledTitle: "True",
            disabledTitle: "False",
        },
    }

    render() {
        return (
            <Frame
                background={
                    this.props.disabled == true
                        ? "#e6e6e6"
                        : this.props.kind == "simple"
                        ? buttonBackground.simple
                        : buttonBackground.brand
                }
                border={
                    this.props.disabled == true
                        ? "none"
                        : this.props.kind == "simple"
                        ? buttonBorder.simple
                        : buttonBorder.brand
                }
                color={
                    this.props.kind == "simple"
                        ? textColor.simple
                        : textColor.brand
                }
                radius={
                    this.props.size == "accent"
                        ? buttonRadius.accent
                        : this.props.size == "normal"
                        ? buttonRadius.normal
                        : buttonRadius.minor
                }
                height={
                    this.props.size == "accent"
                        ? buttonSize.accent
                        : this.props.size == "normal"
                        ? buttonSize.normal
                        : buttonSize.minor
                }
                size={
                    this.props.size == "accent"
                        ? buttonMinWith.accent
                        : this.props.size == "normal"
                        ? buttonMinWith.normal
                        : buttonMinWith.minor
                }
            >
                {this.props.text}
            </Frame>
        )
    }
    //     } else if (this.props.buttonType == "brand") {
    //         return (
    //             <Frame
    //                 //size={DesignSystem.}
    //                 background={DesignSystem.colors.BrandColor}
    //                 radius={this.props.height / 2}
    //                 border={"none"}
    //                 height={this.props.height}
    //                 color={DesignSystem.colors.White}
    //             >
    //                 {this.props.text}
    //             </Frame>
    //         )
    //     }
    // }
}

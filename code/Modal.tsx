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

interface Props {
    kind: string

}

export class Button extends React.Component<Props> {
    static defaultProps = {
        buttonType: "simple",
    }

    static propertyControls: PropertyControls = {
        text: { type: ControlType.String, title: "Text" },


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

}

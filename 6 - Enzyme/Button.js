const React = require("react");

class Button extends React.Component {
    render() {
        return React.createElement("input", { type: "button", value: this.props.text || "" });
    }
}


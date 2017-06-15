const React = require("react");

class Button extends React.Component {
    render() {
        return <input type="button" value={this.props.text || ""} />;
    }
}


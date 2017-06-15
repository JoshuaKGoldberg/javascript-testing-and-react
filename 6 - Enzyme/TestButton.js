require("./setup");

describe("Button", function () {
    it("displays the given text", function () {
        // Arrange
        var text = "foo";
        var component = React.createElement(Button, { text: text });

        // Act
        var button = mount(component);

        // Assert
        expect(button.text()).to.be.equal(text);
    });
});


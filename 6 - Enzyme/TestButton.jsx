require("./setup");

describe("Button", function () {
    it("displays the given text", function () {
        // Arrange
        var text = "foo";
        var component = <Button text={text} />;

        // Act
        var button = mount(component);

        // Assert
        expect(button.text()).to.be.equal(text);
    });
});

# Enzyme

Hey remember that React thing from an hour ago?
Let's test it!

## Introducing Enzyme

Enzyme is a test library for your React views.
It lets you create React components in a test environment.

React's "given some input, you get some output" mentality works really nice for tests.
We can give components some basic inputs and _expect_ (ha) some basic output.

There's a bit of setup, but here's how the tests look...

```javascript
    describe("Button", () => {
        it("displays the given text", () => {
            // Act
            const text = "foo";
            const component = <Button text={text} />;

            // Act
            const button = mount(component);

            // Assert
            expect(button.text()).to.be.equal(text);
        });
    });
```

I've heard that one of many prerequesities of "good" code is that you can understand its usage without knowing how it works on the inside.

Regardless of _how_ Enzyme works and is set up (*"wtf is `mount`?*), it's apparent that this is creating a `Button` and checking whether its text is the expected `text`.

You can read more of Enzyme's [API on their docs](http://airbnb.io/enzyme/docs/api/index.html).
It's got a whole bunch of random functions for finding rendered components that you can use in your tests.

To compile the `.jsx` files:

* Mac/Linux: `./node_modules/bin./babel "6 - Enzyme/Button.jsx" --presets react > "6 - Enzyme/Button.js"`
* Windows: `.\node_modules\.bin\babel "6 - Enzyme\Button.jsx" --presets react > "6 - Enzyme\Button.js"`


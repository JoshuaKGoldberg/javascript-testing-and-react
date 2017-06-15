# javascript-testing-and-react

A dive into JavaScript and React testing with Mocha using Chai, Sinon, and Enzyme.

This is the source code for a talk given by [Josh Goldberg](http://joshuakgoldberg.com), Software Development Engineer at Microsoft in Office Sway, for Ada Developer Academy on 6/15/2017. That's me!

I'll cover some preliminary testing practices and protips for JavaScript, then show how they can be used with React:

1. Basic Terms
2. Mocha
3. Chai
4. Avoiding Singletons
5. Sinon
6. Enzyme

All the source code is here / in a [GitHub repo](https://github.com/JoshuaKGoldberg/javascript-testing-and-react).

## Preliminary Setup

First install the prerequisite libraries.

```shell
npm install -g mocha
npm install chai sinon chai enzyme jsdom babel-cli
```

### Code samples

Markdown code samples are approximate subsets of .js files in the same section. You'll want to play along by running the test files using `mocha path/to/test.js`.

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

First make sure you have [NodeJS >=7](https://nodejs.org/en/download/current/) installed by running `node --version`.

Git clone this repo to your compuer.
If you're on Mac or Linux, you may need to prepend `sudo` to each of these commands.

```shell
cd wherever/you/keep/your/code
git clone https://github.com/JoshuaKGoldberg/javascript-testing-and-react
cd javascript-testing-and-react
```

Install the prerequisite libraries:

```shell
npm install -g mocha
npm install
```

### Code samples

Markdown code samples are approximate subsets of .js files in the same section. You'll want to play along by running the test files using `mocha path/to/test.js`.

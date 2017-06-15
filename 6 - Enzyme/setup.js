const jsdom = require("jsdom").jsdom;

global.document = jsdom("");
global.window = document.defaultView;

for (const property of Object.keys(document.defaultView)) {
    if (typeof global[property] === "undefined") {
        global[property] = document.defaultView[property];
    }
}

global.navigator = {
    userAgent: "node.js",
};

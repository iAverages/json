# @iaverage/json

Simple module containing some useful functions for getting and setting values in objects based using a string or array as the key

## Usage

### getPath

```js
// commonjs
//const json = require("@iaverage/json")
// module
import json from "@iaverage/json";

const obj = {
    hello: {
        world: {
            another: {
                object: "javascript",
            },
        },
    },
};

// Using a string with . as a separator
const key = "hello.world.another.object";
console.log(json.getPath(obj, key)); // javascript

// Using a string with a custom separator
const key = "hello/world/another/object";
console.log(json.getPath(obj, key, "/")); // javascript

// Using a an array
const key = ["hello", "world", "another", "object"];
console.log(json.getPath(obj, key)); // javascript
```

### setPath

```js
// commonjs
//const json = require("@iaverage/json")
// module
import json from "@iaverage/json";

const obj = {
    hello: {
        world: {
            another: {
                object: "javascript",
            },
        },
    },
};

// Using a string with . as a separator
const key = "just.another.key.value";
json.setPath(obj, key, "javascript");

// Using a string with a custom separator
const key = "just/another/key/value";
json.setPath(obj, key, "javascript", "/");

// Using a an array
const key = ["just", "another", "key", "value"];
json.setPath(obj, key, "javascript");

console.log(obj);
// {
//     hello: {
//         world: {
//             another:{
//                 object: "javascript"
//             }
//         }
//     },
//     just: {
//         another: {
//             key: {
//                 value: "javascript"
//             }
//         }
//     }
// }
```

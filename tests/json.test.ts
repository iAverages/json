import json from "../src/";

const obj = {
    hello: {
        world: {
            another: {
                object: "javascript",
            },
        },
    },
};

const pathStr = "hello.world.another.object";
const pathArr = ["hello", "world", "another", "object"];
const pathCustom = "hello/world/another/object";
const setValue = "gamer";

describe("JSON get path", () => {
    it("using string path", () => {
        expect(json.getPath(obj, pathStr)).toBe(obj.hello.world.another.object);
    });

    it("using array path", () => {
        expect(json.getPath(obj, pathArr)).toBe(obj.hello.world.another.object);
    });

    it("using string path with custom splitter", () => {
        expect(json.getPath(obj, pathCustom, "/")).toBe(obj.hello.world.another.object);
    });
});

describe("JSON set path", () => {
    it("using string path", () => {
        json.setPath(obj, pathStr, setValue);
        expect(obj.hello.world.another.object).toBe(setValue);
    });

    it("using array path", () => {
        json.setPath(obj, pathArr, setValue);
        expect(obj.hello.world.another.object).toBe(setValue);
    });

    it("using string path with custom splitter", () => {
        json.setPath(obj, pathCustom, setValue, "/");
        expect(obj.hello.world.another.object).toBe(setValue);
    });
});

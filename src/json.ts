type JsonValue = string | number | object | boolean | null | Array<JsonValue>;

export const setPath = (
    object: Record<string, any>,
    path: string | Array<string>,
    value: JsonValue,
    split = "."
): Record<string, JsonValue> => {
    if (typeof path === "string") path = path.split(split);
    const key = path[0];
    if (path.length === 1) {
        object[key] = value;
    } else {
        let newObj = {};
        if (key in object) newObj = object[key];
        path.shift();
        object[key] = setPath(newObj, path, value);
    }
    return object;
};

export const getPath = (object: Record<string, any>, path: string | Array<string>, split = "."): JsonValue => {
    if (path === "" || path.length === 0 || path[0] === "") return object;
    if (typeof path === "string") path = path.split(split);
    const val = object[path[0]];
    if (typeof val === "object" && path.length !== 1) {
        path.shift();
        return getPath(val, path);
    }
    return val;
};

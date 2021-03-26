export const deepCopie = val => JSON.parse(JSON.stringify(val));

export const objectSimplify = (object, attr) => {
    const keys = Object.keys(object);
    const v = {};
    for (const k of keys) {
        v[k] = object[k][attr];
    }
    return v;
};
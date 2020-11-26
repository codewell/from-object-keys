const fromObjectKeys = (...keys) => (object) => keys.map(key => object[key]);

export default fromObjectKeys;

/**
 * @param {string} hex
 * @param {boolean} isString
 * @return {string | { r: number, g: number, b: number }}
 */
export default (hex, isString) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? isString
            ? `${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(
                  result[3],
                  16
              )}`
            : {
                  r: parseInt(result[1], 16),
                  g: parseInt(result[2], 16),
                  b: parseInt(result[3], 16),
              }
        : null;
};

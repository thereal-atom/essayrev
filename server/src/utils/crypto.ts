export const genRanId = (prefix: string, size = 16) => {
    const id = [ ...Array(size) ].map(() => Math.floor(Math.random() * 36).toString(36)).join("");
    return `${prefix}_${id}`;
};
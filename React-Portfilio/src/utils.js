export const getImageUrl = (path) => {
    return new URL (`assets/${path}`).href;
};
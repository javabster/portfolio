export const isMobileDevice = () => {
    return parseInt(document.body.clientWidth) <= 1024;
};
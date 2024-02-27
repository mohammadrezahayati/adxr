/**
 * Returns the direction of the current HTML document.
 * @returns {string | null} - The direction of the HTML document, either "ltr" or "rtl", or null if the window object is undefined.
 */
export const useDirection = () => {
    if (typeof window !== 'undefined') {
        return document.getElementsByTagName("html")[0].getAttribute("dir");
    };
};

export const setDirection = (dir: "rtl" | "ltr") => {
    localStorage.setItem("direction", dir);
    const direction = localStorage.getItem("direction");
    if (typeof window !== 'undefined') {
        window.dispatchEvent(new Event('storage'))
        return document.getElementsByTagName("html")[0].setAttribute("dir", direction ?? "rtl");
    };
};
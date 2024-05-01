/**
 * The function `dir` returns the direction attribute of the HTML element if the document object is
 * available.
 * @returns The `dir` function is returning the value of the `dir` attribute of the `<html>` element in
 * the document, if the `document` object exists and is not undefined.
 */
export const dir = () => {
    if (document && typeof document !== "undefined") {
        return document.getElementsByTagName('html')[0].getAttribute('dir')
    }
};

/**
 * The function `setDir` sets the direction of the HTML document based on the provided direction value
 * ("ltr" for left-to-right or "rtl" for right-to-left).
 * @param {"ltr" | "rtl"} dir - The `dir` parameter in the `setDir` function is a string literal type
 * that can only have one of two values: "ltr" for left-to-right direction or "rtl" for right-to-left
 * direction.
 */
export const setDir = (dir: "ltr" | "rtl") => {
    if (document && typeof document !== "undefined") {
        document.getElementsByTagName('html')[0].setAttribute("dir", dir)
    }
};
/**
 * The function generates a random hexadecimal color code.
 * @returns The function `generateRandomColor` returns a randomly generated hexadecimal color code in
 * the format `#RRGGBB`, where RR, GG, and BB are two-digit hexadecimal values representing the red,
 * green, and blue components of the color respectively.
 */
export default function generateRandomColor() {
    let maxVal = 0xffffff; // 16777215
    let randomNumber: string | number = Math.random() * maxVal;
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);
    return `#${randColor.toUpperCase()}`;
}
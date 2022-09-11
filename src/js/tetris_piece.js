import {COLORS} from "./colors.js";

export class TetrisPiece{ // I J L O S Z T
    constructor(shape){
        switch(shape){
            case "I":
                this.fill_color = COLORS.blue_dark;
                this.outline_color = COLORS.blue_light;
                this.orientation = {
                    original: [4, 14, 24, 34], // default position
                    right: [4, 5, 6, 7], // flipped to the right
                    inverse: [4, 14, 24, 34], // flipped upside down
                    left: [1, 2, 3, 4] // flipped to the left
                };
                break;
            case "J":
                this.fill_color = COLORS.yellow_dark;
                this.outline_color = COLORS.yellow_light;
                this.orientation = {
                    original: [5, 15, 25, 24], // default position
                    right: [3, 13, 14, 15], // flipped to the right
                    inverse: [5, 4, 14, 24], // flipped upside down
                    left: [3, 4, 5, 15] // flipped to the left
                };
                break;
            case "L":
                this.fill_color = COLORS.green_dark;
                this.outline_color = COLORS.green_light;
                this.orientation = {
                    original: [4, 14, 24, 25], // default position
                    right: [4, 5, 6, 14], // flipped to the right
                    inverse: [4, 5, 15, 25], // flipped upside down
                    left: [13, 14, 15, 5] // flipped to the left
                };
                break;
            case "O":
                this.fill_color = COLORS.pink_dark;
                this.outline_color = COLORS.pink_light;
                this.orientation = {
                    original: [4, 5, 14, 15], // default position
                    right: [4, 5, 14, 15], // flipped to the right
                    inverse: [4, 5, 14, 15], // flipped upside down
                    left: [4, 5, 14, 15] // flipped to the left
                };
                break;
            case "S":
                this.fill_color = COLORS.orange_dark;
                this.outline_color = COLORS.orange_light;
                this.orientation = {
                    original: [4, 5, 13, 14], // default position
                    right: [4, 14, 15, 25], // flipped to the right
                    inverse: [4, 5, 13, 14], // flipped upside down
                    left: [4, 14, 15, 25] // flipped to the left
                };
                break;
            case "Z":
                this.fill_color = COLORS.red_dark;
                this.outline_color = COLORS.red_light;
                this.orientation = {
                    original: [3, 4, 14, 15], // default position
                    right: [5, 15, 14, 24], // flipped to the right
                    inverse: [3, 4, 14, 15], // flipped upside down
                    left: [5, 15, 14, 24] // flipped to the left
                };
                break;
            case "T":
                this.fill_color = COLORS.purple_dark;
                this.outline_color = COLORS.purple_light;
                this.orientation = {
                    original: [3, 4, 5, 14], // default position
                    right: [5, 15, 25, 14], // flipped to the right
                    inverse: [4, 13, 14, 15], // flipped upside down
                    left: [4, 14, 24, 15] // flipped to the left
                };
                break;
            default:
                console.log(`WARNING: Shape was not provided!`);
        }
    }
}
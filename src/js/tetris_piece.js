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
                this.orientation.original = [5, 15, 25, 24];
                this.orientation.right = [3, 13, 14, 15];
                this.orientation.inverse = [5, 4, 14, 24];
                this.orientation.left = [3, 4, 5, 15];
                break;
            case "L":
                this.fill_color = COLORS.green_dark;
                this.outline_color = COLORS.green_light;
                this.orientation.original = [4, 14, 24, 25];
                this.orientation.right = [4, 5, 6, 14];
                this.orientation.inverse = [4, 5, 15, 25];
                this.orientation.left = [13, 14, 15, 5];
                break;
            case "O":
                this.fill_color = COLORS.pink_dark;
                this.outline_color = COLORS.pink_light;
                this.orientation.original = [4, 5, 14, 15];
                this.orientation.right = [4, 5, 14, 15];
                this.orientation.inverse = [4, 5, 14, 15];
                this.orientation.left = [4, 5, 14, 15];
                break;
            case "S":
                this.fill_color = COLORS.orange_dark;
                this.outline_color = COLORS.orange_light;
                this.orientation.original = [4, 5, 13, 14];
                this.orientation.right = [4, 14, 15, 25];
                this.orientation.inverse = [4, 5, 13, 14];
                this.orientation.left = [4, 14, 15, 25];
                break;
            case "Z":
                this.fill_color = COLORS.red_dark;
                this.outline_color = COLORS.red_light;
                this.orientation.original = [3, 4, 14, 15];
                this.orientation.right = [5, 15, 14, 24];
                this.orientation.inverse = [3, 4, 14, 15];
                this.orientation.left = [5, 15, 14, 24];
                break;
            case "T":
                this.fill_color = COLORS.purple_dark;
                this.outline_color = COLORS.purple_light;
                this.orientation.original = [3, 4, 5, 14];
                this.orientation.right = [5, 15, 25, 14];
                this.orientation.inverse = [4, 13, 14, 15];
                this.orientation.left = [4, 14, 24, 15];
                break;
            default:
                console.log(`WARNING: Shape was not provided!`);
        }
    }
}
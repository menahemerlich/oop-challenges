import { MediaItem } from "./MediaItem.js";

export class Movie extends MediaItem{
    constructor(title, year, genre, director, durationMinutes){
        super(title, year, genre)
        this.director = director
        this.durationMinutes = durationMinutes
    }

    getSummary(){
        console.log(`Movie: ${this.title} directed by ${this.director}, ${this.durationMinutes} min`);
    }
}

export class MediaItem{
    constructor(title, year, genre){
        this.title = title
        this.year = year
        this.genre = genre
    }

    getSummary(){
        console.log('string summary');
    }
}
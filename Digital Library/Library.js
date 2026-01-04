
export class Library{
    constructor(){
        this.mediaList = []
    }

    addItem(item){
        this.mediaList.push(item)
    }

    search(term){
        const searchList = this.mediaList.filter((item) => {
            if (item.title.toLowerCase() === term.toLowerCase()){
                return true
            }
        })
        return searchList
    }

    listByGener(genre){
        const genreList = this.mediaList.filter((item) => {
            if (item.genre.toLowerCase() === genre.toLowerCase()){
                return true
            }
        })
        return genreList
    }
}
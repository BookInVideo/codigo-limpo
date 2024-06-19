import XmlMovieFinder from "./XmlMovieFinder";

class MovieLister {
    finder: XmlMovieFinder;

    constructor() {
        this.finder = new XmlMovieFinder("./movies.xml");
    }

    getMoviesDirectedBy(arg: string) {
        const allMovies = this.finder.findAll();
        return allMovies.filter((movie) => movie.director == arg);
    }
}

const lister = new MovieLister();
const movies = lister.getMoviesDirectedBy('Steven Spielberg');
console.log(movies);
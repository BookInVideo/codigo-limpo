import XmlMovieFinder from "./XmlMovieFinder";
import MovieFinder from "./interface/MovieFinder";

class MovieLister {
    finder: MovieFinder;

    constructor(movieFinder: MovieFinder) {
        this.finder = movieFinder;
    }

    getMoviesDirectedBy(arg: string) {
        const allMovies = this.finder.findAll();
        return allMovies.filter((movie) => movie.director == arg);
    }
}

const lister = new MovieLister(new XmlMovieFinder('./movies.xml'));
const movies = lister.getMoviesDirectedBy('Steven Spielberg');
console.log(movies);
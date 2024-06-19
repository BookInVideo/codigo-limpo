import Movie from "./Movie";

interface MovieFinder {
    findAll: () => Movie[];
}

export default MovieFinder;
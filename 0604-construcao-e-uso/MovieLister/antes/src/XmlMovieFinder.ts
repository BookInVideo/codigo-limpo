import fs from "fs";
import Movie from "./interface/Movie";
import { xml2json } from "xml-js";

class XmlMovieFinder {
    file: string;

    constructor(file: string) {
        this.file = file;
    }

    findAll(): Movie[] {
        const rawMovies = this.xmlToJson();
        return this.getMovies(rawMovies);
    }

    private xmlToJson() {
        const xml = fs.readFileSync(this.file, "utf-8");
        const json = JSON.parse(xml2json(xml));
        return json.elements[0].elements;
    }

    private getMovies(rawMovies: any[]) {
        const movies: Array<Movie> = [];
        rawMovies.forEach((movie: any) => {
            const name = movie.elements[0].elements[0].text;
            const director = movie.elements[1].elements[0].text;
            movies.push({ name, director });
        });
        return movies;
    }
}

export default XmlMovieFinder;
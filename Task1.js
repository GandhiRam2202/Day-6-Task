// a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

// b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

// c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.

// d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”


class Movie {

    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    getPG() {
        return this.rating === "PG";
    }
}


const movies = [
    new Movie("Mara", "Pramod Films", "PG"),
    new Movie("DADA", "Olympia Movies", "PG"),
    new Movie("Erug Pattru", "Potential Studios", "PG"),
    new Movie("Sita Raman", "Vyjayanthi Movies and Swapna Cinema", "PG"),
    new Movie("Mudhalum Nee Mudivum Nee", "Super Talkies", "PG"),
    new Movie("KGF", "Super Talkies", "G"),
    new Movie("KGF2", "Super Talkies", "4*"),
    new Movie("Animal", "Super Talkies", "4*"),
    new Movie("Jawan", "Super Talkies", "4*"),
    new Movie("Jailer", "Super Talkies", "4*"),
    new Movie("RRR", "Super Talkies", "4*"),
];

const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");

const pgMovies = movies.filter(movie => movie.getPG());

console.log(pgMovies);
console.log(casinoRoyale);

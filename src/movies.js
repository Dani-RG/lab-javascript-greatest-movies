// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directorsArray = moviesArray.map(elem => elem.director);
        return directorsArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (!moviesArray.length) {return 0}
    const dramaMoviesSpielberg = moviesArray.filter(elem => elem.director === 'Steven Spielberg' && elem.genre.includes('Drama'));
        return dramaMoviesSpielberg.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (!moviesArray.length) {return 0}
    const avrgScores = moviesArray.filter(elem => elem.score);
    const sumScores = avrgScores.reduce((acc, currMovie) => {
        return acc += currMovie.score
    },0);
    return (Number((sumScores / moviesArray.length).toFixed(2)));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(elem => elem.genre.includes('Drama'));
    if (!dramaMovies.length) {return 0}
    const dramaScores = dramaMovies.reduce((acc, currMovie) => {
        return acc += currMovie.score
    },0);
    return (Number((dramaScores / dramaMovies.length).toFixed(2)));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const clonedMoviesArray = [...moviesArray];
    const sortedMovies = clonedMoviesArray.sort((a, b) => {
        if (a.year === b.year) {
            if (a.title < b.title) {
                return -1;
            }
            else if (a.title > b.title) {
                return 1;
            }
            return 0;
        }
        else {
            return a.year - b.year;
        }
        });
    return sortedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const clonedMovies2 = [...moviesArray];
    const sortedTitles = clonedMovies2.map(elem => elem.title);
    const sortedMovies2 = sortedTitles.sort();
    if (sortedMovies2.length > 20) {
       return sortedMovies2.slice(0, 20);
    }
    else {return sortedMovies2};
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}


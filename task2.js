const getMovieTitles = async title => {
    const response = await fetch(`https://jsonmock.hackerrank.com/api/movies/search/?Title=${title}`);
    const dataObject = await response.json();
    const totalPages = dataObject?.total_pages ?? 1;
    
    let results = [];

    for (let index = 1; index <= totalPages; index++) {
        const response = await fetch(`https://jsonmock.hackerrank.com/api/movies/search/?Title=${title}&page=${index}`);
        const dataObject = await response.json();
        results = results.concat(dataObject?.data.map(movie => movie.Title));
    }

    results.sort();

    return results;
}

(async () => {
    const movieTitles = await getMovieTitles("Spiderman");
    let htmlString = "";

    movieTitles.forEach(title => {
        htmlString += `
            <li>${title}</li>
        `;
    });
    document.getElementById("task2").innerHTML += htmlString;
})();

async function rishi() {
  const title = document.getElementById('ss').value.trim();
  const apiKey = '6c51a2db';
  const movieInfo = document.getElementById('movie-info');

  if (!title) {
      alert('Please enter a movie name!');
      return;
  }

  try {
      const response = await fetch(`https://www.omdbapi.com/?t=${title}&apikey=${apiKey}`);
      const data = await response.json();

      if (data.Response === "False") {
          movieInfo.innerHTML = '<p style="color: red;">Movie not found!</p>';
          return;
      }

      movieInfo.innerHTML = `
          <h2>${data.Title} (${data.Year})</h2>
          <img src="${data.Poster !== "N/A" ? data.Poster : 'placeholder.jpg'}" alt="Movie Poster">
          <p><strong>Genre:</strong> ${data.Genre}</p>
          <p><strong>Director:</strong> ${data.Director}</p>
          <p><strong>Plot:</strong> ${data.Plot}</p>
          <p><strong>IMDB Rating:</strong> ${data.imdbRating}</p>
      `;
  } catch (error) {
      console.error("Error fetching movie data:", error);
      movieInfo.innerHTML = '<p style="color: red;">An error occurred. Please try again later.</p>';
  }
}

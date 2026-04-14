<script>
  let { data } = $props();
</script>

<a href="/movies/create" class="btn btn-primary mb-3">Add New Movie</a>

<div class="movie-grid">
  {#each data.movies as movie}
    <div class="movie-card">
      <img src={movie.poster} alt={movie.title} />
      <a href={`/movies/${movie._id}`} class="movie-title">{movie.title}</a>
      <p>Jahr: {movie.year}</p>
      <p>Dauer: {movie.length}</p>
    </div>
  {/each}
</div>

<style>
  .movie-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 1rem;
  }

  .movie-card img {
    width: 100%;
    height: auto;
    display: block;
  }

  .movie-title {
    display: inline-block;
    margin-top: 0.5rem;
    font-weight: bold;
  }
</style>
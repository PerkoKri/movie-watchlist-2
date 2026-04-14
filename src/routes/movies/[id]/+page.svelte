<script>
  let { data } = $props();
  const movie = data.movie;
</script>

<a href="/movies">Back</a>

<h1>{movie.title}</h1>

<div class="detail-layout">
  <img src={movie.poster} alt={movie.title} />

  <div>
    <p>Jahr: {movie.year}</p>
    <p>Dauer: {movie.length}</p>

    <h3>Cast:</h3>
    <ul>
      {#each movie.actors ?? [] as actor}
        <li>{actor}</li>
      {/each}
    </ul>

    <form method="POST" action="?/delete">
      <button type="submit" class="btn btn-danger">Delete Movie</button>
    </form>
  </div>
</div>

<style>
  .detail-layout {
    display: flex;
    gap: 2rem;
    align-items: flex-start;
  }

  img {
    max-width: 220px;
    height: auto;
  }
</style>
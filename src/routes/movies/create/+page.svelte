<a href="/movies">Back</a>

<h1>Add a Movie</h1>

<form method="POST" action="?/create">
  <div class="mb-3">
    <label for="title" class="form-label">Name</label>
    <input id="title" name="title" class="form-control" type="text" required />
  </div>

  <div class="mb-3">
    <label for="year" class="form-label">Year</label>
    <input id="year" name="year" class="form-control" type="number" required />
  </div>

  <div class="mb-3">
    <label for="length" class="form-label">Length</label>
    <input id="length" name="length" class="form-control" type="text" required />
  </div>

  <div class="mb-3">
    <label for="poster" class="form-label">Poster URL</label>
    <input id="poster" name="poster" class="form-control" type="text" />
  </div>

  <button type="submit" class="btn btn-primary">Add Movie</button>
</form>
import db from '$lib/server/db.js';

export async function load({ params }) {
  return {
    movie: await db.getMovie(params.id)
  };
}
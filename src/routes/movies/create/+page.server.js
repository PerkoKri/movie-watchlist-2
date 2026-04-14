import db from '$lib/server/db.js';
import { redirect } from '@sveltejs/kit';

export const actions = {
  create: async ({ request }) => {
    const data = await request.formData();

    const movie = {
      title: data.get('title'),
      year: data.get('year'),
      length: data.get('length'),
      poster: data.get('poster')
    };

    await db.createMovie(movie);

    throw redirect(303, '/movies');
  }
};
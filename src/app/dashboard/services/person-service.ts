import { Product } from "../entities/count.mapper";

export const getPersonList = async () => {
  try {
    const [usersResponse, photosResponse, postsResponse] = await Promise.all([
      fetch('https://tu-api.com/users'),
      fetch('https://tu-api.com/photos'),
      fetch('https://tu-api.com/posts')
    ]);

    if (!usersResponse.ok || !photosResponse.ok || !postsResponse.ok) {
      throw new Error('Error fetching data');
    }

    const [users, photos, posts] = await Promise.all([
      usersResponse.json(),
      photosResponse.json(),
      postsResponse.json()
    ]);

    return users.map((user: any) => {
      const photo = photos.find((p: any) => p.userId === user.id);
      const post = posts.find((p: any) => p.userId === user.id);
      return Product({ ...user, photo, post });
    });
  } catch (error) {
    console.error('Error en getPersonList:', error);
    return [];
  }
};
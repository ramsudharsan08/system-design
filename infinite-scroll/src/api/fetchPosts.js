export const fetchPosts = async (page, limit = 10) => {
  await new Promise((res) => setTimeout(res, 800)); // simulate delay

  return Array.from({ length: limit }, (_, i) => ({
    id: page * limit + i,
    title: `Post ${page * limit + i + 1}`,
    description: 'This is a sample post for infinite scrolling.'
  }));
};

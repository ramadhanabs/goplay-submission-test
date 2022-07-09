export const getUnsplashSource = (url) => {
  const resolution = '500x500';
  const id = url.split('/').pop();
  return `https://source.unsplash.com/${id}/${resolution}`;
};

import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'qnvwnor4',
  dataset: 'production',
  apiVersion: '',
  useCdn: true,
  token: '',
});

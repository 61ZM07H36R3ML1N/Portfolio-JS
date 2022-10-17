import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'qnvwnor4',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token:
    'sklTWBHto1DE2YotfcegKod8mWTsOeO6BW8flcgWYzv3kbTvWfJzYps41afL85QvEvI2V3Vs4LlHsV6yrmX1c26BpVqFNNG8HDXCqRczvKnwe8gUqzH8P1BqfuffIjXJKLK1WvdEeU4mFm4AQZ9k7oKTNqy1J8mqfAayFgzF0tDP6B4C2gA5',
});

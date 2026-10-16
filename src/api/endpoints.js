import client from './client';

export const api = {
  // Services
  getServices: () => client.get('/services/'),

  // Contact
  sendContact: (data) => client.post('/contact/', data),

  // Projects
  getProjects: (category = null) =>
    client.get('/projects/', { params: category ? { category } : {} }),

  // Blog
  getBlogPosts: (category = null) =>
    client.get('/blog/', { params: category ? { category } : {} }),

  getBlogPost: (id) => client.get(`/blog/${id}/`),
};
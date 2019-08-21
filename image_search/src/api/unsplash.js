import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID ab00041ad1af8f39f999abc2aecf7275f42364dce1509531ab652212a078706b',
  }
});
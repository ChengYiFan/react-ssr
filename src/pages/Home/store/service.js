import clientAxios from '../../../client/request';
import serverAxios from '../../../server/request';
import axios from 'axios';

export async function fetchHomeList(server) {
  const request = server ? serverAxios : clientAxios;
  return request.get('/api/news.json?secret=PP87ANTIPIRATE');
}

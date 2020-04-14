import axios from 'axios';

export async function fetchHomeList() {
  const res = await axios.get('http://47.95.113.63/ssr/api/news.json?secret=PP87ANTIPIRATE');
  return res.data;
}

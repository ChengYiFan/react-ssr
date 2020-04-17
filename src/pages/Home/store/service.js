import axios from 'axios';

export async function fetchHomeList() {
  const { data: { success, data } } = await axios.get('http://47.95.113.63/ssr/api/news.json?secret=PP87ANTIPIRATE');
  if(!success) {
    throw new Error('操作失败请重试！');
  }
  return data;
}

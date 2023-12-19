import axios from 'axios';

export const DataSource = {
  async getData() {
    const target = 'data/DATA.json';
    return axios.get(target);
  },
};

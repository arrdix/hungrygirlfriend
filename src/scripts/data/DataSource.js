import axios from 'axios';

const DataSource = {
  async getData() {
    const target = 'data/DATA.json';
    return axios.get(target);
  },
};

export default DataSource;

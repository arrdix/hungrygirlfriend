import Routes from '../routes/Routes';
import urlParser from '../routes/UrlParser';

const App = {
  init() {
    const activeUrl = urlParser.getFullUrl();
    const activePage = Routes[activeUrl];
    activePage.render();
  },
};

export default App;

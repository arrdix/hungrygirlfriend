import Routes from '../routes/Routes';
import urlParser from '../routes/UrlParser';
import SmoothScrolling from '../utils/SmoothScrolling';
import AppHeader from './sections/AppHeader';
import MenuModal from './sections/MenuModal';

class App {
  constructor({ header, footer, menuModal, mainContent }) {
    this.header = header;
    this.footer = footer;
    this.menuModal = menuModal;
    this.mainContent = mainContent;

    this.initAppShell();
  }

  initAppShell() {
    AppHeader.init();
    MenuModal.init();

    this.initAppFunctionality();
  }

  initAppFunctionality() {
    SmoothScrolling.init();
  }

  render() {
    const activeUrl = urlParser.getFullUrl();
    const activePage = Routes[activeUrl];
    this.mainContent.innerHTML = activePage.renderSection();
    activePage.renderContent();
  }
}

export default App;

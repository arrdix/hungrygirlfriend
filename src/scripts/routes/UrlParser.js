const urlParser = {
  getFullUrl() {
    const activeUrl = window.location.hash.slice(1).toLocaleLowerCase();
    const splitedUrl = this.urlSplitter(activeUrl);
    return this.combineUrl(splitedUrl);
  },

  getUrlId() {
    const activeUrl = window.location.hash.slice(1).toLocaleLowerCase();
    const splitedUrl = this.urlSplitter(activeUrl);
    return splitedUrl.id;
  },

  urlSplitter(url) {
    const splitedUrl = url.split('/');
    return {
      resource: splitedUrl[1] || null,
      id: splitedUrl[2] || null,
      verbs: splitedUrl[3] || null,
    };
  },

  combineUrl(splitedUrl) {
    const urlResource = splitedUrl.resource ? `/${splitedUrl.resource}` : '/';
    const urlId = splitedUrl.id ? `/:id` : '';
    const urlVerbs = splitedUrl.verbs ? `/${splitedUrl.verbs}` : '';
    return urlResource + urlId + urlVerbs;
  },
};

export default urlParser;

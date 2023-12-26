const LoadingHelper = {
  activateLoading() {
    const loadingBlock = document.getElementById('loading-block');
    loadingBlock.classList.add('active');
  },

  deactivateLoading() {
    const loadingBlock = document.getElementById('loading-block');
    loadingBlock.classList.remove('active');
  },
};

export default LoadingHelper;

const DatabaseUpdated = new CustomEvent('DatabaseUpdated', {
  detail: {
    message: 'IndexedDB Updated!',
  },
});

export default DatabaseUpdated;

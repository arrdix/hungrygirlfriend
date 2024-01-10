export const DatabaseUpdated = new CustomEvent('DatabaseUpdated', {
  detail: {
    message: 'IndexedDB Updated!',
  },
});

export function FormReviewHasBeenSent(data) {
  return new CustomEvent('ReviewSent', {
    detail: data,
  });
}

export const getBoolenToString = (data) => {
  if (data === '') return '';

  return data === 'false' ? 'No' : 'Sí';
};

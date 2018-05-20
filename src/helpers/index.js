export const maxNumber = numbers => {
  return numbers.length > 0 ? Math.max(...numbers) : 0;
}

export const updateObject = (oldObject, updatedProperties) => ({
  ...oldObject,
  ...updatedProperties,
});

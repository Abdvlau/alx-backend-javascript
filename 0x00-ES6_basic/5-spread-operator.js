// using the spread operator to expand list and string

export default function concatArrays(array1, array2, string) {
  return [...array1, ...array2, ...string];
}

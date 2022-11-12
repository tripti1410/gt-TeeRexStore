export function removeDuplicates(arr: string[]) {
  return arr.filter(
    (item: string, index: number) => arr.indexOf(item) === index
  );
}

export function removeDuplicates(arr: string[] | number[]) {
  return arr.filter(
    (item: string | number, index: number) => arr.indexOf(item) === index
  );
}

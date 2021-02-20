import {SortDirectionType} from "@/js/enums/Common";

export function swapItems<T>(array: T[], firstIndex: number, secondIndex: number): T[] {
  const firstItem = array[firstIndex];
  const secondItem = array[secondIndex];
  const temp = [
    ...array.slice(0, firstIndex),
    secondItem,
    ...array.slice(firstIndex + 1, secondIndex),
    firstItem,
    ...array.slice(secondIndex + 1)
  ]
  return temp;
}


export function sortArray<T>(array: T[], comparator: string): T[] {
  const sortedArray = [...array];
  function _compare(a, b) {
    if (a[comparator] < b[comparator]) {
      return -1;
    }
    if (a[comparator] > b[comparator]) {
      return 1;
    }
    return 0;
  }

  return sortedArray.sort(_compare);
}

export function sortItems<T>(array: T[], comparator: string, direction: SortDirectionType): T[] {
  const sortedArray = [...array];
  function _compare(a, b) {
    if (direction === SortDirectionType.Acscending) {
      if (a[comparator] < b[comparator]) {
        return -1;
      }
      if (a[comparator] > b[comparator]) {
        return 1;
      }
    } else {
      if (a[comparator] < b[comparator]) {
        return 1;
      }
      if (a[comparator] > b[comparator]) {
        return -1;
      }
    }

    return 0;
  }

  return sortedArray.sort(_compare);
}
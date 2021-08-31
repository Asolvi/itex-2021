export const orderedGroupBy = (xs: any[], key: string) =>
  xs.reduce((rv: any[], x: any) => {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, []);

export const groupBy = (xs: any[], key: string) =>
  xs.reduce((rv: any[], x: any) => {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});

export const range = (
  size: number,
  startAt: number = 0
): ReadonlyArray<number> => [...Array(size).keys()].map((i) => i + startAt);

export const unique = (list: any[]) => [...new Set(list)];

/* Set only filters out duplicate values by reference, hence it only works for primitive values.
 * To make the function work for objects, we need to convert them to primitive values first (strings) */
export const uniqueObjects = (list: Object[]) =>
  unique(list.map((x) => JSON.stringify(x))).map((x) => JSON.parse(x));

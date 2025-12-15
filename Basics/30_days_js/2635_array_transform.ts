function map(arr: number[], fn: (n: number, i: number) => number) : number [] {
    const newArray: number[] = [];

    for (let i=0; i<arr.length; ++i) {
        newArray[i] = fn(arr[i], i);
    }
    return newArray;
}
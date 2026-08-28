function first<T>(arr: T[]) :T | undefined {
    return arr[0]
}

console.log(first([1,2,3]))
console.log(first(['a','b','c']))
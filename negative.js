function FirstNegativeNum(arr, k) {
    let i = 0, j = 0, l = [], r = [];
    while (j < arr.length) {
        if (arr[j] < 0) {
            l.push(arr[j])
        }
        if (j - i + 1 < k) {
            j++;
        }
        else if (j - i + 1 === k) {
            if (l.length === 0) {
                r.push(0)
            }
            else {
                r.push(l[0]);
                if (arr[i] === l[0]) {
                    l.shift()
                    i++;
                    j++;
                }
            }
        }
    }
    return r;
}

let arr = [12, -1, -7, 8, -15, 30, 16, 28], k = 3;
console.log(FirstNegativeNum(arr, k))
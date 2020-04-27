// 条件:输入一个数组，1秒console一次数组里的值

function echoArr(arr) {
    arr.forEach((e, index) => {
        setTimeout(() => console.log(e), (index + 1) * 1000)
    })
}

function echoArr2(arr, i = 0) {
    console.log(arr[i]);
    if (i < arr.length - 1) {
        setTimeout(() => {
            echoArr2(arr, ++i)
        }, 1000)
    }

}


// 大数相加

function addBig(num1, num2) {

    const a = num1.toString().split('').reverse().join('');
    const b = num2.toString().split('').reverse().join('');

    const length = a.length > b.length ? a.length : b.length;
    let cont = 0;
    let num = 0;

    for (let i = 0; i < length; i++) {
        let add = (+a[i] || 0) + (+b[i] || 0);
        cont += add;
        cont /= 10;
        num++;
    }

    return Math.round(cont * Math.pow(10, num))
}

function sumBig(num1, num2) {

    const a = num1.toString().split('');
    const b = num2.toString().split('');

    let cont = 0;
    let num = 0;

    while (a.length || b.length) {
        let add = (+a.pop() || 0) + (+b.pop() || 0);
        cont += add;
        cont /= 10;
        num++;
    }

    return Math.round(cont * Math.pow(10, num))
}

// 约瑟夫环问题,得出最后留下的人
function LastRemaining_Solution(n, m) {
    if (n < 1 || m < 1) {
        return -1;
    } else {
        return joseoh(n, m);
    }

}

function joseoh(n, m) {
    if (n === 1) {
        return 0;
    }
    return (joseoh(n - 1, m) + m) % n;
}

function jumpFloor(number)
{
    if(number<=2){
        return number;
    }
    let i = 2;
    let pre = 1;
    let current = 2;
    let result = 0;
    while(i++ < number){
        result = pre + current;
        pre = current;
        current = result;
    }
    return result;
}

function Fibonacci(n){
    if(n<=1){
        return n;
    }
    let i = 1;
    let pre = 0;
    let current = 1;
    let result = 0;
    while(i++ < n){
        result = pre + current;
        pre = current;
        current = result;
    }
    return result;
}

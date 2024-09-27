module.exports = function reverse(n) {
    let num = Math.abs(n);
    let arr = num.toString().split("");
    let str = arr.reverse();
    let resalt = Number(str.join(""));
    return resalt;
};

// 匹配一个字符串是否是有小写字母和数字组成
let re = /^[a-z0-9]*$/;
let v1 = "123fsd";
let v2 = "fhsj fhsj+fjs";
let result1 = re.test(v1);
let result2 = re.test(v2);
console.log(result1, result2);

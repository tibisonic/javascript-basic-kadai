// オブジェクト
const personalData1 = { name: '侍太郎', age: 36, gender: '男性', address: '東京都', phoneNumber: '070-0809-1160' };
const personalData2 = { name: '侍花子', age: 33, gender: '女性', address: '京都府', phoneNumber: '999-9999-9999' };

console.log(personalData1['name']);
console.log(personalData1.gender);

personalData2.age = 37;

console.log(personalData2.age);

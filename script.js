console.log('------------- # 4')
// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }  
// ask(
// "Вы согласны?",
// () => alert("Вы согласились.") ,
// () => alert("Вы отменили выполнение.")
// );
// console.log(ask());

console.log('------------- # 5')
let string = 'my, short, string';
let massive = string.split (', ');
console.log(massive);

console.log('------------- # 6')
let prog = ['JavaScript', 2015];
let str = prog.join (';');
console.log(str);

console.log('------------- # 7')
let users = [
    {id: 1, name: "Vic", age: 21},  
    {id: 2, name: "Petya", age: 30}, 
    {id: 3, name: "Jon", age: 5}];
let userCollection = 
users.filter(function (item) { return item.age < 20 });

console.log(userCollection);

console.log('------------- # 8')
let people = [
    {id: 1, name: "Vic", age: 21},  
    {id: 2, name: "Petya", age: 30}, 
    {id: 3, name: "Jon", age: 5}];
let names = users.map(item => item.name);
console.log(names);

console.log('------------- # 9')
function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        let range = arr[i];
        if (range < a || range > b) {
            arr.splice(i, 1);
            i--;
        }
    }
  }
  let arr = [5, 3, 8, 1, 6, 7, 9];
  filterRangeInPlace(arr, 1, 8);
 console.log(arr);

 console.log('------------- # 10')
 function splitString(stringToSplit, separator) {
    let arrayOfStrings = stringToSplit.split(separator);
    // console.log(stringToSplit);
    console.log(arrayOfStrings);
  }
  
  let tempestString = 'Вот это прикол))';
  let phraseString = 'Стремитесь не к успеху, а к ценностям, которые он дает';
  let monthString = 'Янв,Фев,Мар,Апр,Май,Июн,Июл,Авг';
  
  let space = ' ';
  let comma = ',';
  
  splitString(tempestString, space);
  splitString(phraseString, space);
  splitString(tempestString);
  splitString(monthString, comma);

  console.log('------------- # 11')
  let array = [3, 8, 9, 1];
function filterRange(arr, a, b){
    return arr.slice(a, b);
}
console.log(filterRange(array, 1, 6));
console.log(array);

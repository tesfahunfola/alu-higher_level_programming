#!/usr/bin/node
const argument1 = 'Python';
const argument2 = 'fun';

if (argument1 === undefined || argument2 === undefined) {
  console.log('HBTN is undefined');
} else if (argument1 === undefined && argument2 === undefined) {
  console.log('undefined is undefined');
} else {
  console.log(argument1 + ' is ' + argument2);
}

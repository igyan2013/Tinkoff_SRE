var str = 'Kate got a job offer from invest team Kate got a job offer from invest team Tinkoff',
  str_tin = 'Tinkoff',
  ss = ''
new_str = '',
  c = 0, f = true,
  arr = [], arr1 = [];
for (j = 0; j < str_tin.length; j++) {
  for (i = 0; i < str.length; i++) {
    if (str_tin[j].toLowerCase() == str[i].toLowerCase()) {
      if (!arr.includes(i)) {
        ss = ss + str[i];
      }
      arr.unshift(i);
    }
  } 
}

for (j = 0; j < str_tin.length; j++) {
  for (i = j; i < ss.length; i++) {
    if (str_tin[j].toLowerCase() == ss[i].toLowerCase()) {
      c++
    }

  }
  arr1.unshift(c);
  c = 0
}
const minValue = Math.min.apply(null, arr1);
console.log(minValue);

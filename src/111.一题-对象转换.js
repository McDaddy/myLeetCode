/*
var entry = {
    a: {
      b: {
        c: {
          dd: 'abcdd'
        }
      },
      d: {
        xx: 'adxx'
      },
      e: 'ae'
    }
  }
  
要求转换成如下对象
var output = {
'a.b.c.dd': 'abcdd',
'a.d.xx': 'adxx',
'a.e': 'ae'
}
*/
var entry = {
    a: {
      b: {
        c: {
          dd: 'abcdd'
        }
      },
      d: {
        xx: 'adxx'
      },
      e: 'ae'
    }
  }

let finalResult = [];
const transfer = (obj, parentArray) => {
    Object.keys(obj).forEach(key => {
        const currentParent = [...parentArray, key];
        const value = obj[key];
        if (typeof value === 'object') {
            transfer(value, currentParent);
        } else {
            finalResult.push({ [value] : currentParent });
        }
    })
}
transfer(entry, []);
finalResult = finalResult.reduce((acc,item) => {
    const [value, keyArray] = Object.entries(item)[0];
    acc[keyArray.join('.')] = value;
    return acc;
}, {});
console.log(finalResult);

// 数组解构赋值
{
  let a, b;
  [a, b] = [1, 2];
  console.log(a, b);
}
// 扩展运算符解构赋值
{
  let a, b, rest;
  [a, b, ...rest] = [1, 2, 3, 4, 5, 6];
  console.log(a, b, rest);
}
// 对象解构赋值
{
  let a, b;
  ({a, b} = {a: 1, b: 2});
  console.log(a, b);
}

{
  let a, b, c;
  // [a,b,c=3]=[1,2];
  [a, b, c] = [1, 2];
  console.log(a, b, c);
}

// 解构赋值用法
{
  let a = 1;
  let b = 2;
  [a, b] = [b, a];
  console.log(a, b);
}

{
  function f() {
    return [1, 2];
  }

  let a, b;
  [a, b] = f();
  console.log(a, b);
}

// 可以选择性忽略某些返回值
{
  function f() {
    return [1, 2, 3, 4, 5];
  }

  let a, b, c;
  [a, , , , b] = f();
  console.log(a, b);
}

//扩展运算符接收返回值
{
  function f() {
    return [1, 2, 3, 4, 5];
  }

  let a, b, c;
  [a, ...b] = f();
  console.log(a, b);
}

//扩展运算符接收返回值
{
  function f() {
    return [1, 2, 3, 4, 5];
  }

  let a, b, c;
  [a, , ...b] = f();
  console.log(a, b);
}
// 对象的解构赋值
{
  let obj = {
    a: 92,
    b: false
  };
  let {a, b} = obj;
  console.log(a, b);
}
// 对象解构赋值的默认值处理
{
  let {
    a = 10,
    b = 5
  } = {a: 3};
  console.log(a, b);
}
// 嵌套的解构赋值
{
  let metaData = {
    title: 'abc',
    test: [{
      title: 'test',
      desc: 'description'
    }]
  };
  let {
    title: esTitle,
    test: [
      {
        title: cnTitle
      }
    ]
  } = metaData;
  console.log(esTitle,cnTitle);
}


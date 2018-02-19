/*{
  // 将一组数变成数组
  let arr = Array.of(3, 4, 7, 9, 11);
  console.log('arr=', arr);//[3, 4, 7, 9, 11]
}*/

/*{
  // 当不传任何参数的时候生成新数组
  let arr = Array.of();
  console.log('arr=', arr);//[]
}*/

/*{
  let list_item = document.querySelectorAll('li');
  let list_item_array = Array.from(list_item);
  list_item_array.forEach(item => {
    console.log(item.textContent);
  });
  console.log(Array.from([1, 3, 5, 7, 9], item => item * 2))//[2,6,10,14,18]
}*/

/*
{
  //填充数组
  console.log('fill-7', [1, 'a', undefined].fill(7));//[7,7,7]
  console.log('fill-7,pos', [1, 'a', undefined].fill(7, 1, 3))//[1,7,7]
}
*/

/*{
  for (let index of ['1', 'c', 'ks'].keys()) {
    console.log('keys', index);//0,1,2
  }
  // chrome 不支持
  for (let value of ['1', 'c', 'ks'].keys()) {
    console.log('keys', value);//0,1,2
  }

  for (let [index,value] of ['1', 'c', 'ks'].entries()) {
    console.log('key-value', index,value);//0 1,1 c,2 ks
  }
}*/
/*{
  console.log([1,2,3,4,5].copyWithin(0,3,4))//[4, 2, 3, 4, 5]
}*/
/*{
  console.log([1,2,3,4,5,6].find(item=>item>3));//4 找出第一个符合的数
  console.log([1,2,3,4,5,6].find(item=>item<0));//undefined 找出第一个符合的数
  console.log([1,2,3,4,5,6].findIndex(item=>item>3));//3 找出第一个符合的数的index
  console.log([1,2,3,4,5,6].findIndex(item=>item<0));//-1 找出第一个符合的数的index
}*/
/*{
  console.log([1,2,NaN].includes(1));//true;
  console.log([1,2,NaN].includes(NaN));//true;
}*/


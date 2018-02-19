/*{
  console.log('a', `\u0061`);// a a
  console.log('s', `\u20BB7`);// 不能正常显示
  console.log('s', `\u{20BB7}`);// s 𠮷

}*/

/*{
  let s = '𠮷';
  console.log('length', s.length);//2
  console.log('0', s.charAt(0));//2
  console.log('1', s.charAt(1));//2
  console.log('at0', s.charCodeAt(0));//2
  console.log('at1', s.charCodeAt(1));//2

  let s1 = '𠮷a';
  console.log('length', s1.length);
  console.log('code0', s1.codePointAt(0));
  console.log('code1', s1.codePointAt(0).toString(16));
  console.log('code1', s1.codePointAt(1));
  console.log('code1', s1.codePointAt(2));
}*/

/*{
  console.log(String.fromCharCode('0x20bb7'));// 乱码
  console.log(String.fromCodePoint('0x20bb7'));//𠮷
}*/
/*{
  let str = `\u{20bb7}abc`;
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
    //前两个乱码，然后a,b,c
  }
  for (let code of str) {
    console.log('es6', code);//𠮷,a,b,c
  }
}*/
/*{
  let str = 'string';
  console.log(str.includes('r'));//true
  console.log(str.includes('a'));//false
  console.log(str.startsWith('str'));//true
  console.log(str.endsWith('ing'));//true
}*/

/*{
  let str = "abc";
  console.log(str.repeat(2));//abcabc
}*/
// 模版字符串
/*{
  let name = 'list';
  let info = 'hello world';
  let m = `i am ${name},${info}`;
  console.log(m);
}*/
/*{
  console.log('1'.padStart(2, '0'));//01
  console.log('1'.padEnd(2, '0'));//10
}*/
/*{
  // 标签模版
  let user = {
    name: 'list',
    info: 'Hello world'
  };
  console.log(abc`i am ${user.name},${user.info}`);

  function abc(s, v1, v2) {
    console.log(s, v1, v2);
    return s + v1 + v2;
  }
}*/
{
  console.log(String.raw`hi\n${1+2}`);//hi\n3
  console.log(`hi\n${1+2}`);//hi<br>3
}




{
  let regex = new RegExp('xyz','i');
  let regex2 = new RegExp(/xyz/i);
  console.log(regex.test('xyz123'));//true
  console.log(regex2.test('xyz123'));//true

  let regex3 = new RegExp(/xyz/ig,'i');//后面的修饰符会覆盖前面的修饰符
  console.log(regex3.flags);//i
}

{
  let s = 'bbb_bb_b';
  let regex = /b+/g;
  let regex2 = /b+/y;
  console.log('one',regex.exec(s),regex2.exec(s));
  console.log('two',regex.exec(s),regex2.exec(s));
  console.log(regex.sticky);//false
  console.log(regex2.sticky);//true
}
{
  console.log('u-1',/^\uD83D/.test('\uD83D\uDC2A'));//false
  console.log('u-1',/^\uD83D/u.test('\uD83D\uDC2A'));// true

  console.log(/\u{61}/.test('a'));//false
  console.log(/\u{61}/u.test('a'));//true

  console.log(`\u{20BB7}`);
  // 大于2个字符要使用u修饰符
  let s = '𠮷';
  console.log('u',/^.$/.test(s));//false
  console.log('u',/^.$/u.test(s));//true
  console.log('u',/𠮷{2}/u.test('𠮷𠮷'));//true
  console.log('u',/𠮷{2}/.test('𠮷𠮷'));//false
}

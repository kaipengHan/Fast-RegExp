# Fast-RegExp

常用的正则表达式

## 数字

1. 手机号
   `const regexpPhone = /^[1][3-9][0-9]{9}$/;`
2. 浮点数
   `const regexpFNumber = /^\d+(\.\d+)?$/;`

## 字符

1. 标点符号

   ```
   const regexpPunctuation = /[<>《》！*\(\^\)\$%~!@#…&%￥—\+=、。，？；‘’“”：·`]/g;

   ```

2. 名字
   `const regexpName = /^([\u4e00-\u9fa5]{1,20}|[a-zA-Z\.\s]{1,20})$/;`
3. 汉字
   `const regexpChineseCharacter = /^[\u4e00-\u9fa5]{0,}$/;`
4. 进制字符串

   ```
    二进制
    const reIsBinary = /^0b[01]+$/i;
    八进制
    const reIsOctal = /^0o[0-7]+$/i;
    十六进制
    const reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

   ```

## 特殊

1. 邮箱
   `const regexpEmail = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;`
2. 身份证

   ```
   const regexpIdCard = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;

   ```

3. emoji
   `const regexpEmoji = /[\ud800-\udbff][\udc00-\udfff]/`
4. 经纬度

   ```
   经度
   const regexpLon = /^(\-|\+)?(((\d|[1-9]\d|1[0-7]\d|0{1,3})\.\d{0,6})|(\d|[1-9]\d|1[0-7]\d|0{1,3})|180\.0{0,6}|180)$/;
   纬度
   const regexpLat = /^(\-|\+)?([0-8]?\d{1}\.\d{0,6}|90\.0{0,6}|[0-8]?\d{1}|90)$/;

   ```

5. url
   `const regexpUrl = /(http|https):\/\/([\w.]+\/?)\S*/;`

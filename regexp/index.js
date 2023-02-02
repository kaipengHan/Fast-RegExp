/**
 * * 数字
 */
// 手机号
const regexpPhone = /^[1][3-9][0-9]{9}$/;
// 浮点数
const regexpFNumber = /^\d+(\.\d+)?$/;

/**
 * * 字符
 */
// 中文标点符号
const regexpPunctuation =
	/[<>《》！*\(\^\)\$%~!@#…&%￥—\+=、。，？；‘’“”：·`]/g;

// 名字
const regexpName = /^([\u4e00-\u9fa5]{1,20}|[a-zA-Z\.\s]{1,20})$/;

// 汉字
const regexpChineseCharacter = /^[\u4e00-\u9fa5]{0,}$/;

// 二进制字符串检验
const reIsBinary = /^0b[01]+$/i;
// 八进制字符串检验
const reIsOctal = /^0o[0-7]+$/i;
// 十六进制字符串检验
const reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/**
 * * 特殊
 */
// 邮箱
const regexpEmail = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;

// 身份证
const regexpIdCard =
	/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;

// emoji
const regexpEmoji = /[\ud800-\udbff][\udc00-\udfff]/;

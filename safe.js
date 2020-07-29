var safe = require('safe-regex');
// use atomic group to scape backtracking
// var regex = process.argv.slice(2).join(' ');
// console.log(safe(regex));
const showPatterns = (arr) => {
  arr.forEach(pattern => {
    // console.log("\r\n*", pattern[0], ":")
    // console.log("  `" + prepareRegexObject(pattern[1]) + "`")

    console.log("\r\n", pattern[0], "=>", "safe:", pattern[2])
    console.log(prepareRegexObject(pattern[1]), "\r\n")
  })
}
const prepareRegexObject = (p_text) => typeof p_text === "string" ? new RegExp(p_text) : p_text;
const checkPatterns = (patterns_object) => {
  const safePatterns = [];
  const unSafePatterns = [];
  Object.entries(patterns_object).forEach(pattern => {
    if (safe(prepareRegexObject(pattern[1]))) {
      safePatterns.push([...pattern, true])
    } else
      unSafePatterns.push([...pattern, false])
  })
  console.log("\r\n**********Safe Patterns*******\r\n")
  showPatterns(safePatterns);
  console.log("\r\n\r\n\r\n⚠⚠⚠⚠⚠ Un-Safe Patterns ⚠⚠⚠⚠⚠")
  showPatterns(unSafePatterns);
}

const patterns = {
  en_label: "^[a-zA-Z0-9-_ ]{0,250}$",
  unicode_label: "^[\\s\\w\\u0600-\\u06FFs]{0,250}$",
  label: "^[\\s\\w\\u0600-\\u06FFs]{0,250}$",

  publicKey: "^[\\s\\d\\w]{0,3000}$",

  description: "^[\\s\\w\\u0600-\\u06FFs]{0,5000}$",

  email: "^[\\w-.]{1,50}@[\\w-.]{1,50}\\.[\\w-.]{1,50}$",

  mobile: "^((\\+[0-9]{1,2})|0)9[0-9]{9}$",

  number: "^[0-9]*$",
//^(?<protocol>((ht|f)tp(s?):\/\/))?$
  //
  link: /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/,
//^(?<port>:(\d){1,5})?(\/)?([a-zA-Z0-9\-\.\?\,\'\/\\\+&amp;%\$#_]*)?$
  complexWord: "^[\\s\\d\\w\\u0600-\\u06FFs_+=:!@#$%^&*()+.\\/\\/-]*$",
  password: "^[\\s\\d\\w\\u0600-\\u06FFs_+=:;!@#$%^&*()+<>,.\\/-]{8,16}$",
  password16:
    "^[\\s\\d\\w\\u0600-\\u06FFs_+=:;!@#$%^&*()+<>,.\\/\\/-]{16,32}$",
  passwordN: "^[\\s\\d\\w\\u0600-\\u06FFs_+=:;!@#$%^&*()+<>,.\\/\\/-]{8,}$",
  alphaNumeric: /^[\w\d]+$/,
  license: "^[\\w\\d]{25}$",
  vpnHexKey: "^[a-fA-F\\d]{64}$",
  vpnHexIV: "^[a-fA-F\\d]{32}$",
  vpnPassword: "^[A-Za-z0-9@#$%^&!+=]{8,16}$"
};
checkPatterns(patterns)
// var validator = require('validator');

// validator.isEmail('foo@bar.com'); //=> true

// const result = validator.isURL("https://emm-develop.pho`enix.mahsan.net/")
// console.log(result);

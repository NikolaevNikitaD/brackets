module.exports = function check(str, bracketsConfig) {
  bracketsConfig = bracketsConfig.map((pair) => pair.join("")).join("");
  let arr = [];
  console.log(str);
  for (let i = 0; i < str.length; i++) {
      if (
          str.charAt(i) ==
          bracketsConfig.charAt(bracketsConfig.indexOf(str.charAt(i)) + 1)
      )
          if (arr[arr.length - 1] == str.charAt(i)) arr.pop();
          else arr.push(str.charAt(i));
      else {
          if (bracketsConfig.indexOf(str.charAt(i)) % 2) {
              if (
                  bracketsConfig.charAt(
                      bracketsConfig.indexOf(str.charAt(i)) - 1
                  ) == arr[arr.length - 1]
              )
                  arr.pop();
              else return false;
          } else arr.push(str.charAt(i));
      }
  }

  return !arr.length;
};
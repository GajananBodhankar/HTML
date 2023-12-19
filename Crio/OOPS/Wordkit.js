class WordKit {
  reverse(str) {
    return str.split("").reverse().join("");
  }
  isPalindrome(str) {
    for (let i = 0; i < str.length / 2; i++) {
      if (str[i] != str[str.length - i - 1]) {
        return false;
      }
    }
    return true;
  }
  makePalindrome(str) {
    return str.concat(this.reverse(str));
  }
}

let j = new WordKit();
console.log(j.reverse("alpha"));
console.log(j.isPalindrome("alpha"));
console.log(j.makePalindrome("alpha"));

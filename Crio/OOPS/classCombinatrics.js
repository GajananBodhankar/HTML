class Combinatorics {
  factorial(num) {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
      fact *= i;
    }
    return fact;
  }
  validate(N, R) {
    return N > R;
  }
  findCombinations(N, R) {
    if (this.validate(N, R)) {
      return this.factorial(N) / (this.factorial(R) * this.factorial(N - R));
    }
    return 0;
  }
  findPermutations(N, R) {
    if (this.validate(N, R)) {
      return this.factorial(N) / this.factorial(N - R);
    }
    return 0;
  }
}

let j = new Combinatorics();
console.log(j.factorial());
console.log(j.findCombinations(10, 2));
console.log(j.findPermutations(10, 2));
module.exports = Combinatorics;

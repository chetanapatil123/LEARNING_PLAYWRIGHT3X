
let scores = [10, 20, 35, 45];
let grade = scores.map((score) => score > 70 ? "pass" : "fail");
console.log(grade);

let passingScores = scores.filter(score => score >= 70);

console.log(passingScores);
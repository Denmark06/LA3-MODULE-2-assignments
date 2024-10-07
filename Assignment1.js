const score = prompt("Enter your score:");
const scoreNum = parseInt(score);
let grade = scoreNum >= 97 ? "1.00" : scoreNum >= 94 ? "1.25" : scoreNum >= 91 ? "1.50" : scoreNum >= 88 ? "1.75" : scoreNum >= 85 ? "2.00" : scoreNum >= 82 ? "2.25" : scoreNum >= 79 ? "2.50" : scoreNum >= 76 ? "2.75" : scoreNum >= 75 ? "3.00" : scoreNum >= 72 ? "4.00" : "5.00";
let remarks;
if (scoreNum >= 90) {
  remarks = "HIGH PASS, Candidate for Cum Laude";
} else if (scoreNum >= 80) {
  remarks = "AVERAGE PASS";
} else if (scoreNum >= 75) {
  remarks = "LOW PASS";
} else {
  remarks = "FAILED, Needs Improvement";
}
console.log("Result:");
console.log(`Your equivalent Grade is "${grade}" ${grade === "1.00" || grade === "1.25" ? "Excellent" : grade === "1.50" || grade === "1.75" ? "Above Average" : grade === "2.00" || grade === "2.25" ? "Average" : grade === "2.50" || grade === "2.75" ? "Below Average" : grade === "3.00" ? "Below Average" : grade === "4.00" ? "Poor" : "Poor"}`);
console.log(`Final Remarks: ${remarks}`);

function gradeTest(score) {
    if (score > 100) {
        return "Score max is 100";
    } else if (score >= 50) {
        return "Pass";
    } else {
        return "Fail";
    }
}

console.log(gradeTest(0));
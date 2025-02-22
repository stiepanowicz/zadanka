const grades = [73, 67, 38, 33];

function gradingStudents(grades) {
    // Write your code here
    let findNextMultipleOfFive = function(grade) {
        let remainder = grade%5;
        if (remainder == 0) {
            return grade;
        } else {
            return grade + (5-remainder);
        }
    }
        const roundedGrades = grades.map((grade) => {
            let nextMultipleOfFive = findNextMultipleOfFive(grade);
            if (nextMultipleOfFive - grade < 3 && !(grade < 38)) {
                return nextMultipleOfFive;
            } else {
                return grade;
            }
    });
    return roundedGrades;
}

console.log(gradingStudents(grades));
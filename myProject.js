function gradingStudents(grades) {
    for (let i = 0; i < grades.length; i++) {
        if (((grades[i] % 5) == 4) || ((grades[i] % 5) == 3) && (grades[i] >= 38)) {
            grades[i] = grades[i] + (5 - (grades[i] % 5));
        }
    } return grades;
} console.log(gradingStudents(73));
console.log(gradingStudents(67));
console.log(gradingStudents(38));
console.log(gradingStudents(33));



// function gradingStudents(grades) {
//     // Write your code here
//       for (let i = 0; i < grades.length; i++) {
//         if (((grades[i] % 5) == 4) || ((grades[i] % 5) == 3) && (grades[i] >= 38)) {
//             grades[i] = grades[i] + (5 - (grades[i] % 5)); 
//         } return grades[i];
//     }
// } 
// console.log(gradingStudents(73))
function gradingStudents(grades) {
  let result = []

  for(let grade of grades) {
    // If the grade is less than 38, we don't want to modify its value
    if (grade < 38) {
      result.push(grade)
      continue
    } 
  
    /*
     * To get the next multiple of A from a number B
     * You need to use the remainder operator.
     *
     * In many languages, it is also called the modulus operatior.
     *
     * A % B divides A by B and returns the remainder of the operation.
     * This means that 16 % 5 == 1, because 16/5 is 3 remainder 1.
     *
     * When you get the remainder, you take it away from the multiplier, which in this case is 5
     *
     * 5 - 1 = 4. This means that 16 is 4 away from the next multiple of 5 which is 20.
     *
     */
    if ((5 - (grade % 5)) < 3) {
      let newGrade = grade + (5 - (grade % 5))
      result.push(newGrade)

      // Continue skips one iteration and goes to the next iteration
      // We need to continue to the next iteration because for this iteration we have found our result and don't need to go further
      continue
    }

    // This statement only runs if the ones above don't run
    result.push(grade)
  }

  return result
}

console.log(gradingStudents([73, 67, 40, 33]))

function findTopper(marks) {
    return Math.max(...marks);  // Spread operator
  }
  
  const studentMarks = [72, 88, 91, 67, 95, 84];
  const topper = findTopper(studentMarks);
  
  console.log(topper)
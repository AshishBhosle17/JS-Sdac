function filterPassStudents(marks) {
    return marks.filter(function(mark) {
      return mark >= 35; 
    });
  }
  
  const allMarks = [35, 67, 49, 82, 23, 90];
  const passedMarks = filterPassStudents(allMarks);
  
  console.log(passedMarks);
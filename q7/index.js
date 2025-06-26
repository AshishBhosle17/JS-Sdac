function Student (marks) {
    return marks.filter(function(mark){
        return mark>80;
    });

}

const totalMarks = [70, 80, 90, 99,100];
const filterMrks=Student(totalMarks);
console.log(filterMrks);

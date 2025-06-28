// filter
const score =[70, 80, 90, 100]
const qualifiedScore = score.filter((score)=> {
    if (score > 75){
        return score
    }

})
console.log(qualifiedScore);



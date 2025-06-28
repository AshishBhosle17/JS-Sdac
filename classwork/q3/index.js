const boostPlayerStats = function(score){
    
    return score.map((upcore)=>{
        return upcore+10
    })
    
}    
const arrScores = [10,20,30]
const updatedScore = boostPlayerStats(arrScores)
console.log (updatedScore);

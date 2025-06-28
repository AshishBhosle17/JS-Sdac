const calculatePerformanceLevel=(score) => {
    if (score >90) {
        return "Excellent";
    }
    else if (score >80) {
        return "good";
    }
     else {
        return "Average";
     }
}

console.log(calculatePerformanceLevel(92))
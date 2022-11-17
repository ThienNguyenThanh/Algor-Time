var generate = function(numRows) {
    var result = [];
    for(let idx = 0;idx<numRows;idx++){
        var row = Array(idx+1).fill(1)
        for(let j = 1;j<idx;j++){
            row[j] = result[idx-1][j-1] + result[idx-1][j]
        }
        result.push(row)
    }
    
    return result
};

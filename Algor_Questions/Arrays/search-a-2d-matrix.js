var searchMatrix = function(matrix, target) {
    var row = matrix.length;
    var col = matrix[0].length;
    var [start,end] = [0, row * col - 1]
    while(start != end){
        var mid = Math.floor((start + end -1) / 2)
        if(matrix[Math.floor(mid / col)][mid % col] < target){
            start = mid + 1;
        }else
            end = mid;
    }
    
    return matrix[Math.floor(end / col)][end % col] == target;
    
   
};

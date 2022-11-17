// Time: O(r+c) Space: O(c)
var matrixReshape = function(mat, r, c) {
    if(r*c == mat[0].length * mat.length){
        let flatArr = [];
        let result = [];
        let idx = 0;
        for(var row of mat){
            flatArr = flatArr.concat(row)
        }
        for(var row = 0;row < r;row++){
            result[row] = flatArr.splice(0,c);
        }
        return result;
    }else {return mat}
};


// Time: O(r.c)

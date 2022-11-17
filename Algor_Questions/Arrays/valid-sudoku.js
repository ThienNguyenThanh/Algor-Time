var isValidSudoku = function(board) {
    let myMap = new Map();
    for(let row=0;row < 9;row++){
        for(let col=0;col < 9;col++){
            if(board[row][col] != '.'){
                var number = board[row][col];
                if(myMap.has(`${number} added in row ${row}`) ||
                  myMap.has(`${number} added in column ${col}`) ||
                  myMap.has(`${number} added in block ${Math.floor(row/3)} and ${Math.floor(col/3)}`) ){
                  return false;
                }else{
                    myMap.set(`${number} added in row ${row}`) 
                    myMap.set(`${number} added in column ${col}`) 
                    myMap.set(`${number} added in block ${Math.floor(row/3)} and ${Math.floor(col/3)}`)
                }
            }
        }
    }
    
    return true
};

function doneOrNot(board) {
    
    let regions = [];
    for(let i = 0; i < 9; i += 3)
        for(let j = 0; j < 9; j += 3)
            regions.push(dropRegion3x3(i, j, board));
    
    let verticals = [];   
    for(let i = 0; i < 9; i++) {
        let column = [];
        for(let line of board)
            column.push(line[i]);
        verticals.push(column);
    }  
    return checkArrOnValid(board) && checkArrOnValid(regions) && checkArrOnValid(verticals) ? "Finished!" : "Try again!";
  }

  function dropRegion3x3(startY, startX, array) {
      let line = [];
      for(let i = startY; i < startY + 3; i++) 
          for(let j = startX; j < startX + 3; j++)
              line.push(array[i][j]);
      return line;
  }

  function checkArrOnValid(array) {
      for(let line of array)
          for(let k = 1; k <= 9; k++) 
              if(!line.includes(k))
                return false;
      return true;
  }


  console.log(doneOrNot([[5, 3, 4, 6, 7, 8, 9, 1, 2], 
                        [6, 7, 2, 1, 9, 5, 3, 4, 8],
                        [1, 9, 8, 3, 4, 2, 5, 6, 7],
                        [8, 5, 9, 7, 6, 1, 4, 2, 3],
                        [4, 2, 6, 8, 5, 3, 7, 9, 1],
                        [7, 1, 3, 9, 2, 4, 8, 5, 6],
                        [9, 6, 1, 5, 3, 7, 2, 8, 4],
                        [2, 8, 7, 4, 1, 9, 6, 3, 5],
                        [3, 4, 5, 2, 8, 6, 1, 7, 9]]));
const bubbleSort = input => {

  for (let i=0; i<input.length-1; i++){
    for (let j=i+1; j<input.length; j++){
      if (input[j] < input[i]) {
        let temp = input[i];
        input[i] = input[j];
        input[j] = temp;
      } 
    }
  }
  return input; 
}


function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i == 0){
      array[i] = "I am 1 strange loop."
    }
    else {
      array[i-1] = "I am ${i} strange loops."
    }
  }
}
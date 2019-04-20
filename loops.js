function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i == 0){
      array[i] = "I am 1 strange loop."
    }
    else {
      x = i-1
      array[x] = "I am ${i} strange loops."
    }
  }
}
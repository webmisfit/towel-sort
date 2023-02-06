
// You should implement your task here.

module.exports = function towelSort (matrix) {
  return matrix? matrix.map((x,i)=>i%2==0? x : x.reverse()).flat() : []
}

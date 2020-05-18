var rotate = function(matrix) {
  for (let layer = 0; layer < Math.floor(matrix.length / 2); layer++) {
    for (let rotate = layer; rotate < matrix.length - 1 - layer; rotate++) {
      let temp = matrix[layer][rotate]
      matrix[layer][rotate] = matrix[matrix.length - 1 - rotate][layer]
      matrix[matrix.length - 1 - rotate][layer] = matrix[matrix.length - 1 - layer][matrix.length - 1 - rotate]
      matrix[matrix.length - 1 - layer][matrix.length - 1 - rotate] = matrix[rotate][matrix.length - 1 - layer]
      matrix[rotate][matrix.length - 1 - layer] = temp
    }
  }
};

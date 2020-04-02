const { Graph } = require('../graph/graph.js');

Graph.prototype.hasLink = function(nodes) {
  // for each node we get the neightbors and see if any of them are any of the nodes in the input array
  // this.getNeightbors(node) returns a map
  let output = [true, 0]
  for (let i = 0; i < nodes.length - 1; i++) {
    let neighbors = this.getNeighbor(nodes[i])
    output[1] += this.nodes.get(nodes[i]).get(nodes[i+1])
    if (!neighbors.has(nodes[i + 1])) {
      output = [false, 0];
      break
    }
  }
  return output
}

module.exports = { Graph };

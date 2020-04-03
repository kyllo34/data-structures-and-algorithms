const { Graph } = require("../getEdge/get-edge");

Graph.prototype.depthFirst = function(current, visited = new Set()) {
  if (!this.nodes.has(current)) {
    return null
  }
  visited.add(current);
  let neighbors = this.getNeighbor(current);
  for (let node of neighbors.keys()) {
    if (!visited.has(node)) {
      this.depthFirst(node, visited);
    }
  }
  return visited;
};

module.exports = { Graph };

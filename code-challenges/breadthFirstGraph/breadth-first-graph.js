const { Graph } = require('../graph/graph.js');

Graph.prototype.breadthFirst = function(root) {
  const visited = new Set();
  const queue = [];
  let current = root;
  queue.push(current);
  visited.add(current);
  while (queue[0]) {
    current = queue.shift();
    if (this.nodes.get(current).size) {
      for (let node of this.nodes.get(current).keys()) {
        if (!visited.has(node)) {
          queue.push(node);
          visited.add(current);
        }
      }
    }
  }
  return visited;
};

module.exports = { Graph };

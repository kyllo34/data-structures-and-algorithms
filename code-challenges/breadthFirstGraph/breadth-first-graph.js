const { Graph } = require('../graph/graph.js')

Graph.prototype.breadthFirst = function (noodle) {
  const visited = new Set()
  const queue = []
  let current = noodle
  queue.push(current)
  while(queue[0]) {
    current = queue.shift()
    visited.add(current)
    if(this.nodes.get(current).size) {
      for (let node of this.nodes.get(current).keys()) {
        if(!visited.has(node)) {
          queue.push(node)
        }
      }
    }
  }
  return visited
}

module.exports = { Graph }

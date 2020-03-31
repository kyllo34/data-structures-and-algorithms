class Node {
  constructor(value) {
    this.value = value
  }
}

class Graph {
  constructor () {
    // Need to hold all of the graphs nodes in a hashMap
    this.nodes = new Map();
  }

  // adds a new node to the graph
  addNode(node) {
    // if the graph already contains this node
    if(this.nodes.has(node)) {
      // return the node
      return this.nodes.get(node)
    } else {
      // add node to the nodes map
      this.nodes.set(node, new Map())
      // return the new node
      return node;
    }
  }
  // adds a new edge between two nodes in the graph
  addEdge(node1, node2, weight) {
    // if no values are passed in, return null
    if (!node1 || !node2 || !weight) return null
    // if this input nodes exist in the graph
    if (this.nodes.has(node1) && this.nodes.has(node2)) {
      // retrieve all edges for node 1
      let oldEdges1 = this.nodes.get(node1)
      // add node 2 withe weight to edges list
      oldEdges1.set(node2, weight)
      // set node 1 to point to node 2 with weight
      this.nodes.set(node1, oldEdges1)
      let oldEdges2 = this.nodes.get(node2)
      oldEdges2.set(node1, weight)
      this.nodes.set(node2, oldEdges2)
      
    }
  }

  // Returns all of the nodes in the graph as a collection
  getNodes() {
    return this.nodes
  }
  //returns all the neightbors/edges of the input node
  getNeighbor(node) {
    return this.nodes.get(node)
  }
  // Returns the total number of nodes in the graph
  size() {
    return this.nodes.size
  }

}

module.exports = { Graph, Node }

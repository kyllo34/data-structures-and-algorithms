class Node {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(node1, node2, weight) {
    this.node1 = node1;
    this.nod2 = node2;
    this.weight = weight
  }
}

class Graph {
  constructor () {
    // Need to hold all of the graphs nodes in a hashMap
    this.nodes = new Map();

  }
  // adds a new node to the graph
  addNode(value) {
    // if the graph already contains this value
    if(this.nodes.has(value)) {
      // return the node with that value
      return this.nodes.get(value)
    } else {
      // else create the new node
      const node = new Node(value)
      // add node to the nodes map
      this.nodes.set(value, node)
      // return the new node
      return node
    }
  }
  // adds a new edge between two nodes in the graph
  addEdge(node1, node2, weight) {
    // if no values are passed in, return null
    if (!node1 || !node2 || !weight) return null
    // if this input nodes exist in the graph
    if (this.nodes.has(node1) && this.nodes.has(node2)) {
      this.nodes.set(node1, [this.nodes.get(node1)])
    }
  }

}

module.exports = { Graph }

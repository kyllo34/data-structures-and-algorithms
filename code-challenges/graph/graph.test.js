const { Graph, Node } = require('./graph')

describe('Graph', () => {
  describe('addNode()', () => {
    it('Adds a new node to the graph with the input value.', () => {
      const graph = new Graph()
      const node = graph.addNode(3)
      expect(graph.nodes.has(node)).toBe(true)
    })
  })
  describe('addEdge()', () => {
    it('Adds an edge between 2 nodes with a weight.', () => {
      const graph = new Graph()
      const node1 = graph.addNode(3)
      const node2 = graph.addNode(8)
      graph.addEdge(node1, node2, 18)
      expect(graph.nodes.get(node1)).toStrictEqual(new Map([[node2, 18]]))
      expect(graph.nodes.get(node2)).toStrictEqual(new Map([[node1, 18]]))
    })
  })
  describe('getNodes()', () => {
    it('Returns all of the nodes in the graph as a collection.', () => {
      const graph = new Graph()
      const node1 = graph.addNode(3)
      const node2 = graph.addNode(8)
      expect(graph.getNodes()).toStrictEqual(new Map([[node1, new Map()], [node2, new Map()]]))
    })
  })
  describe('getNeighbors()', () => {
    it('Returns a collection of edges connected to the given node', () => {
      const graph = new Graph()
      const node1 = graph.addNode(3)
      const node2 = graph.addNode(8)
      const node3 = graph.addNode(37)
      graph.addEdge(node1, node2, 18)
      graph.addEdge(node1, node3, 27)
      expect(graph.getNeighbor(3)).toStrictEqual(new Map([[8, 18],[37, 27]]))
    })
  })
  describe('size()', () => {
    xit('Returns the total number of nodes in the graph.', () => {
      const graph = new Graph()
      graph.addNode(3)
      graph.addNode(8)
      graph.addNode(37)
      expect(graph.size()).toStrictEqual(3)
    })
  })
})



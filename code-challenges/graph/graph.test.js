const { Graph } = require('./graph')

describe('Graph', () => {
  describe('addNode()', () => {
    it('Adds a new node to the graph with the input value.', () => {
      const graph = new Graph()
      graph.addNode(3)
      expect(graph.nodes.has(3)).toBe(true)
    })
    it('Returns the newly added node.', () => {
      const graph = new Graph()
      expect(graph.addNode(3)).toStrictEqual(3)
    })
  })
  describe('addEdge()', () => {
    it('Adds an edge between 2 nodes with a weight.', () => {
      const graph = new Graph()
      graph.addNode(3)
      graph.addNode(8)
      graph.addEdge(3, 8, 18)
      expect(graph.nodes.get(3)).toStrictEqual(new Map([[8, 18]]))
      expect(graph.nodes.get(8)).toStrictEqual(new Map([[3, 18]]))
    })
  })
  describe('getNodes()', () => {
    it('Returns all of the nodes in the graph as a collection.', () => {
      const graph = new Graph()
      graph.addNode(3)
      graph.addNode(8)
      graph.addEdge(3, 8, 18)
      expect(graph.getNodes()).toStrictEqual(new Map([[3, new Map([[8, 18]])], [8, new Map([[3, 18]])]]))
    })
  })
  describe('getNeighbors()', () => {
    it('Returns a collection of edges connected to the given node', () => {
      const graph = new Graph()
      graph.addNode(3)
      graph.addNode(8)
      graph.addNode(37)
      graph.addEdge(3, 8, 18)
      graph.addEdge(3,37, 27)
      expect(graph.getNeighbor(3)).toStrictEqual(new Map([[8, 18],[37, 27]]))
    })
  })
  describe('size()', () => {
    it('Returns the total number of nodes in the graph.', () => {
      const graph = new Graph()
      graph.addNode(3)
      graph.addNode(8)
      graph.addNode(37)
      expect(graph.size()).toStrictEqual(3)
    })
  })
})



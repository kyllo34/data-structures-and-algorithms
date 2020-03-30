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
      expect(graph.addNode(3).value).toStrictEqual(3)
    })
  })
})



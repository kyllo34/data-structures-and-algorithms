const { Graph } = require('./breadth-first-graph')

describe('breadthFirst()', () => {
  it('Return a collection of nodes in the order they were visited given an input node', () => {
    const graph = new Graph()
    const nodeA = graph.addNode('a')
    const nodeB = graph.addNode('b')
    const nodeC = graph.addNode('c')
    const nodeD = graph.addNode('d')
    const nodeE = graph.addNode('e')
    const nodeF = graph.addNode('f')
    graph.addEdge(nodeA, nodeB, 1)
    graph.addEdge(nodeB, nodeC, 1)
    graph.addEdge(nodeB, nodeD, 1)
    graph.addEdge(nodeC, nodeE, 1)
    graph.addEdge(nodeC, nodeF, 1)
    graph.addEdge(nodeD, nodeF, 1)
    expect(graph.breadthFirst(nodeA)).toEqual(new Set([nodeA, nodeB, nodeC, nodeD, nodeE, nodeF]))
  })
})

class Node {
  constructor(value = null, left = null, right = null)  {  
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
class Tree {
  constructor(root = null) {
    this.root = root;
  }
}
////////////
//////////////
function ifATreeFallsInTheWoods(tree1, tree2) {
  const allMap = new Map()
  const collisionsMap = new Map()
  preOrder(tree1.root, allMap, collisionsMap)
  preOrder(tree2.root, allMap, collisionsMap)
  return [...collisionsMap.keys()];
}
function preOrder(current, allMap, collisionsMap) {
  // console.log(current)
  if (!current) return
  //if the map already has the value, add the value to the collisions map. 
  if (allMap.has(current.value)) {
    collisionsMap.set(current.value, true)
    //otherwise add it to the allMap
  } else {
    allMap.set(current.value, true)
  }
  //traverse. 
  if (current.left) {
    preOrder(current.left, allMap, collisionsMap);
  }
  if (current.right) {
    preOrder(current.right, allMap, collisionsMap);
  }
}



describe('ifATreeFallsInTheWoods()', () => {
  it('Returns an array of values contained in both trees', () => {
    const tree1 = new Tree(new Node(150, new Node(100, new Node(75), new Node(160, new Node(125), new Node(175))), new Node(250, new Node(200), new Node(350, new Node(300), new Node(500)))));
    const tree2 = new Tree(new Node(42, new Node(100, new Node(15), new Node(160, new Node(125), new Node(175))), new Node(600, new Node(200), new Node(350, new Node(4), new Node(500)))));
    expect(ifATreeFallsInTheWoods(tree1, tree2)).toStrictEqual([100,160,125,175,200,350,500])
  })
  it('Returns an empty array when one or both trees are null.', () => {
    expect(ifATreeFallsInTheWoods(new Tree(new Node(50)), new Tree())).toStrictEqual([])
    expect(ifATreeFallsInTheWoods(new Tree(), new Tree())).toStrictEqual([])
  })
})


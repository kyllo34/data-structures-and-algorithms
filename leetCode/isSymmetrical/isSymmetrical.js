var isSymmetric = function(root) {
  return isSymmetricalHelper(root, root);
};

var isSymmetricalHelper = function(leftNode, rightNode) {
  if (!leftNode && !rightNode) return true;
  if (!leftNode || !rightNode) return false;
  if (leftNode.val !== rightNode.val) return false;
  return isSymmetricalHelper(rightNode.right, leftNode.left)
      && isSymmetricalHelper(rightNode.left, leftNode.right);
};
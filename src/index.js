export default function () {
  return {
    visitor: {
      VariableDeclaration: function (path, file) {
        let declar = path.get('declarations').find(function(declar) {
          return declar.node.id.name === '_.extends';
        });
        if (declar) {
          path.remove();
        }
      },
      CallExpression: function (path, file) {
        let callee = path.get('callee');
        if (callee.type === 'Identifier' && callee.node.name === '_extends') {
          callee.node.name = '_.extends';
        }
      }
    }
  };
};

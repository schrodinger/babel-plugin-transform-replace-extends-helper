'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return {
    visitor: {
      VariableDeclaration: function VariableDeclaration(path, file) {
        var declar = path.get('declarations').find(function (declar) {
          return declar.node.id.name === '_.extend';
        });
        if (declar) {
          path.remove();
        }
      },
      CallExpression: function CallExpression(path, file) {
        var callee = path.get('callee');
        if (callee.type === 'Identifier' && callee.node.name === '_extends') {
          callee.node.name = '_.extend';
        }
      }
    }
  };
};

;
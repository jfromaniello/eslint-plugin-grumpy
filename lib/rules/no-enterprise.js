"use strict";

const forbiddenNames = [
  'repository',
  'factory',
  'service',
  'facade',
  'viewmodel',
];

const relevantParents = [
  'VariableDeclarator',
  'FunctionDeclaration',
  'ClassDeclaration',
  'Property',
];

module.exports = {
  meta: {
    docs: {
      description: "prevent naming things with enterprisy patterns",
      category: "Naming Conventions",
      recommended: true,
    },
    fixable: "code",
    messages: {
      avoidName: "Avoid naming things with '{{ name }}'"
    },
    schema: []
  },
  create: function(context) {
    return {
      Identifier(node) {
        if (!node.parent ||
            !relevantParents.includes(node.parent.type)) {
          return;
        }

        forbiddenNames
        .filter(fn => node.name.toLowerCase().includes(fn))
        .forEach(fn => {
            context.report({
              node,
              messageId: "avoidName",
              data: { name: fn, },
              fix: fixer => fixer.replaceText(new RegExp(fn, 'i'), '')
            });
          });
      }
    };
  }
};

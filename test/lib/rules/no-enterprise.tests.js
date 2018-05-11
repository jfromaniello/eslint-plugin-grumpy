const noEnterprise = require('../../../lib/rules/no-enterprise')
const assert = require('chai').assert;

describe('no-enterprise', function() {

  ['Repository', 'Facade', 'Service'].forEach(nn => {
    it(`should fail on node with names containing ${nn}`, function() {
      const fakeNode = {
        name: `Person${nn}`,
        parent: {
          type: 'ClassDeclaration'
        }
      };

      noEnterprise.create({ report: (rep) => {
        assert.strictEqual(rep.node, fakeNode);
        assert.strictEqual(rep.messageId, 'avoidName');
        assert.strictEqual(rep.data.name, nn.toLowerCase());
      }}).Identifier(fakeNode);
    });
  });

});

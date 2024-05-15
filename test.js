const assert = require('assert');
const app = require('./app');

describe('App', () => {
	  it('should return "Hello, World!"', () => {
		      assert.strictEqual(app(), 'Hello, World!\n');
		    });
});


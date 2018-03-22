// Setup module search paths to root. Makes it possible to require modules relative to project root
const rootPath = process.env.NODE_PATH = process.cwd() + '/src/'; // eslint-disable-line
require('module').Module._initPaths();

// const mockRequire = require('mock-require');
// mockRequire('node-cache', 'test/mock/lib/node-cache');

const chai = require('chai');
chai.use(require('chai-as-promised'));
chai.use(require('sinon-chai'));
chai.should();

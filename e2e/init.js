import detox from 'detox';
import config from '../detox.config.js';
import adapter from 'detox/runners/jest/adapter';

beforeAll(async () => {
  await detox.init(config);
}, 300000);

beforeEach(async () => {
  await adapter.beforeEach();
});

afterAll(async () => {
  await detox.cleanup();
});

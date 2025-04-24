jest.setTimeout(120000); 

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp({ delete: true, newInstance: true });
  });

  it('should have title', async () => {
    await expect(element(by.text('Hacker News'))).toBeVisible();
  });

  it('should have search', async () => {
    await expect(element(by.text('Search...'))).toBeVisible();
  });

  it('should have scores', async () => {
    await new Promise(resolve => setTimeout(resolve, 8000));
    await expect(element(by.text('scores'))).toBeVisible();
  });

  it('should show world screen after tap', async () => {
    await element(by.id('link_button_1')).tap();
  });
});

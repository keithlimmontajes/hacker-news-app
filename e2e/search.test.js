describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp({delete: true, newInstance: true});
  });

  it('should have title', async () => {
    await expect(element(by.text('Hacker News'))).toBeVisible();
  });

  it('should have search', async () => {
    await expect(element(by.text('Search...'))).toBeVisible();
  });

  it('input search value', async () => {
    await element(by.id('search_input')).tap();
    await element(by.id('search_input')).typeText('JoJo');
    await element(by.id('go_button')).tap();
  });
});

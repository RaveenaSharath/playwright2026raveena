const {test, expect} = require('@playwright/test');

test('webpage loads successfully', async ({ page }) => 
	{
	await page.goto('http://example.com');
	expect(await page.title()).toBe('Example Domain');
});
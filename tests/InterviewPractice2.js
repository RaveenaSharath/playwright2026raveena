const{test, expect} = require('@playwright/test')

test('interview practice part 2', async ({page})=>
{
    await page.on('dialog', async dialog=>
    {
        dialog.message('accept the invite');
        dialog.accept();
        dialog.dismiss();

    })

    await page.getByLabel('select the option').selectOption('product');

    await page.screenshot({path: 'c:/download'});

    await page.setInputFiles(['pdf', 'wrd'])

    const download = await page.waitForEvent('download')
    await page.getByLabel('downloadlink').click();
    const newfile = new download
    await newfile.saveAs('pdf');

    const newpagePromise = await page.waitForEvent('page')
    await page.getByLabel('newpagelink').click();
    const newPage = new newpagePromise;
    await page.waitForLoadState()

    await page.context().storageState({path: 'auth.json'})
    use:
    {
        storageState: 'auth.json';
    }



})
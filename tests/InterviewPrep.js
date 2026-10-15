const {test, expect} = require('@playwright/test')

test('interview practice', ({page})=>
{
 await page.context().storageState({path: 'auth.json'});
 use:
 {
    storageState = 'auth.json'
 }
page.on('dialog', dialog=> {
    await dialog.accept();

    await page.getByLabel('inputfiles').setInputFiles(['pdf', 'wrd'])

    //download

    const newDownloadTab = waitForEvent()
    await page.getByLabel('download').click()
    const download = new newDownloadTab
    download.saveAs('pdf')


    await page.on('dialog', dialog=>{
        await dialog.accept()
    })

    const response = await request.get('/users');
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.id)

    await page.getByLabel("files").setInputFiles('pdf')

    await page.screenshot({path: 'c:/programfiles/downloads'})
     await page.screenshot({path: 'c:/Downloads'})

     await page.setInputFiles('input[type=file]', [])


    const downloadNewFile = await page.waitForEvent("download");
    await page.getByLabel("downloadLink").click()
    const newFile = new downloadNewFile
    await newFile.saveAs('donload,pdf');

    const newPagePromise = await page.waitForEvent('page');
    await page.locator('#newpage').click();
    const newPage = new newPagePromise;
    await newPage.waitForloadState();

    await page.locator('.Options').selectOption({value: '1'})

    await page.on('dialog', async dialog => 
    {
        dialog.message('acccept the dialog');
        dialog.accept()
        dialog.dismiss();

    };

    const popup = page.locator("#popup");

    if(await popup.isVisible())
    {
        await popup.locator("#close").click();
    }

    const [newPage] = await promise.all([
        context.waitforEvent('page'),
        await page.locator('open page').click();
        
    ])
    newPage.waitForloadState();
    await page.locator('uploadfile').setInputfiles(['pdf','wrd'])
    await page.screenshot({path: 'c:/local'})
})
}
)
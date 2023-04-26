const {chromium} = require('playwright-chromium');
const {expect} = require('chai');

let browser, page;

describe('E2E tests', async function(){
    this.timeout(10000);
    
    before(async () => {browser = await chromium.launch(); });
    after (async () => { await browser.close();});
    beforeEach(async () => {page = await browser.newPage();});
    afterEach(async () => {await page.close();});

    it('make screenshot', async () => {
        await page.goto('https://abv.bg');
        await page.click('a >> text = Забравена парола')
        await page.screenshot({path: 'test.png'});
        expect(1).to.equal(1);
    })
})
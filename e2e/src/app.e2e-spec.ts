import { AppPage } from './app.po';
import { browser, by, logging, element } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it(`should have the page title as 'Angular Exercise'`,() => {
    page.navigateTo();
    expect(browser.getTitle()).toBe('Angular Exercise');
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Angular Exercise');
  }); 

  it('should have at least one table to display transactions', () => {
    page.navigateTo();
    const tables = element.all(by.css('table'));
    expect(tables.count()).toBeGreaterThanOrEqual(1);
  })
  
  afterEach(async () => {
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});

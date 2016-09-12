import { SamplePage } from './app.po';

describe('sample App', function() {
  let page: SamplePage;

  beforeEach(() => {
    page = new SamplePage();
  });

  it('should fail, but does not', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Some text not in my app!');
  });
});

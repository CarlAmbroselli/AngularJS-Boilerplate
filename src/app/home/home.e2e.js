describe('homepage', function() {

    beforeEach(function() {
        browser.get('#/home')
    })

    it('should have a title', function() {
        expect(browser.getTitle()).toEqual('Home | ngBoilerplate')
    })
})
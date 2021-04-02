const selectors = require('../../data/select');

describe('Required fields and story created', function () {

    before('Open App', function () {
        browser.url('');
    });

    it('TC-027 Submit button is enabled after fields 1-4 are filled in with valid values',() => {
        $(selectors.nameField).setValue('LadyBoy010');
        $(selectors.sheButton).click();
        $(selectors.ageField).setValue('1234567890');
        $(selectors.storyDDField).click();
        $$(selectors.storyList)[6].click();
        let submitBtn = $(selectors.submitButton).isEnabled();
        expect(submitBtn).toEqual(true);
    });

    it('TC-028 Submit button is enabled after fields 1-4 are filled in with valid values',() => {
        browser.refresh();
        $(selectors.nameField).setValue('LadyBoy010');
        $(selectors.sheButton).click();
        $(selectors.ageField).setValue('1234567890');
        $(selectors.storyDDField).click();
        $$(selectors.storyList)[6].click();
        $(selectors.submitButton).click();
        let tryAgain = $(selectors.tryAgainBtn).isDisplayed();
        expect(tryAgain).toEqual(true);
    });
});



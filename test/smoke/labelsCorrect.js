const selectors = require('../../data/select');
const expctd = require('../../data/expected.json');

describe('Labels are correct', function () {

        before('Open App',function () {
            browser.url('');
        });

        it('TC-016 Header = My little Hero', function () {
            let mlhHdr = $(selectors.header).getText();
            expect(mlhHdr).toEqual(expctd.header);
        });
        it('TC-017 instruction = "Let\'s create your own HERO! It\'s ' +
            'super easy with our application!', function () {
            let instrct = $(selectors.instr).getText();
            expect(instrct).toEqual(expctd.instruction);
        });
        it('TC-018 Name field label = "1.What is your HERO\'s name?"', function () {
            let NameFLbl = $(selectors.nameFieldLabel).getText();
            expect(NameFLbl).toEqual(expctd.name);
        });
        it('TC-019 Gender field label = "2.Please choose a gender"', function () {
            let gndrFLbl = $(selectors.genderFieldLabel).getText();
            expect(gndrFLbl).toEqual(expctd.gender);
        });
        it('TC-020 The first button label = "he"', function () {
            let gndrFLbl = $$(selectors.radioButtonsList)[0].getText();
            expect(gndrFLbl).toEqual(expctd.male);
        });
        it('TC-021 The first button label = "she"', function () {
            let gndrFLbl = $$(selectors.radioButtonsList)[1].getText();
            expect(gndrFLbl).toEqual(expctd.female);
        });
        it('TC-022 The first button label = "it"', function () {
            let gndrFLbl = $$(selectors.radioButtonsList)[2].getText();
            expect(gndrFLbl).toEqual(expctd.creature);
        });
        it('TC-023 Hero\'s age field label = "3.How old is your hero?"', function () {
            let storyLbl = $(selectors.ageFieldLabel).getText();
            expect(storyLbl).toEqual(expctd.age);
        });

        it('TC-024 Type of the story field label = "4. What type of story would you like to read?"', function () {
            let storyLbl = $(selectors.storyTypeLabel).getText();
            expect(storyLbl).toEqual(expctd.storyType);
        });

        it('TC-025 Image field label = "5.Upload an image (optional)"', function () {
            let imgLbl = $(selectors.imageFieldLabel).getText();
            expect(imgLbl).toEqual(expctd.imageFieldLabel);
        });
        it('TC-026 Submit button label = "Create!" ', function () {
            let imgLbl = $(selectors.submitButtonLabel).getText();
            expect(imgLbl).toEqual(expctd.submitText);
        });

});



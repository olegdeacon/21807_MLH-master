const selectors = require('../../data/select');
const expctd = require('../../data/expected.json');

describe('My Little Hero', function () { //define suite title by passing a string

    describe('Getting to the page', function () { //define sub-suite title by passing a string

        before('Open App',function () {
            browser.url(''); //open baseUrl 93line wdio.config
        });

        it('TC-001 Title is MLH trial ', function () { //define test title by passing a string

            let title = browser.getTitle(); //get page title and assign it to the "title" variable
            //browser.pause(2000); //just pause to visually see that something is happening on the page
            expect(title).toEqual(expctd.title); //compare {title} (actual) and "MLH trial" (expected)
        });

    });

    describe('Getting to the page', function () { //define sub-suite title by passing a string

        it('TC-002 Header is present ', function () { //define test title by passing a string
            let header = $(selectors.header).isDisplayed(); //get header 'My little hero'
            expect(header).toEqual(true); //compare {title} (actual) and "MLH trial" (expected)
        });

        it('TC-003 Instruction is present', function () { //define test title by passing a string
            let instr = $(selectors.instr).isDisplayed(); //get instructions  'Let's create your own HERO!
            expect(instr).toEqual(true); //compare {title} (actual) and "MLH trial" (expected)
        });

        it('TC-004 Name field is present', function () { //define test title by passing a string
            let nameFld = $(selectors.nameField).isDisplayed(); //get instructions  '1. What is your HERO's name?'
            expect(nameFld).toEqual(true); //compare {title} (actual) and "MLH trial" (expected)
        });

        it('TC-005 Name label is present', function () { //define test title by passing a string
            let heroName = $(selectors.nameFieldLabel).isDisplayed(); //get instructions  '1. What is your HERO's name?'
            expect(heroName).toEqual(true); //compare {title} (actual) and "MLH trial" (expected)
        });

        it('TC-006 Gender  field label is present', function () { //define test title by passing a string
            let genField = $(selectors.genderFieldLabel).isDisplayed(); //get instructions  '1. What is your HERO's name?'
            expect(genField).toEqual(true); //compare {title} (actual) and "MLH trial" (expected)
        });

        it('TC-007.1 gender Radio button 1 is present', function () {
            let btnHe = $$(selectors.radioButtonsList)[0].isDisplayed();
            expect(btnHe).toEqual(true);
        });
        it('TC-007.2 gender Radio button 2 is present', function () {
            let btnShe = $$(selectors.radioButtonsList)[1].isDisplayed();
            expect(btnShe).toEqual(true);
        });
        it('TC-007.3 gender Radio button 3 is present', function () {
            let bthIt = $$(selectors.radioButtonsList)[2].isDisplayed();
            expect(bthIt).toEqual(true);
        });

         it('TC-008 Age field label is present', function () {
            let ageFldLbl = $(selectors.ageFieldLabel).isDisplayed();
            expect(ageFldLbl).toEqual(true);
        });

        it('TC-009 Age field is present', function () {
            let ageField = $(selectors.ageField).isDisplayed();
            expect(ageField).toEqual(true);
        });
        it('TC-010 Story Type label is present', function () {
            let stpeLbl = $(selectors.storyTypeLabel).isDisplayed();
            expect(stpeLbl).toEqual(true);
        });
        it('TC-011 Story Type ddfield is present', function () {
            let stpeFld = $(selectors.storyDDField).isDisplayed();
            expect(stpeFld).toEqual(true);
        });

        it('TC-012 Image field is present', function () {
            let imgFldLbl = $(selectors.imageField).isDisplayed();
            expect(imgFldLbl).toEqual(true);
        });

        it('TC-013 Image field label is present', function () {
            let imgFld = $(selectors.imageFieldLabel).isDisplayed();
            expect(imgFld).toEqual(true);
        });
        it('TC-014 Submit button label is present', function () {
            let sbmtBtnLbl = $(selectors.submitButtonLabel).isDisplayed();
            expect(sbmtBtnLbl).toEqual(true);
        });

        it('TC-015 Submit button is present', function () {
            let sbmtBtn = $(selectors.submitButton).isDisplayed();
            expect(sbmtBtn).toEqual(true);
        });

    });
});


const selectors = require('../../data/select');
const expected = require('../../data/expected.json');
const inpData = require('../../data/inputData')

describe('Name field positive test cases', function () {

    before('Open App', function () {
        browser.url('');
    });

    it('TC-0028 Name Field placeholder = "Hero\'s name"', () => {

        let plcehldrText = $(selectors.nameField).getAttribute('placeholder');
        expect(plcehldrText).toEqual(expected.namePlaceholder);
    });

    it( 'TC-0029 Name Field accept 70 symbols', () => {

        let def = function () {
            let alpbt = "abcdefghijklmnopqrstuvwxyz";
            let res = '';
            let charLength = alpbt.length;
            for (let i = 0; i < 70; i++) {
                res += alpbt.charAt(Math.floor(Math.random() * charLength))
            }
            return res;
        }

        $(selectors.nameField).setValue(def());
        let isDisp = $(selectors.nameErrAlert).isDisplayed();
        expect(isDisp).toEqual(false);
        browser.refresh();

    });

    it( 'TC-0030 Name Field accept letters', () => {

        $(selectors.nameField).setValue(inpData.lettersMix);
        browser.pause(2000)
        let isErr = $(selectors.nameErrAlert).isDisplayed();
        expect(isErr).toEqual(false);
        browser.refresh();
    })

    it( 'TC-0031 Name Field accepts Lower case ', () => {
        $(selectors.nameField).setValue(inpData.lettersLow);
        browser.pause(2000)
        let isErr = $(selectors.nameErrAlert).isDisplayed();
        expect(isErr).toEqual(false);
        browser.refresh();
    })

    it( 'TC-0032 Name Field accepts Upper case letters', () => {
        $(selectors.nameField).setValue(inpData.lettersUpper);
        let isErr = $(selectors.nameErrAlert).isDisplayed();
        expect(isErr).toEqual(false);
        browser.refresh();
    })

    it( 'TC-0033 Name Field accepts digits', () => {
        $(selectors.nameField).setValue(inpData.digits);
        let isErr = $(selectors.nameErrAlert).isDisplayed();
        expect(isErr).toEqual(false);
        browser.refresh();
    })
    it( 'TC-0034 Name Field accepts special characters', () => {
        $(selectors.nameField).setValue(inpData.spChar);
        let isErr = $(selectors.nameErrAlert).isDisplayed();
        expect(isErr).toEqual(false);
        browser.refresh();
    })

    it( 'TC-0035 Name Field accepts letters with spaces', () => {
        $(selectors.nameField).setValue(inpData.lettersSpaces);
        let isErr = $(selectors.nameErrAlert).isDisplayed();
        expect(isErr).toEqual(false);
        browser.refresh();
    })
    it( 'TC-0035 Name Field support cope paste functionality', () => {
        browser.url('https://www.google.com/');
        let gInput = $(selectors.googleField)
        gInput.setValue("Text");
        browser.keys(['Shift','Left arrow','Left arrow','Left arrow','Left arrow', 'Left arrow','Left arrow','NULL']);
        browser.keys(['Command','x','NULL'])
        browser.url('');
        $(selectors.nameField).click();
        browser.keys(['Command','v','NULL']);
        browser.pause(2000);
        })

});


// browser.execute(() => {
//     localStorage.clear();
//     sessionStorage.clear();
// });


// afterEach( () => {
//     browser.execute('window.localStorage.clear()');
// });


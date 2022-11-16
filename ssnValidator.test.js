//import { validateSSN } from '../src/ssn-validator';
const ssnValidate = require('./ssnValidator.js')
describe("SSN Validator", () => {

    it("should return true if has 9 digits", () => {
        expect(ssnValidate("680-13-2441")).toBeTruthy();
    });

    it("should return false if has less than 9 digits", () => {
        expect(ssnValidate("680-13-244")).toBeFalsy();
    });

    it("should return false if has more than 9 digits", () => {
        expect(ssnValidate("680-13-244445")).toBeFalsy();
    });

    it("should return false if has less than 2 hyphens", () => {
        expect(ssnValidate("680132441")).toBeFalsy();
    });

    it("should return false if has more than 2 hyphens", () => {
        expect(ssnValidate("680-13-24-41")).toBeFalsy();
    });

    it("should return false if starts with hyphens", () => {
        expect(ssnValidate("-68013-2441")).toBeFalsy();
    })
});
import { fetchAnalysis } from "../src/client/js/formHandler";

describe("Testing the request functionality", () => {
    test("Testing the fetchAnalysis() function", () => {
           expect(fetchAnalysis()).toBeDefined();
})});
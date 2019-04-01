var NsFoursquareApi = require("nativescript-ns-foursquare-api").NsFoursquareApi;
var nsFoursquareApi = new NsFoursquareApi();

describe("greet function", function() {
    it("exists", function() {
        expect(nsFoursquareApi.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(nsFoursquareApi.greet()).toEqual("Hello, NS");
    });
});
const expect = require("chai").expect;
const assert = require("chai").assert;
const Track = require("./../../models/track");

describe("track", function(){
  describe("milliseconds", function(){
    it("should return error if millisecond is not a number.", async function(){
      try {
        let track = new Track({ milliseconds: "abc" });
        await track.validate();
      }
      catch (error) {
        expect(error.errors[0].message).to.equal("Milliseconds must be number.");
      }
    });

    it("should pass if millisecond is a number.", async function(){
        let track = new Track({milliseconds:10});
        return assert.isNumber(track.milliseconds);
    });
  });
});
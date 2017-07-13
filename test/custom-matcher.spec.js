var toBeTen = function () {
  return {
    compare: function (actual, expected) {
      return {
        pass: actual == 10
      };
    }
  };
}

beforeEach(function () {
  jasmine.addMatchers({
    toBeTen: toBeTen
  });
});

describe("Custom matcher: toBeTen", function() {
  it("is available on an expectation", function() {
    expect(10).toBeTen();
  });

  it("can be negated", function() {
    expect(11).not.toBeTen();
  });
});
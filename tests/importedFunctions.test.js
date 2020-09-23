const { execSync } = require("child_process");

describe("importedFunctions", () => {
  it("returns the accepted data", () => {
    const data = execSync(
      "netlify functions:invoke --name importedFunction --identity"
    ).toString();

    const parsedData = JSON.parse(data);
    expect(parsedData.message).toBe("This is a test function");
  });
});

const { execSync } = require("child_process");

describe("envVariables", () => {
  it("returns the accepted data", () => {
    const data = execSync(
      "netlify functions:invoke --name envVariables --identity"
    ).toString();

    const parsedData = JSON.parse(data);
    expect(parsedData.message).toBe("wibble");
  });
});

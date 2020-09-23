const { execSync } = require("child_process");

describe("helloWorld", () => {
  it("returns the accepted data", () => {
    const data = execSync(
      "netlify functions:invoke --name hello-world --identity"
    ).toString();

    const parsedData = JSON.parse(data);
    expect(parsedData.message).toBe("Hi ⊂◉‿◉つ");
  });
});

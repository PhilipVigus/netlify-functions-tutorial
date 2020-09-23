const { testFunction } = require("./testFunction.js");

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: testFunction(),
      event: event,
    }),
  };
};

/**
 *
 * SQS Event https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html
 * @param {Object} event - SQS event
 *
 * @param {Object} context
 *
 * @returns
 *    https://docs.aws.amazon.com/lambda/latest/dg/nodejs-handler.html
 *    - Non-Async Handlers: must returns callback(err, data)
 *    - Async Handlers:     must return promise
 *
 */
exports.lambdaHandler = (event, context, callback) => {
  const firstMsg = event.Records[0].body;
  console.log("event first record", firstMsg);

  if (firstMsg.includes("error")) {
    console.error(`error message, lets fail: ${firstMsg}`);
    callback(new Error(firstMsg));
  }

  return callback(null, { status: "ok" });
};

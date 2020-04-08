const { IncomingWebhook } = require('@slack/webhook');
const { ALERT_MESSAGE: message = '<!here> 스트레칭 할 시간입니다.', WEBHOOK_URL } = process.env;
const webhook = new IncomingWebhook(WEBHOOK_URL);

(async () => {
  await webhook.send({
    text: message,
  });
})();

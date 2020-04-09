const { IncomingWebhook } = require('@slack/webhook');
const { ALERT_MESSAGE, WEBHOOK_URL } = process.env;
const message = ALERT_MESSAGE || '<!here> 스트레칭 할 시간입니다.';

if (!WEBHOOK_URL) {
  throw new Error('Not exists WEBHOOK_URL.');
}

const webhook = new IncomingWebhook(WEBHOOK_URL);

(async () => {
  try {
    await webhook.send({
      text: message
    });
  } catch (e) {
    throw e;
  }
})();

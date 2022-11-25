// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const WebhookEvent = {
  "NEW_PAYMENT": "new_payment"
};

const { Company, Webhook, PaymentIntent, Customer } = initSchema(schema);

export {
  Company,
  Webhook,
  PaymentIntent,
  Customer,
  WebhookEvent
};
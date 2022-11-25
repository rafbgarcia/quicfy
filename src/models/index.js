// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const WebhookEvent = {
  "NEW_PAYMENT": "new_payment"
};

const { Company, PaymentIntent, Customer } = initSchema(schema);

export {
  Company,
  PaymentIntent,
  Customer,
  WebhookEvent
};
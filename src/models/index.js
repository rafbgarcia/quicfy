// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const ChargeState = {
  "PENDING": "pending",
  "PAID": "paid",
  "CANCELED": "canceled"
};

const { Company, Charge, Customer } = initSchema(schema);

export {
  Company,
  Charge,
  Customer,
  ChargeState
};
import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";

export enum WebhookEvent {
  NEW_PAYMENT = "new_payment"
}

type CompanyMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type WebhookMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PaymentIntentMetaData = {
  readOnlyFields: 'updatedAt';
}

type CustomerMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerCompany = {
  readonly id: string;
  readonly name: string;
  readonly apiKey?: string | null;
  readonly webhooks?: (Webhook | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCompany = {
  readonly id: string;
  readonly name: string;
  readonly apiKey?: string | null;
  readonly webhooks: AsyncCollection<Webhook>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Company = LazyLoading extends LazyLoadingDisabled ? EagerCompany : LazyCompany

export declare const Company: (new (init: ModelInit<Company, CompanyMetaData>) => Company) & {
  copyOf(source: Company, mutator: (draft: MutableModel<Company, CompanyMetaData>) => MutableModel<Company, CompanyMetaData> | void): Company;
}

type EagerWebhook = {
  readonly id: string;
  readonly companyID: string;
  readonly url: string;
  readonly event: WebhookEvent | keyof typeof WebhookEvent;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyWebhook = {
  readonly id: string;
  readonly companyID: string;
  readonly url: string;
  readonly event: WebhookEvent | keyof typeof WebhookEvent;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Webhook = LazyLoading extends LazyLoadingDisabled ? EagerWebhook : LazyWebhook

export declare const Webhook: (new (init: ModelInit<Webhook, WebhookMetaData>) => Webhook) & {
  copyOf(source: Webhook, mutator: (draft: MutableModel<Webhook, WebhookMetaData>) => MutableModel<Webhook, WebhookMetaData> | void): Webhook;
}

type EagerPaymentIntent = {
  readonly id: string;
  readonly companyID: string;
  readonly customerID: string;
  readonly createdAt: string;
  readonly updatedAt?: string | null;
}

type LazyPaymentIntent = {
  readonly id: string;
  readonly companyID: string;
  readonly customerID: string;
  readonly createdAt: string;
  readonly updatedAt?: string | null;
}

export declare type PaymentIntent = LazyLoading extends LazyLoadingDisabled ? EagerPaymentIntent : LazyPaymentIntent

export declare const PaymentIntent: (new (init: ModelInit<PaymentIntent, PaymentIntentMetaData>) => PaymentIntent) & {
  copyOf(source: PaymentIntent, mutator: (draft: MutableModel<PaymentIntent, PaymentIntentMetaData>) => MutableModel<PaymentIntent, PaymentIntentMetaData> | void): PaymentIntent;
}

type EagerCustomer = {
  readonly id: string;
  readonly quicID: string;
  readonly paymentIntents?: (PaymentIntent | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCustomer = {
  readonly id: string;
  readonly quicID: string;
  readonly paymentIntents: AsyncCollection<PaymentIntent>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Customer = LazyLoading extends LazyLoadingDisabled ? EagerCustomer : LazyCustomer

export declare const Customer: (new (init: ModelInit<Customer, CustomerMetaData>) => Customer) & {
  copyOf(source: Customer, mutator: (draft: MutableModel<Customer, CustomerMetaData>) => MutableModel<Customer, CustomerMetaData> | void): Customer;
}
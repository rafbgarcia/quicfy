import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

export enum ChargeState {
  PENDING = "pending",
  PAID = "paid",
  CANCELED = "canceled"
}

type CompanyMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ChargeMetaData = {
  readOnlyFields: 'updatedAt';
}

type CustomerMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerCompany = {
  readonly id: string;
  readonly name: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCompany = {
  readonly id: string;
  readonly name: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Company = LazyLoading extends LazyLoadingDisabled ? EagerCompany : LazyCompany

export declare const Company: (new (init: ModelInit<Company, CompanyMetaData>) => Company) & {
  copyOf(source: Company, mutator: (draft: MutableModel<Company, CompanyMetaData>) => MutableModel<Company, CompanyMetaData> | void): Company;
}

type EagerCharge = {
  readonly id: string;
  readonly temporaryCode: string;
  readonly amount: number;
  readonly expiresAt?: string | null;
  readonly description?: string | null;
  readonly customerID?: string | null;
  readonly createdAt: string;
  readonly state?: ChargeState | keyof typeof ChargeState | null;
  readonly updatedAt?: string | null;
}

type LazyCharge = {
  readonly id: string;
  readonly temporaryCode: string;
  readonly amount: number;
  readonly expiresAt?: string | null;
  readonly description?: string | null;
  readonly customerID?: string | null;
  readonly createdAt: string;
  readonly state?: ChargeState | keyof typeof ChargeState | null;
  readonly updatedAt?: string | null;
}

export declare type Charge = LazyLoading extends LazyLoadingDisabled ? EagerCharge : LazyCharge

export declare const Charge: (new (init: ModelInit<Charge, ChargeMetaData>) => Charge) & {
  copyOf(source: Charge, mutator: (draft: MutableModel<Charge, ChargeMetaData>) => MutableModel<Charge, ChargeMetaData> | void): Charge;
}

type EagerCustomer = {
  readonly id: string;
  readonly quicID: string;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly cpf?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCustomer = {
  readonly id: string;
  readonly quicID: string;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly cpf?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Customer = LazyLoading extends LazyLoadingDisabled ? EagerCustomer : LazyCustomer

export declare const Customer: (new (init: ModelInit<Customer, CustomerMetaData>) => Customer) & {
  copyOf(source: Customer, mutator: (draft: MutableModel<Customer, CustomerMetaData>) => MutableModel<Customer, CustomerMetaData> | void): Customer;
}
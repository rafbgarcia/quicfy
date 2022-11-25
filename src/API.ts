/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCompanyInput = {
  id?: string | null,
  name: string,
  apiKey?: string | null,
  _version?: number | null,
};

export type ModelCompanyConditionInput = {
  name?: ModelStringInput | null,
  apiKey?: ModelStringInput | null,
  and?: Array< ModelCompanyConditionInput | null > | null,
  or?: Array< ModelCompanyConditionInput | null > | null,
  not?: ModelCompanyConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Company = {
  __typename: "Company",
  id: string,
  name: string,
  apiKey?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateCompanyInput = {
  id: string,
  name?: string | null,
  apiKey?: string | null,
  _version?: number | null,
};

export type DeleteCompanyInput = {
  id: string,
  _version?: number | null,
};

export type CreatePaymentIntentInput = {
  id?: string | null,
  companyID: string,
  customerID: string,
  createdAt?: string | null,
  _version?: number | null,
};

export type ModelPaymentIntentConditionInput = {
  companyID?: ModelIDInput | null,
  customerID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelPaymentIntentConditionInput | null > | null,
  or?: Array< ModelPaymentIntentConditionInput | null > | null,
  not?: ModelPaymentIntentConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type PaymentIntent = {
  __typename: "PaymentIntent",
  id: string,
  companyID: string,
  customerID: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdatePaymentIntentInput = {
  id: string,
  companyID?: string | null,
  customerID?: string | null,
  createdAt?: string | null,
  _version?: number | null,
};

export type DeletePaymentIntentInput = {
  id: string,
  _version?: number | null,
};

export type CreateCustomerInput = {
  quicID: string,
  firstName?: string | null,
  lastName?: string | null,
  cpf?: string | null,
  _version?: number | null,
};

export type ModelCustomerConditionInput = {
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  cpf?: ModelStringInput | null,
  and?: Array< ModelCustomerConditionInput | null > | null,
  or?: Array< ModelCustomerConditionInput | null > | null,
  not?: ModelCustomerConditionInput | null,
};

export type Customer = {
  __typename: "Customer",
  quicID: string,
  firstName?: string | null,
  lastName?: string | null,
  cpf?: string | null,
  paymentIntents?: ModelPaymentIntentConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelPaymentIntentConnection = {
  __typename: "ModelPaymentIntentConnection",
  items:  Array<PaymentIntent | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UpdateCustomerInput = {
  quicID: string,
  firstName?: string | null,
  lastName?: string | null,
  cpf?: string | null,
  _version?: number | null,
};

export type DeleteCustomerInput = {
  quicID: string,
  _version?: number | null,
};

export type ModelCompanyFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  apiKey?: ModelStringInput | null,
  and?: Array< ModelCompanyFilterInput | null > | null,
  or?: Array< ModelCompanyFilterInput | null > | null,
  not?: ModelCompanyFilterInput | null,
};

export type ModelCompanyConnection = {
  __typename: "ModelCompanyConnection",
  items:  Array<Company | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelPaymentIntentFilterInput = {
  id?: ModelIDInput | null,
  companyID?: ModelIDInput | null,
  customerID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelPaymentIntentFilterInput | null > | null,
  or?: Array< ModelPaymentIntentFilterInput | null > | null,
  not?: ModelPaymentIntentFilterInput | null,
};

export type ModelCustomerFilterInput = {
  quicID?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  cpf?: ModelStringInput | null,
  and?: Array< ModelCustomerFilterInput | null > | null,
  or?: Array< ModelCustomerFilterInput | null > | null,
  not?: ModelCustomerFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelCustomerConnection = {
  __typename: "ModelCustomerConnection",
  items:  Array<Customer | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSubscriptionCompanyFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  apiKey?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCompanyFilterInput | null > | null,
  or?: Array< ModelSubscriptionCompanyFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionPaymentIntentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  companyID?: ModelSubscriptionIDInput | null,
  customerID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPaymentIntentFilterInput | null > | null,
  or?: Array< ModelSubscriptionPaymentIntentFilterInput | null > | null,
};

export type ModelSubscriptionCustomerFilterInput = {
  quicID?: ModelSubscriptionIDInput | null,
  firstName?: ModelSubscriptionStringInput | null,
  lastName?: ModelSubscriptionStringInput | null,
  cpf?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCustomerFilterInput | null > | null,
  or?: Array< ModelSubscriptionCustomerFilterInput | null > | null,
};

export type CreateCompanyMutationVariables = {
  input: CreateCompanyInput,
  condition?: ModelCompanyConditionInput | null,
};

export type CreateCompanyMutation = {
  createCompany?:  {
    __typename: "Company",
    id: string,
    name: string,
    apiKey?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateCompanyMutationVariables = {
  input: UpdateCompanyInput,
  condition?: ModelCompanyConditionInput | null,
};

export type UpdateCompanyMutation = {
  updateCompany?:  {
    __typename: "Company",
    id: string,
    name: string,
    apiKey?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteCompanyMutationVariables = {
  input: DeleteCompanyInput,
  condition?: ModelCompanyConditionInput | null,
};

export type DeleteCompanyMutation = {
  deleteCompany?:  {
    __typename: "Company",
    id: string,
    name: string,
    apiKey?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreatePaymentIntentMutationVariables = {
  input: CreatePaymentIntentInput,
  condition?: ModelPaymentIntentConditionInput | null,
};

export type CreatePaymentIntentMutation = {
  createPaymentIntent?:  {
    __typename: "PaymentIntent",
    id: string,
    companyID: string,
    customerID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdatePaymentIntentMutationVariables = {
  input: UpdatePaymentIntentInput,
  condition?: ModelPaymentIntentConditionInput | null,
};

export type UpdatePaymentIntentMutation = {
  updatePaymentIntent?:  {
    __typename: "PaymentIntent",
    id: string,
    companyID: string,
    customerID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeletePaymentIntentMutationVariables = {
  input: DeletePaymentIntentInput,
  condition?: ModelPaymentIntentConditionInput | null,
};

export type DeletePaymentIntentMutation = {
  deletePaymentIntent?:  {
    __typename: "PaymentIntent",
    id: string,
    companyID: string,
    customerID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateCustomerMutationVariables = {
  input: CreateCustomerInput,
  condition?: ModelCustomerConditionInput | null,
};

export type CreateCustomerMutation = {
  createCustomer?:  {
    __typename: "Customer",
    quicID: string,
    firstName?: string | null,
    lastName?: string | null,
    cpf?: string | null,
    paymentIntents?:  {
      __typename: "ModelPaymentIntentConnection",
      items:  Array< {
        __typename: "PaymentIntent",
        id: string,
        companyID: string,
        customerID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateCustomerMutationVariables = {
  input: UpdateCustomerInput,
  condition?: ModelCustomerConditionInput | null,
};

export type UpdateCustomerMutation = {
  updateCustomer?:  {
    __typename: "Customer",
    quicID: string,
    firstName?: string | null,
    lastName?: string | null,
    cpf?: string | null,
    paymentIntents?:  {
      __typename: "ModelPaymentIntentConnection",
      items:  Array< {
        __typename: "PaymentIntent",
        id: string,
        companyID: string,
        customerID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteCustomerMutationVariables = {
  input: DeleteCustomerInput,
  condition?: ModelCustomerConditionInput | null,
};

export type DeleteCustomerMutation = {
  deleteCustomer?:  {
    __typename: "Customer",
    quicID: string,
    firstName?: string | null,
    lastName?: string | null,
    cpf?: string | null,
    paymentIntents?:  {
      __typename: "ModelPaymentIntentConnection",
      items:  Array< {
        __typename: "PaymentIntent",
        id: string,
        companyID: string,
        customerID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetCompanyQueryVariables = {
  id: string,
};

export type GetCompanyQuery = {
  getCompany?:  {
    __typename: "Company",
    id: string,
    name: string,
    apiKey?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListCompaniesQueryVariables = {
  filter?: ModelCompanyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCompaniesQuery = {
  listCompanies?:  {
    __typename: "ModelCompanyConnection",
    items:  Array< {
      __typename: "Company",
      id: string,
      name: string,
      apiKey?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncCompaniesQueryVariables = {
  filter?: ModelCompanyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCompaniesQuery = {
  syncCompanies?:  {
    __typename: "ModelCompanyConnection",
    items:  Array< {
      __typename: "Company",
      id: string,
      name: string,
      apiKey?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetPaymentIntentQueryVariables = {
  id: string,
};

export type GetPaymentIntentQuery = {
  getPaymentIntent?:  {
    __typename: "PaymentIntent",
    id: string,
    companyID: string,
    customerID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListPaymentIntentsQueryVariables = {
  filter?: ModelPaymentIntentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPaymentIntentsQuery = {
  listPaymentIntents?:  {
    __typename: "ModelPaymentIntentConnection",
    items:  Array< {
      __typename: "PaymentIntent",
      id: string,
      companyID: string,
      customerID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncPaymentIntentsQueryVariables = {
  filter?: ModelPaymentIntentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPaymentIntentsQuery = {
  syncPaymentIntents?:  {
    __typename: "ModelPaymentIntentConnection",
    items:  Array< {
      __typename: "PaymentIntent",
      id: string,
      companyID: string,
      customerID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetCustomerQueryVariables = {
  quicID: string,
};

export type GetCustomerQuery = {
  getCustomer?:  {
    __typename: "Customer",
    quicID: string,
    firstName?: string | null,
    lastName?: string | null,
    cpf?: string | null,
    paymentIntents?:  {
      __typename: "ModelPaymentIntentConnection",
      items:  Array< {
        __typename: "PaymentIntent",
        id: string,
        companyID: string,
        customerID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListCustomersQueryVariables = {
  quicID?: string | null,
  filter?: ModelCustomerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListCustomersQuery = {
  listCustomers?:  {
    __typename: "ModelCustomerConnection",
    items:  Array< {
      __typename: "Customer",
      quicID: string,
      firstName?: string | null,
      lastName?: string | null,
      cpf?: string | null,
      paymentIntents?:  {
        __typename: "ModelPaymentIntentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncCustomersQueryVariables = {
  filter?: ModelCustomerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCustomersQuery = {
  syncCustomers?:  {
    __typename: "ModelCustomerConnection",
    items:  Array< {
      __typename: "Customer",
      quicID: string,
      firstName?: string | null,
      lastName?: string | null,
      cpf?: string | null,
      paymentIntents?:  {
        __typename: "ModelPaymentIntentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateCompanySubscriptionVariables = {
  filter?: ModelSubscriptionCompanyFilterInput | null,
};

export type OnCreateCompanySubscription = {
  onCreateCompany?:  {
    __typename: "Company",
    id: string,
    name: string,
    apiKey?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateCompanySubscriptionVariables = {
  filter?: ModelSubscriptionCompanyFilterInput | null,
};

export type OnUpdateCompanySubscription = {
  onUpdateCompany?:  {
    __typename: "Company",
    id: string,
    name: string,
    apiKey?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteCompanySubscriptionVariables = {
  filter?: ModelSubscriptionCompanyFilterInput | null,
};

export type OnDeleteCompanySubscription = {
  onDeleteCompany?:  {
    __typename: "Company",
    id: string,
    name: string,
    apiKey?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreatePaymentIntentSubscriptionVariables = {
  filter?: ModelSubscriptionPaymentIntentFilterInput | null,
};

export type OnCreatePaymentIntentSubscription = {
  onCreatePaymentIntent?:  {
    __typename: "PaymentIntent",
    id: string,
    companyID: string,
    customerID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdatePaymentIntentSubscriptionVariables = {
  filter?: ModelSubscriptionPaymentIntentFilterInput | null,
};

export type OnUpdatePaymentIntentSubscription = {
  onUpdatePaymentIntent?:  {
    __typename: "PaymentIntent",
    id: string,
    companyID: string,
    customerID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeletePaymentIntentSubscriptionVariables = {
  filter?: ModelSubscriptionPaymentIntentFilterInput | null,
};

export type OnDeletePaymentIntentSubscription = {
  onDeletePaymentIntent?:  {
    __typename: "PaymentIntent",
    id: string,
    companyID: string,
    customerID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateCustomerSubscriptionVariables = {
  filter?: ModelSubscriptionCustomerFilterInput | null,
};

export type OnCreateCustomerSubscription = {
  onCreateCustomer?:  {
    __typename: "Customer",
    quicID: string,
    firstName?: string | null,
    lastName?: string | null,
    cpf?: string | null,
    paymentIntents?:  {
      __typename: "ModelPaymentIntentConnection",
      items:  Array< {
        __typename: "PaymentIntent",
        id: string,
        companyID: string,
        customerID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateCustomerSubscriptionVariables = {
  filter?: ModelSubscriptionCustomerFilterInput | null,
};

export type OnUpdateCustomerSubscription = {
  onUpdateCustomer?:  {
    __typename: "Customer",
    quicID: string,
    firstName?: string | null,
    lastName?: string | null,
    cpf?: string | null,
    paymentIntents?:  {
      __typename: "ModelPaymentIntentConnection",
      items:  Array< {
        __typename: "PaymentIntent",
        id: string,
        companyID: string,
        customerID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteCustomerSubscriptionVariables = {
  filter?: ModelSubscriptionCustomerFilterInput | null,
};

export type OnDeleteCustomerSubscription = {
  onDeleteCustomer?:  {
    __typename: "Customer",
    quicID: string,
    firstName?: string | null,
    lastName?: string | null,
    cpf?: string | null,
    paymentIntents?:  {
      __typename: "ModelPaymentIntentConnection",
      items:  Array< {
        __typename: "PaymentIntent",
        id: string,
        companyID: string,
        customerID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCompanyInput = {
  id?: string | null,
  name: string,
  _version?: number | null,
};

export type ModelCompanyConditionInput = {
  name?: ModelStringInput | null,
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
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateCompanyInput = {
  id: string,
  name?: string | null,
  _version?: number | null,
};

export type DeleteCompanyInput = {
  id: string,
  _version?: number | null,
};

export type CreateChargeInput = {
  id?: string | null,
  temporaryCode: string,
  amount: number,
  expiresAt?: string | null,
  description?: string | null,
  customerID?: string | null,
  createdAt?: string | null,
  state?: ChargeState | null,
  _version?: number | null,
};

export enum ChargeState {
  pending = "pending",
  paid = "paid",
  canceled = "canceled",
}


export type ModelChargeConditionInput = {
  temporaryCode?: ModelStringInput | null,
  amount?: ModelIntInput | null,
  expiresAt?: ModelStringInput | null,
  description?: ModelStringInput | null,
  customerID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  state?: ModelChargeStateInput | null,
  and?: Array< ModelChargeConditionInput | null > | null,
  or?: Array< ModelChargeConditionInput | null > | null,
  not?: ModelChargeConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
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

export type ModelChargeStateInput = {
  eq?: ChargeState | null,
  ne?: ChargeState | null,
};

export type Charge = {
  __typename: "Charge",
  id: string,
  temporaryCode: string,
  amount: number,
  expiresAt?: string | null,
  description?: string | null,
  customerID?: string | null,
  createdAt: string,
  state?: ChargeState | null,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  owner?: string | null,
};

export type UpdateChargeInput = {
  id: string,
  temporaryCode?: string | null,
  amount?: number | null,
  expiresAt?: string | null,
  description?: string | null,
  customerID?: string | null,
  createdAt?: string | null,
  state?: ChargeState | null,
  _version?: number | null,
};

export type DeleteChargeInput = {
  id: string,
  _version?: number | null,
};

export type CreateCustomerInput = {
  id?: string | null,
  quicID: string,
  firstName?: string | null,
  lastName?: string | null,
  cpf?: string | null,
  _version?: number | null,
};

export type ModelCustomerConditionInput = {
  quicID?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  cpf?: ModelStringInput | null,
  and?: Array< ModelCustomerConditionInput | null > | null,
  or?: Array< ModelCustomerConditionInput | null > | null,
  not?: ModelCustomerConditionInput | null,
};

export type Customer = {
  __typename: "Customer",
  id: string,
  quicID: string,
  firstName?: string | null,
  lastName?: string | null,
  cpf?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateCustomerInput = {
  id: string,
  quicID?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  cpf?: string | null,
  _version?: number | null,
};

export type DeleteCustomerInput = {
  id: string,
  _version?: number | null,
};

export type ModelCompanyFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
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

export type ModelChargeFilterInput = {
  id?: ModelIDInput | null,
  temporaryCode?: ModelStringInput | null,
  amount?: ModelIntInput | null,
  expiresAt?: ModelStringInput | null,
  description?: ModelStringInput | null,
  customerID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  state?: ModelChargeStateInput | null,
  and?: Array< ModelChargeFilterInput | null > | null,
  or?: Array< ModelChargeFilterInput | null > | null,
  not?: ModelChargeFilterInput | null,
};

export type ModelChargeConnection = {
  __typename: "ModelChargeConnection",
  items:  Array<Charge | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelCustomerFilterInput = {
  id?: ModelIDInput | null,
  quicID?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  cpf?: ModelStringInput | null,
  and?: Array< ModelCustomerFilterInput | null > | null,
  or?: Array< ModelCustomerFilterInput | null > | null,
  not?: ModelCustomerFilterInput | null,
};

export type ModelCustomerConnection = {
  __typename: "ModelCustomerConnection",
  items:  Array<Customer | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSubscriptionCompanyFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
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

export type ModelSubscriptionChargeFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  temporaryCode?: ModelSubscriptionStringInput | null,
  amount?: ModelSubscriptionIntInput | null,
  expiresAt?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  customerID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  state?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionChargeFilterInput | null > | null,
  or?: Array< ModelSubscriptionChargeFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionCustomerFilterInput = {
  id?: ModelSubscriptionIDInput | null,
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
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateChargeMutationVariables = {
  input: CreateChargeInput,
  condition?: ModelChargeConditionInput | null,
};

export type CreateChargeMutation = {
  createCharge?:  {
    __typename: "Charge",
    id: string,
    temporaryCode: string,
    amount: number,
    expiresAt?: string | null,
    description?: string | null,
    customerID?: string | null,
    createdAt: string,
    state?: ChargeState | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type UpdateChargeMutationVariables = {
  input: UpdateChargeInput,
  condition?: ModelChargeConditionInput | null,
};

export type UpdateChargeMutation = {
  updateCharge?:  {
    __typename: "Charge",
    id: string,
    temporaryCode: string,
    amount: number,
    expiresAt?: string | null,
    description?: string | null,
    customerID?: string | null,
    createdAt: string,
    state?: ChargeState | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type DeleteChargeMutationVariables = {
  input: DeleteChargeInput,
  condition?: ModelChargeConditionInput | null,
};

export type DeleteChargeMutation = {
  deleteCharge?:  {
    __typename: "Charge",
    id: string,
    temporaryCode: string,
    amount: number,
    expiresAt?: string | null,
    description?: string | null,
    customerID?: string | null,
    createdAt: string,
    state?: ChargeState | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type CreateCustomerMutationVariables = {
  input: CreateCustomerInput,
  condition?: ModelCustomerConditionInput | null,
};

export type CreateCustomerMutation = {
  createCustomer?:  {
    __typename: "Customer",
    id: string,
    quicID: string,
    firstName?: string | null,
    lastName?: string | null,
    cpf?: string | null,
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
    id: string,
    quicID: string,
    firstName?: string | null,
    lastName?: string | null,
    cpf?: string | null,
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
    id: string,
    quicID: string,
    firstName?: string | null,
    lastName?: string | null,
    cpf?: string | null,
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

export type GetChargeQueryVariables = {
  id: string,
};

export type GetChargeQuery = {
  getCharge?:  {
    __typename: "Charge",
    id: string,
    temporaryCode: string,
    amount: number,
    expiresAt?: string | null,
    description?: string | null,
    customerID?: string | null,
    createdAt: string,
    state?: ChargeState | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type ListChargesQueryVariables = {
  filter?: ModelChargeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChargesQuery = {
  listCharges?:  {
    __typename: "ModelChargeConnection",
    items:  Array< {
      __typename: "Charge",
      id: string,
      temporaryCode: string,
      amount: number,
      expiresAt?: string | null,
      description?: string | null,
      customerID?: string | null,
      createdAt: string,
      state?: ChargeState | null,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncChargesQueryVariables = {
  filter?: ModelChargeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncChargesQuery = {
  syncCharges?:  {
    __typename: "ModelChargeConnection",
    items:  Array< {
      __typename: "Charge",
      id: string,
      temporaryCode: string,
      amount: number,
      expiresAt?: string | null,
      description?: string | null,
      customerID?: string | null,
      createdAt: string,
      state?: ChargeState | null,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetCustomerQueryVariables = {
  id: string,
};

export type GetCustomerQuery = {
  getCustomer?:  {
    __typename: "Customer",
    id: string,
    quicID: string,
    firstName?: string | null,
    lastName?: string | null,
    cpf?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListCustomersQueryVariables = {
  filter?: ModelCustomerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCustomersQuery = {
  listCustomers?:  {
    __typename: "ModelCustomerConnection",
    items:  Array< {
      __typename: "Customer",
      id: string,
      quicID: string,
      firstName?: string | null,
      lastName?: string | null,
      cpf?: string | null,
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
      id: string,
      quicID: string,
      firstName?: string | null,
      lastName?: string | null,
      cpf?: string | null,
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
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateChargeSubscriptionVariables = {
  filter?: ModelSubscriptionChargeFilterInput | null,
};

export type OnCreateChargeSubscription = {
  onCreateCharge?:  {
    __typename: "Charge",
    id: string,
    temporaryCode: string,
    amount: number,
    expiresAt?: string | null,
    description?: string | null,
    customerID?: string | null,
    createdAt: string,
    state?: ChargeState | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnUpdateChargeSubscriptionVariables = {
  filter?: ModelSubscriptionChargeFilterInput | null,
};

export type OnUpdateChargeSubscription = {
  onUpdateCharge?:  {
    __typename: "Charge",
    id: string,
    temporaryCode: string,
    amount: number,
    expiresAt?: string | null,
    description?: string | null,
    customerID?: string | null,
    createdAt: string,
    state?: ChargeState | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnDeleteChargeSubscriptionVariables = {
  filter?: ModelSubscriptionChargeFilterInput | null,
};

export type OnDeleteChargeSubscription = {
  onDeleteCharge?:  {
    __typename: "Charge",
    id: string,
    temporaryCode: string,
    amount: number,
    expiresAt?: string | null,
    description?: string | null,
    customerID?: string | null,
    createdAt: string,
    state?: ChargeState | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnCreateCustomerSubscriptionVariables = {
  filter?: ModelSubscriptionCustomerFilterInput | null,
};

export type OnCreateCustomerSubscription = {
  onCreateCustomer?:  {
    __typename: "Customer",
    id: string,
    quicID: string,
    firstName?: string | null,
    lastName?: string | null,
    cpf?: string | null,
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
    id: string,
    quicID: string,
    firstName?: string | null,
    lastName?: string | null,
    cpf?: string | null,
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
    id: string,
    quicID: string,
    firstName?: string | null,
    lastName?: string | null,
    cpf?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCompany = /* GraphQL */ `
  subscription OnCreateCompany($filter: ModelSubscriptionCompanyFilterInput) {
    onCreateCompany(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateCompany = /* GraphQL */ `
  subscription OnUpdateCompany($filter: ModelSubscriptionCompanyFilterInput) {
    onUpdateCompany(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteCompany = /* GraphQL */ `
  subscription OnDeleteCompany($filter: ModelSubscriptionCompanyFilterInput) {
    onDeleteCompany(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateCharge = /* GraphQL */ `
  subscription OnCreateCharge($filter: ModelSubscriptionChargeFilterInput) {
    onCreateCharge(filter: $filter) {
      id
      code
      companyID
      amount
      expiresAt
      description
      customerID
      createdAt
      state
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateCharge = /* GraphQL */ `
  subscription OnUpdateCharge($filter: ModelSubscriptionChargeFilterInput) {
    onUpdateCharge(filter: $filter) {
      id
      code
      companyID
      amount
      expiresAt
      description
      customerID
      createdAt
      state
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteCharge = /* GraphQL */ `
  subscription OnDeleteCharge($filter: ModelSubscriptionChargeFilterInput) {
    onDeleteCharge(filter: $filter) {
      id
      code
      companyID
      amount
      expiresAt
      description
      customerID
      createdAt
      state
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateCustomer = /* GraphQL */ `
  subscription OnCreateCustomer($filter: ModelSubscriptionCustomerFilterInput) {
    onCreateCustomer(filter: $filter) {
      id
      quicID
      firstName
      lastName
      cpf
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateCustomer = /* GraphQL */ `
  subscription OnUpdateCustomer($filter: ModelSubscriptionCustomerFilterInput) {
    onUpdateCustomer(filter: $filter) {
      id
      quicID
      firstName
      lastName
      cpf
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteCustomer = /* GraphQL */ `
  subscription OnDeleteCustomer($filter: ModelSubscriptionCustomerFilterInput) {
    onDeleteCustomer(filter: $filter) {
      id
      quicID
      firstName
      lastName
      cpf
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;

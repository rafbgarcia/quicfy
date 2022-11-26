/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCompany = /* GraphQL */ `
  mutation CreateCompany(
    $input: CreateCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    createCompany(input: $input, condition: $condition) {
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
export const updateCompany = /* GraphQL */ `
  mutation UpdateCompany(
    $input: UpdateCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    updateCompany(input: $input, condition: $condition) {
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
export const deleteCompany = /* GraphQL */ `
  mutation DeleteCompany(
    $input: DeleteCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    deleteCompany(input: $input, condition: $condition) {
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
export const createCharge = /* GraphQL */ `
  mutation CreateCharge(
    $input: CreateChargeInput!
    $condition: ModelChargeConditionInput
  ) {
    createCharge(input: $input, condition: $condition) {
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
export const updateCharge = /* GraphQL */ `
  mutation UpdateCharge(
    $input: UpdateChargeInput!
    $condition: ModelChargeConditionInput
  ) {
    updateCharge(input: $input, condition: $condition) {
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
export const deleteCharge = /* GraphQL */ `
  mutation DeleteCharge(
    $input: DeleteChargeInput!
    $condition: ModelChargeConditionInput
  ) {
    deleteCharge(input: $input, condition: $condition) {
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
export const createCustomer = /* GraphQL */ `
  mutation CreateCustomer(
    $input: CreateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    createCustomer(input: $input, condition: $condition) {
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
export const updateCustomer = /* GraphQL */ `
  mutation UpdateCustomer(
    $input: UpdateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    updateCustomer(input: $input, condition: $condition) {
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
export const deleteCustomer = /* GraphQL */ `
  mutation DeleteCustomer(
    $input: DeleteCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    deleteCustomer(input: $input, condition: $condition) {
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

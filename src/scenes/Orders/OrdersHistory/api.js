import { gql } from 'apollo-client-preset/lib/index'

export const AllOrdersQuery = gql`query getAllOrders ($search: String, $skip: Int, $first: Int, $userToken: String!) {
  allOrder (search: $search, skip: $skip, first: $first, userToken: $userToken) {
    orderNumber
    customerEmail
    customerName
    deliveryType
    expiringTime
    pocName
    orderRating
    orderDate
    orderDetails
    statusHistory {
      status
      comments
    }
  }
}`

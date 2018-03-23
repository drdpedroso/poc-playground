import { gql } from 'apollo-client-preset/lib/index'

export const AllOrder = gql`
query getOrders ($filter: OrderFilter!, $userToken: String!) {
  allOrder (filter: $filter, userToken: $userToken) {
    orderNumber
    pocDocument
    customerEmail
    customerName
    deliveryType
    expiringTime
    pocName
    orderRating
    orderDate
    orderDetails
  }
}`

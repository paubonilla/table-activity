import { gql } from 'apollo-boost'

export const FEATURES__QUERY = gql`
  query ($_id: String!) {
    app(_id: $_id) {
      _id
      name
      logoUrl
      features{
        FID
        name
        macBinding
        winBinding
        description
        longDescription
      }
    }
  } 
  `
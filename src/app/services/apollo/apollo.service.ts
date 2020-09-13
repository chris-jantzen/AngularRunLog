import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class ApolloService {

  constructor(private apollo: Apollo) { }

  public getUser(id: string) {
    return this.apollo.query<any>({
      query: gql`
        query UserById($id: ID!) {
          userById(id: $id) {
            id
            email
          }
        }
      `,
      variables: {
        id
      }
    })
  }
}

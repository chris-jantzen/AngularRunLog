import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class ApolloService {

  constructor(private apollo: Apollo) { }

  // <User> / <Partial<User>> ?? Depending on what the return object looks like
  public getUser(id: string): Observable<any> {
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
    });
  }
}

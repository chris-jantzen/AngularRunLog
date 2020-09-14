import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Token } from '../models/token';
import { AddToken, RemoveToken } from '../actions/auth.actions';
import { Injectable } from '@angular/core';

export class AuthStateModel {
  token: Token
}

@State<AuthStateModel>({
  name: 'auth'
})
@Injectable()
export class AuthState {
  @Selector()
  static getToken(state: AuthStateModel) {
    return state.token;
  }

  @Action(AddToken)
  add({ patchState }: StateContext<AuthStateModel>, { payload }: AddToken) {
    patchState({
      token: payload
    });
  }

  @Action(RemoveToken)
  remove({ patchState }: StateContext<AuthStateModel>) {
    patchState({
      token: undefined
    });
  }
}

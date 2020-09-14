import { Token } from '../models/token';

export class AddToken {
  static readonly type = '[Auth] Add';

  constructor(public payload: Token) {}
}

export class RemoveToken {
  static readonly type = '[Auth] Remove';

  constructor() {}
}

import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';
import * as UserActions from '../actions/user.action';
import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError, switchMap, tap } from 'rxjs/operators';
import { UserService } from '../../user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class UserEffects {
  constructor(
    private actions: Actions,
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {}

  @Effect()
  loginUser = this.actions.pipe(
    ofType(UserActions.LOGIN_USER),
    map((action: UserActions.LoginUser) => action.payload),
    switchMap(userCreds => {
      return this.userService.login(userCreds).pipe(
        map(user => {
          localStorage.setItem('token', user.token);
          localStorage.setItem('email', user.email);

          return new UserActions.LoginUserSuccess(user);
        }),
        catchError(error => {
          return of(new UserActions.LoginUserFail(error));
        })
      );
    })
  );

  @Effect({ dispatch: false })
  LogInSuccess: Observable<any> = this.actions.pipe(
    ofType(UserActions.LOGIN_USER_SUCCESS),
    map(_ => {
      const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
      this.router.navigateByUrl(returnUrl);
    })
  );
}

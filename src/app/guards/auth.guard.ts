import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserState } from '../store/reducers/user.reducer';
import { Store } from '@ngrx/store';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private store: Store<UserState>) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const token = localStorage.getItem('token');
    // TODO improve check when ready
    if (token && token.length>10) {
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}

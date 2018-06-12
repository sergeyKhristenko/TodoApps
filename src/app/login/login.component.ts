import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AppState } from '../store';
import { Store } from '@ngrx/store';
import { userActions } from '../store/actions';
import { Router, ActivatedRoute } from '@angular/router';
import { UserState } from '../store/reducers/user.reducer';
import { Subscription, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  userForm: FormGroup;
  submitted = false;
  $destroyed = new Subject();
  returnUrl: string;
  errorMessage: string;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.createForm();
  }

  createForm() {
    this.userForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.userForm.status != 'VALID') {
      return;
    }

    const formModel = this.userForm.value;

    const credentials = {
      email: formModel.email,
      password: formModel.password
    };

    this.store.dispatch(new userActions.LoginUser(credentials));
  }

  ngOnInit() {
    this.store
      .select((state: AppState) => state.user)
      .pipe(takeUntil(this.$destroyed))
      .subscribe(userState => {
        if (userState && userState.errorMessage && userState.errorMessage.status === 401) {
          this.errorMessage = 'Email or password incorrect';
        }
      });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  ngOnDestroy() {
    this.$destroyed.next();
  }
}

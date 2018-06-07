import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AppState } from '../store';
import { Store } from '@ngrx/store';
import { userActions } from '../store/actions';
import { Router, ActivatedRoute } from '@angular/router';
import { UserState } from '../store/reducers/user.reducer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;
  submitted = false;
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
      .select((state: AppState) => state.user.errorMessage)
      .subscribe(errMessage => {
        console.log(errMessage)
        if(errMessage && errMessage.status === 401 && errMessage.statusText === 'Unauthorized') {
          this.errorMessage = 'Email or password incorrect';
        }
      });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
}

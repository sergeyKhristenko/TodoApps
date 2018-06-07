import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { User } from './models';

describe('UserService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let userService: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });

    userService = TestBed.get(UserService);
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => httpTestingController.verify());

  it('login', () => {
    const testUser: User = { id: 'Test ID string' };

    userService.login({ email: 'test@email.com' }).subscribe(data => {
      expect(data).toEqual(testUser);
    });

    const req = httpTestingController.expectOne(`${userService.apiURL}/login`);

    expect(req.request.method).toEqual('POST');
    req.flush(testUser);
  });

  it('login error', () => {
    const err = 'Unauthorized';

    userService.login({ email: 'test@email.com' }).subscribe(data => {
      expect(data).toEqual(err);
    });

    const req = httpTestingController.expectOne(`${userService.apiURL}/login`);

    expect(req.request.method).toEqual('POST');
    req.flush(err);
  });
});

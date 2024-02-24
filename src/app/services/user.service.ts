import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private tokenSubject = new BehaviorSubject<string>('');
  token$ = this.tokenSubject.asObservable();

  constructor() { }

  getToken = async () => {
    await fetch("http://localhost:8080/auth/token-callback")
      .then(response => response.text())
      .then(text => {
        this.tokenSubject.next(text);
      });
  }

  resetToken = () => {
    this.tokenSubject.next('')
  }
}

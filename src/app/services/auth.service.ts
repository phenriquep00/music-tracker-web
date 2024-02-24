import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getSpotifyUserLogin = () => {
    fetch("http://localhost:8080/auth/login")
      .then((response) => response.text())
      .then(response => {
        window.location.replace(response);
      })
  };
  
}

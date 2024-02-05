import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, firstValueFrom } from 'rxjs';
import { UserModel } from '../user/user.model';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }


  getSpotifyUserLogin = () => {
    fetch("http://localhost:8080/auth/login")
      .then((response) => response.text())
      .then(response => {
        window.location.replace(response);
      })
  };

  getUserTopArtists = () => {
    fetch("http://localhost:8080/auth/user-top-artists")
      .then((response) => response.text())
      .then(response => {
        console.log(response)
      })
  };

  getUserSavedAlbums = async () => {
    const response = await fetch("http://localhost:8080/auth/user-saved-albums");
    const responseData = await response.json();
    return responseData;
  }
}


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, firstValueFrom, throwError } from 'rxjs';
import { UserModel } from '../user/user.model';
import { catchError, retry } from 'rxjs/operators';

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

  getUserSavedAlbums(): Observable<[]> {
    return this.http.get<[]>('http://localhost:8080/auth/user-saved-albums')
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  private handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}


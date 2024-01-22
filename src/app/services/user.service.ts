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

  private apiUrl = 'http://localhost:8080/user';

  private userModel: UserModel = {
    id: '',
    username: '',
    name: '',
    email: '',
    password: '',
    picture: '',
    createdAt: '',
  };

  public getUserState() {
    return this.userModel;
  }

  public setUserModel(userModel: any) {
    this.userModel = userModel;
  }

  async getUser(username: string, password: string): Promise<UserModel> {
    const data = {
      username: username,
      password: password,
    };

    try {
      const response = await firstValueFrom(this.http.get<UserModel>(`${this.apiUrl}/auth`, {
        params: { username: data.username, password: data.password },
      }));

      return response || this.userModel; // Provide a default value or handle accordingly
    } catch (error) {
      // Handle errors here if needed
      console.error('Error in getUser API call:', error);
      throw error;
    } 
  }

  async createUser(user: UserModel): Promise<string | UserModel> {
    try {
      const response = await this.http.post<UserModel>(`${this.apiUrl}/`, user)
        .pipe(
          catchError((error) => {
            throw error; // Rethrow the error to be caught in the component
          })
        )
        .toPromise();

        this.setUserModel(response);

      return response || this.userModel; // Provide a default value or handle accordingly
    } catch (error) {
      // Handle errors here if needed
      console.error('Error in createUser API call:', error);
      throw error;
    }
  }


  
}

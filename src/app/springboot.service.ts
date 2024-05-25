import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from './models/UserModel';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpringbootService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getData(): Observable<UserModel> {
    return this.http.get<UserModel>(this.apiUrl + "/api/greet");
  }
}

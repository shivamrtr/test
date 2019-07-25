import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = 'https://api.github.com/users/mosh-hamedani/followers';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url)
  }
}

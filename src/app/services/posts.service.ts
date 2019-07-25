import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  get() { 
    return this.http.get(this.url);
  }

  create(post) {
    return this.http.post(this.url, JSON.stringify(post));
  }

  update(post) {
    return this.http.patch(this.url + '/' + post.id, JSON.stringify(post));
  }

  delete(id) {
    return this.http.delete(this.url + '/' + id);
  }
}

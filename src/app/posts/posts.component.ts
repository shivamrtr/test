import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any = [];

  constructor(private service: PostsService) {
  }

  ngOnInit() {
    this.service.get()
      .subscribe(res => this.posts = res);
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    this.posts.splice(0, 0, post);

    input.value = '';

    this.service.create(post)
      .subscribe(
        res => {
          post['id'] = res;
        });
  }

  updatePost(post) {
    this.service.update(post)
      .subscribe(
        res => {
          console.log(res);
        });
  }

  deletePost(post) {
    this.service.delete(post.id).subscribe(response =>{
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    });
  }
}

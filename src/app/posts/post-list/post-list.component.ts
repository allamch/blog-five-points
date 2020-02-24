import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {PostService} from '../post.service';
import {Post} from '../post';
import {AuthService} from '../../core/auth.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
posts: Observable<Post[]>;
  constructor(private  postService: PostService , public auth: AuthService) { }

  ngOnInit() {
  this.posts = this.postService.getPosts(); }
  delete(id: string) {
    console.log(id);
    this.postService.delete(id);
  }

}

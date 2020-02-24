import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AuthService} from '../../core/auth.service';
import {PostService} from '../post.service';
import {Observable} from 'rxjs';
import { interval } from 'rxjs';
import { take, finalize } from 'rxjs/operators';
import {AngularFireStorage} from '@angular/fire/storage';






@Component({
  selector: 'app-post-dashboard',
  templateUrl: './post-dashboard.component.html',
  styleUrls: ['./post-dashboard.component.scss']
})
export class PostDashboardComponent implements OnInit {
title: string;
image: any = null;
content: string;
buttonText = 'create Post';
uploadPercent: Observable<number>;
downloadUrl: Observable<number>;

  constructor(private  auth: AuthService, private  postService: PostService, private storage: AngularFireStorage) { }

  ngOnInit() {
  }
  createPost() {
    const data = {
      author: this.auth.authState.displayName || this.auth.authState.email,
      authorId: this.auth.currentUserId,
      content: this.content,
      image: this.image,
      published: new  Date(),
      title: this.title
    };
    this.postService.create(data);
    this.title = '';
    this.content = '';
    this.buttonText = 'Post created';
  }
  uploadImage(event) {
    const file = event.target.files[0];
    const path = 'posts/$(file.name)';
    if (file.type.split('/')[0] !== 'image') {
      return alert('only image files');
    } else {
      const task = this.storage.upload(path, file);
      const ref = this.storage.ref(path);
      this.uploadPercent = task.percentageChanges();
      console.log('image uploaded');
      task.snapshotChanges().pipe(
        finalize(() => {
          this.downloadUrl = ref.getDownloadURL()
          this.downloadUrl.subscribe(url => (this.image = url));
        })
      )
        .subscribe();
    }

  }

}

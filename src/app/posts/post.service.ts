import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Post} from './post';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import actions from '@angular/fire/schematics/deploy/actions';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  postDoc: AngularFirestoreDocument<Post>;
postsCollection: AngularFirestoreCollection<Post>;
  constructor(private afs: AngularFirestore) {
  this.postsCollection = this.afs.collection('posts', ref => ref.orderBy('published', 'desc'));
  }
  getPosts() { return this.postsCollection.snapshotChanges().pipe(map(action => {
    return action.map(
      a => {
        const  data = a.payload.doc.data() as Post;
        const  id = a.payload.doc.id;
        return {id , ...data};
      });
  }));
  }
  getPostData(id: string) {
    this.postDoc = this.afs.doc<Post>('posts/${id}');
    return this.postDoc.valueChanges();
    console.log(this.postDoc);
  }

create(data: Post) {
    this.postsCollection.add(data);
}
getPost(id: string) { return this.afs.doc<Post>('posts/${id}'); }
delete(id: string) { console.log(id);
                     return this.getPost(id).delete(); }
update(id: string , formData) { return this.getPost(id).update(formData); }

 }

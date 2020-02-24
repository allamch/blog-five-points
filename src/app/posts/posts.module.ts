import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostDashboardComponent } from './post-dashboard/post-dashboard.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import { PostListComponent } from './post-list/post-list.component';
import {Observable} from 'rxjs';
import {Post} from './post';
import {MaterialModule} from '../material.module';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {AngularFireStorage} from '@angular/fire/storage';
import {MatCardModule, MatIconModule} from '@angular/material';
import {CKEditorModule} from 'ckeditor4-angular';

const routes: Routes = [
  {path: 'blog', component: PostListComponent},
  {path: 'blog/:id', component: PostDetailComponent},
  {path: 'dashboard', component: PostDashboardComponent}
];
@NgModule({
  declarations: [PostDashboardComponent, PostDetailComponent, PostListComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    MaterialModule,
    MatProgressBarModule,
    MatCardModule,
    MatIconModule,
    CKEditorModule,
  ]
})
export class PostsModule { }

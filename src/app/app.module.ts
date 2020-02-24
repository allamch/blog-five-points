import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {environment} from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {SharedModule} from './shared/shared.module';
import { PostsModule } from './posts/posts.module';
import {RouterModule, Routes} from '@angular/router';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {Observable} from 'rxjs';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {CKEditorModule} from 'ckeditor4-angular';

const routes: Routes = [
  {path: '' , redirectTo: '/blog', pathMatch: 'full'},
  {path: '', loadChildren: './posts/posts.module#PostsModule'}
];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatInputModule,
    MatProgressBarModule,
    MatCardModule,
    MatIconModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    PostsModule,
    CKEditorModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

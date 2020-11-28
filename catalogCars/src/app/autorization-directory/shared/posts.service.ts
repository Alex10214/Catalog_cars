import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {FbResponseIdPost, Post} from './interfaces';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class PostsService {
  constructor(private http: HttpClient) {}

     create(post: Post): Observable <Post> {
      return this.http.post<Post>(`${environment.fbDbUrl}/posts.json`, post)
        .pipe(map((response: FbResponseIdPost) => {
          const newPost: Post = {
            ...post,
            id: response.name
          };
          return newPost;
        }));
    }
}

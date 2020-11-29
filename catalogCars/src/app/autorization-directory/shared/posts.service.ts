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

    getAll(): Observable<any> {
    return this.http.get(`${environment.fbDbUrl}/posts.json`)
      .pipe(map((response: any) => {
          /*console.log('RESPONSE', response) // firebase return obscure object*/
          /*console.log('RESPONSE', Object.keys(response)) // get keys*/
          return Object.keys(response).map(key => ({
            ...response[key],
            id: key,
          }));
        })
      );
    }

    getById(id: string): Observable<Post> {
    return this.http.get(`${environment.fbDbUrl}/posts/${id}.json`)
      .pipe(map((post: Post) => {
        const newPost: Post = {
          ...post, id
        };
        return newPost;
      }));
    }
}

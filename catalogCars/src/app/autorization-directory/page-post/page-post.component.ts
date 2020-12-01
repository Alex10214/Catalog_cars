import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {PostsService} from '../shared/posts.service';
import {Post} from '../shared/interfaces';

@Component({
  selector: 'app-page-post',
  templateUrl: './page-post.component.html',
  styleUrls: ['./page-post.component.scss']
})
export class PagePostComponent implements OnInit {

  post: any;
  postId: any;
  newPost: Post;

  constructor(
      private route: ActivatedRoute,
      private postsService: PostsService
  ) { }

  ngOnInit(): void {
     this.post = this.route.snapshot.children[0];
     this.postId = Object.assign({}, this.post.params);
     this.postsService.getById(this.postId.id).subscribe((post: Post) => {
     this.newPost = post;
     console.log(this.newPost);
     });
  }
}


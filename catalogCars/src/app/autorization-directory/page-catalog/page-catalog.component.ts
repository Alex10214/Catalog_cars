import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {PostsService} from '../shared/posts.service';
import {Observable} from 'rxjs';
import {Post} from '../shared/interfaces';

@Component({
  selector: 'app-page-catalog',
  templateUrl: './page-catalog.component.html',
  styleUrls: ['./page-catalog.component.scss']
})
export class PageCatalogComponent implements OnInit {

  posts: Post[];


  constructor(private postService: PostsService) { }

   ngOnInit(): void {
      this.postService.getAll().subscribe((posts) => {
      this.posts = posts;
      console.log(this.posts);
    });
  }

}

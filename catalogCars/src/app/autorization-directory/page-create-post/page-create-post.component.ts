import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {PostsService} from '../shared/posts.service';
import {Post} from '../shared/interfaces';

@Component({
  selector: 'app-page-create-post',
  templateUrl: './page-create-post.component.html',
  styleUrls: ['./page-create-post.component.scss']
})
export class PageCreatePostComponent implements OnInit {
  form: FormGroup;
  hide: boolean;

  constructor(
    private router: Router,
    private  postService: PostsService,
  ) {
  }

  ngOnInit(): void {
    this.hide = true;
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      addressIcon: new FormControl('', [
        Validators.required,
        Validators.pattern('http.+')
      ]),
      description: new FormControl('', [Validators.required, Validators.minLength(7)]),
      age: new FormControl('', [Validators.required, Validators.maxLength(4), Validators.minLength(4)])
    });
  }

  addPost(): void {
    if (this.form.invalid) {
      return;
    }

    const post: Post = {
      name: this.form.value.name,
      description: this.form.value.description,
      age: this.form.value.age,
      addressIcon: this.form.value.addressIcon,
    };

    this.postService.create(post).subscribe(() => {
      this.form.reset();
      this.router.navigate(['catalog']);
    });
  }
}

import { NgRedux } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { Post } from '../entities/Post';
import { PostsActions } from '../store/posts.actions';
import { AppState } from '../store/store';

@Component({
  selector: 'app-neweditpost',
  templateUrl: './neweditpost.component.html',
  styleUrls: ['./neweditpost.component.scss']
})
export class NeweditpostComponent implements OnInit {
  public selectedPost: Post;
  public postForm: FormGroup;
  public isHappy: boolean;

  constructor(private route: ActivatedRoute, private tempDataService: DataService,
    private fb: FormBuilder, private router: Router, private ngRedux: NgRedux<AppState>,
    private postsActions: PostsActions) { }

  ngOnInit(): void {
    const id: string = this.route.snapshot.paramMap.get('myId');
    console.log(id);

    this.ngRedux.select(x => x.posts).subscribe(result => {
      this.isHappy = result.isHappy;
    });

    
    this.selectedPost = this.tempDataService.getPosts().find(post => post.id === id);
    if (this.selectedPost === undefined) {
      this.selectedPost = new Post();
    }
    console.log(this.selectedPost);
    

    this.postForm = this.fb.group({
      title: [this.selectedPost.getTitle(), Validators.required],
      text: [this.selectedPost.text, Validators.required],
    });
  }

  switchHappy() {
    this.postsActions.setHappy(!this.isHappy);
  }

  onSubmitPost() {
    console.log(this.postForm);
    
    if (this.postForm.valid){
      this.selectedPost = this.postForm.value;
      
      this.selectedPost.createdDate = new Date();
      this.selectedPost.id = Math.random(); // temporary until we connect to a backend.

      // Can you store this post object in the temp. data service 
      // and then navigate to the posts component?
      this.tempDataService.addPost(this.selectedPost);
      this.router.navigate(['posts']);
    }
   
  }



}

import { Injectable } from '@angular/core';
import {Post} from "../models/post.model";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts: Post[] = [
    {
      title: 'Mon premier post',
      content: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.',
      loveIts: 3,
      created_at: new Date()
    }, {
      title: 'Mon deuxième post',
      content: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.',
      loveIts: -1,
      created_at: new Date()
    }, {
      title: 'Encore un post',
      content: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.',
      loveIts: 0,
      created_at: new Date()
    }
  ];
  postsSubject = new Subject<Post[]>();

  constructor() {
      this.getPosts();
  }

  emitPosts(){
    this.postsSubject.next(this.posts);
  }

  getPosts(){
    this.emitPosts();
    return this.posts;
  }

  addPost(post: Post){
    this.posts.push(post);
    this.emitPosts();
  }

  removePost(index: number){
    this.posts.splice(index, 1);
    this.emitPosts();
  }
}

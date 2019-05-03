import { Component, OnInit, Input } from '@angular/core';
import {PostService} from "../services/post.service";

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() index: number;
  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() created_at: Date;

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  onClickLikeButton() {
    this.loveIts++;
  }

  onClickDontLikeButton(){
    this.loveIts--;
  }

  onClickRemoveButton(){
    this.postService.removePost(this.index);
  }
}

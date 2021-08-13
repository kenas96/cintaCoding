import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "post-detail",
  templateUrl: "./post-detail.component.html",
  styleUrls: ["./post-detail.component.css"],
})
export class PostDetailComponent implements OnInit {
  constructor() {}

  @Input() dataDetail: any;
  @Input() displayData: Function;
  displayCallback: Function;
  isShowComment: boolean = false;

  ngOnInit() {
    this.displayCallback = this.displayData.bind(this);
  }

  showComment(){
    this.isShowComment = !this.isShowComment
  }
}

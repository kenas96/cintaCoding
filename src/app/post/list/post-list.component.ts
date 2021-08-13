import { Component, OnInit } from "@angular/core";
import { PostService } from "../post.service";

@Component({
  selector: "post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.css"],
})
export class PostListComponent implements OnInit {
  constructor(private service: PostService) {}

  displayCallback: Function;
  viewCallback: Function;
  users = [];
  data = [
    {
      comments: []
    }
  ];
  pageOfItems: Array<any>;
  dataDetail = {
    comments: []
  };

  onChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;
}

  ngOnInit() {
    this.displayCallback = this.displayData.bind(this);
    this.viewCallback = this.view.bind(this);
  }

  ngAfterViewInit() {
    this.displayData();
  }

  displayData() {
    this.service.getUsers().then(
      (res) => {
        this.users = res;
        this.service.getData().then(
          (res) => {
            for (let data of res) {
              const index = this.users.findIndex(x => x.id === data.userId);
              data.user = this.users[index].name;
              this.service.getComments(data.id).then(
                (res) => {
                 data.comments = res;
                },
                (err) => {
                  alert("Server Internal Error");
                })
              }
              
            this.data = res;
          },
          (err) => {
            alert("Server Internal Error");
          }
        );
      },
      (err) => {
        alert("Server Internal Error");
      }
    );
  }

  view(obj) {
    this.dataDetail = obj;
  }
}

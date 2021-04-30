import { Component, OnInit } from "@angular/core";
import { IssueService } from "../issue.service";

@Component({
  selector: "issue-list",
  templateUrl: "./issue-list.component.html",
  styleUrls: ["./issue-list.component.css"],
})
export class IssueListComponent implements OnInit {
  constructor(private service: IssueService) {}

  displayCallback: Function;
  viewCallback: Function;
  data = {
    total_count: 0,
    items: [],
    page_count: 0,
    per_page: 10,
  };

  issueDetail = {};

  dataUser: any = {};

  option: any = {
    filter: "open",
    page_offset: 1,
    per_page: 10,
  };

  columns = [
    { text: "Issue", field: "title", value: "title" },
    {
      text: "Author",
      field: "author_association",
      value: "author_association",
    },
    { text: "Comment Count", field: "comments", value: "comments" },
  ];

  ngOnInit() {
    this.displayCallback = this.displayData.bind(this);
    this.viewCallback = this.view.bind(this);
  }

  ngAfterViewInit() {
    this.init();
  }

  init() {
    this.service.initData().then(
      (res) => {
        this.dataUser = res;
        this.displayData();
      },
      (err) => {
        alert("Server Internal Error");
      }
    );
  }

  displayData() {
    let tmp_query = [
      {
        param: "q",
        value:
          "repo:" +
          this.dataUser.full_name +
          "/node+type:issue+state:" +
          this.option.filter,
      },
      { param: "per_page", value: parseInt(this.option.per_page) },
      { param: "page_offset", value: parseInt(this.option.page_offset) },
    ];
    let que_str = tmp_query
      .map(function (el) {
        return el.param + "=" + el.value;
      })
      .join("&");
    console.log(que_str);
    this.service.getPaging(que_str).then(
      (res) => {
        this.data = res;
        this.data.page_count = Math.ceil(
          this.data.total_count / this.option.per_page
        );
        console.log(this.data);
      },
      (err) => {
        alert("Server Internal Error");
      }
    );
  }

  view(obj) {
    this.service.getDetail(obj.number).then(
      (res) => {
        this.issueDetail = res;
      },
      (err) => {
        alert("Server Internal Error");
      }
    );
  }
}

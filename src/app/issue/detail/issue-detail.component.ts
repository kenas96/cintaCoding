import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "issue-detail",
  templateUrl: "./issue-detail.component.html",
  styleUrls: ["./issue-detail.component.css"],
})
export class IssueDetailComponent implements OnInit {
  constructor() {}

  @Input() issueDetail: any;
  @Input() displayData: Function;
  displayCallback: Function;

  ngOnInit() {
    this.displayCallback = this.displayData.bind(this);
  }
}

import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "grid-view",
  templateUrl: "./grid-view.component.html",
  styleUrls: ["./grid-view.component.css"],
})
export class GridviewComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  @Input() columns = [];
  @Input() data = {
    items: [],
    page_count: 0,
    per_page: 10,
  };
  @Input() options = {
    filter: "open",
    page_offset: 1,
    per_page: 10,
  };
  @Input() display: Function;
  @Input() view(obj) {}

  displayData() {
    this.display();
  }

  PageSizeChange() {
    this.options.page_offset = 1;
    this.display();
  }

  changePage() {
    if (this.options.page_offset <= this.data.page_count) {
      this.display();
    }
  }

  prev() {
    if (this.options.page_offset > 1) {
      this.options.page_offset--;
      this.display();
    }
  }

  next() {
    console.log(this.options.page_offset);
    console.log(this.data.page_count);
    if (this.options.page_offset < this.data.page_count) {
      this.options.page_offset++;
      this.display();
    }
  }

  search() {
    this.display();
  }

  filter() {
    this.display();
  }
}

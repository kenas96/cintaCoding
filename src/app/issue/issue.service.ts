import { Injectable } from "@angular/core";
import { HttpService } from "../http.service";

@Injectable()
export class IssueService {
  constructor(private service: HttpService) {}

  initData() {
    return this.service.get("repos/angular/angular");
  }

  getPaging(query) {
    return this.service.get("search/issues?" + query);
  }

  getDetail(id) {
    return this.service.get("repos/angular/angular/issues/" + id);
  }
}

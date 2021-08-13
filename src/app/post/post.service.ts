import { Injectable } from "@angular/core";
import { HttpService } from "../http.service";

@Injectable()
export class PostService {
  constructor(private service: HttpService) {}

  getData() {
    return this.service.get("posts");
  }

  getComments(id) {
    return this.service.get("posts/" + id + "/comments");
  }

  getUsers(){
      return this.service.get('users');
  }
}

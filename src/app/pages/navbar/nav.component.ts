import { Component, OnInit } from "@angular/core";
import { LoginService } from "../../auth/login/login.service";

@Component({
  selector: "nav-component",
  templateUrl: "nav.component.html",
  styleUrls: ["nav.component.css"],
})
export class NavComponent implements OnInit {
  constructor(private service: LoginService) {}

  name: string = localStorage.getItem("auth-name");
  id: string = localStorage.getItem("auth-id");
  data = {
    address: {}
  };

  ngOnInit() {}

  getProfile(){
    this.service.getDataUser(this.id).then(
      (res) => {
        this.data = res;
      },
      (err) => {
        alert("Server Internal Error");
      }
    );
  }
}

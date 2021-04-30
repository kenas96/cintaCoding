import { Injectable } from "@angular/core";
import { Headers, Http, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { environment } from "../environments/environment";
import "rxjs/add/operator/toPromise";
import "rxjs/add/operator/map";

@Injectable()
export class HttpService {
  base = environment.server;
  constructor(private http: Http) {}

  get(url: string) {
    return this.http
      .get(this.base + url, this.createRequestOption())
      .toPromise()
      .then((res) => res.json())
      .catch(this.handleError);
  }

  post(url: string, data) {
    return this.http
      .post(this.base + url, JSON.stringify(data), this.createRequestOption())
      .toPromise()
      .then((res) => res.json())
      .catch(this.handleError);
  }

  put(url: string, data) {
    return this.http
      .put(this.base + url, JSON.stringify(data), this.createRequestOption())
      .toPromise()
      .then((res) => res.json())
      .catch(this.handleError);
  }

  delete(url: string) {
    return this.http
      .delete(this.base + url, this.createRequestOption())
      .toPromise()
      .then((res) => res.json())
      .catch(this.handleError);
  }

  private createRequestOption(): RequestOptions {
    //let token = localStorage.getItem('auth-token')
    let headers = new Headers({
      // 'Content-Type': 'application/json',
      // 'Authorization': 'Bearer ' + token
    });
    let option = new RequestOptions({ headers: headers });
    return option;
  }

  private handleError(error: any): Promise<any> {
    //console.log('Error: ' + error)
    let meta = error.json().meta;

    if (!meta) {
      return Promise.reject({
        message:
          "API seems go offline. Please check your connection and try again.",
      });
    } else if (meta.http_status == 500 || meta.status == 500) {
      return Promise.reject({
        message:
          "Sorry something went wrong with the server. Please contact your admin or try again",
        status: meta.status,
        http_status: meta.http_status,
        user_message:
          "Maaf Telah Terjadi Kesalahan Pada Server Silahkan Coba Lagi",
      });
    }

    return Promise.reject({
      message: meta.message,
      status: meta.status,
      http_status: meta.http_status,
      user_message: meta.user_message,
    });
  }
}

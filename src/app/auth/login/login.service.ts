import { Injectable } from '@angular/core'
import { HttpService } from '../../http.service'

@Injectable()
export class LoginService {

    constructor(private service: HttpService) { }

    login() {
       return this.service.get('users')
    }

    getDataUser(id) {
      return this.service.get('users/'+ id)
   }

}
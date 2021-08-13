import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { LoginService } from './login.service'
import { Login } from './login.model'
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms'
import 'rxjs/add/operator/debounceTime'

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    constructor(
        private router: Router,
        private service: LoginService,
        private fb: FormBuilder,
    ) { }

    loginObj: Login
    initAdminDataCallback: Function
    loginForm: FormGroup
    usernameMessage: string
    passwordMessage: string

    private validationMessage = {
        required: "Please fill this field."
    }

    ngOnInit() {
        this.initData()
        this.initAdminDataCallback = this.initData.bind(this)
        this.loginForm = this.fb.group({
            username: ['', [Validators.required]],
            password: ['', [Validators.required]]
        })

        const usernameControl = this.loginForm.get('username')
        usernameControl.valueChanges.debounceTime(100).subscribe(value =>
            this.setMessageUsername(usernameControl)
        )

        const passwordControl = this.loginForm.get('password')
        passwordControl.valueChanges.debounceTime(100).subscribe(value =>
            this.setMessagePassword(passwordControl)
        )
    }

    setMessageUsername(c: AbstractControl): void {
        this.usernameMessage = ''
        if ((c.touched || c.dirty) && c.errors) {
            this.usernameMessage = Object.keys(c.errors).map(key =>
                this.validationMessage[key]
            )[0]
        }
    }

    setMessagePassword(c: AbstractControl): void {
        this.passwordMessage = ''
        if ((c.touched || c.dirty) && c.errors) {
            this.passwordMessage = Object.keys(c.errors).map(key =>
                this.validationMessage[key]
            )[0]
        }
    }

    initData() {
        this.loginObj = new Login()
    }

    login() {
      let obj = Object.assign({}, this.loginObj, this.loginForm.value)
      let isLogin = false;
        this.service.login().then(
            res => {
              for (let data of res) {
                if(data['username'].toLowerCase() === obj.username.toLowerCase()){
                  isLogin = true;
                  localStorage.setItem('auth-name', data['name'])
                  localStorage.setItem('auth-id', data['id'])
                }
              }
              if(isLogin){
                this.router.navigate(['/pages'])
              }else{
                alert('Username Not Found');
              }
            },
            err => {
              alert('Internal Server Error')
            }
        )
    }
}
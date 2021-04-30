import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'page-main',
    template: `
    <body class="hold-transition dark-mode sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed">
      <nav-component></nav-component>
      <router-outlet></router-outlet>
    </body>
  `
})

export class PageMainComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}
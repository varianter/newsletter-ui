import { MsalService, BroadcastService } from '@azure/msal-angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'newsletter-ui';
  constructor(private broadcastService: BroadcastService, private authService: MsalService) { }

  ngOnInit() { }

  login() {
      const isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;

      if (isIE) {
        this.authService.loginRedirect({
          extraScopesToConsent: ["user.read", "openid", "profile"]
        });
      } else {
        this.authService.loginPopup({
          extraScopesToConsent: ["user.read", "openid", "profile"]
        });
      }
  }
}
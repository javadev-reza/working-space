import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {CookieService} from 'angular2-cookie/core';
import {isEmpty} from 'rxjs/operators';

@Injectable()
export class AppInterceptor implements HttpInterceptor {

  constructor(private cookieService:CookieService){}

  intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // console.log(this.cookieService.get('auth'));
    const authReq = req.clone({
      headers: req.headers
        .set('Authorization', 'Bearer '+this.cookieService.get('auth'))
        .set('From', 'web-application')
    });

    console.log(authReq.headers.get('Authorization'));
    return next.handle(authReq);
  }

}

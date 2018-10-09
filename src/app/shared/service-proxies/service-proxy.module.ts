import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


import * as ApiServiceProxies from '@shared/service-proxies/service-proxies';

@NgModule({
  providers: [
    ApiServiceProxies.TPersonService
  ],
})
export class ServiceProxyModule { }

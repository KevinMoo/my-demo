import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { TPersonRoutingModule } from './t-person-routing.module';
import { TPersonListComponent } from './list/list.component';
import { TPersonModuleComponent } from './module/module.component';
import { ServiceProxyModule } from '@shared/service-proxies/service-proxy.module';

const COMPONENTS = [
  TPersonListComponent,
  TPersonModuleComponent];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [
    SharedModule,
    TPersonRoutingModule,
    ServiceProxyModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class TPersonModule { }

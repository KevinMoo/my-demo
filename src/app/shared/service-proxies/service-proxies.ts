import { Component, OnInit, Injectable } from '@angular/core';
import { ServiceBase } from './service-base' ;
import { Observable } from 'rxjs';
import { TPersonDto, CreateTPersonDto } from '../service-proxies/dtos/t-person-dto';
import { _HttpClient } from '@delon/theme';

@Injectable()
export class TPersonService extends ServiceBase<TPersonDto, CreateTPersonDto > {
  constructor(public http: _HttpClient ) {
    super(http);
     this. urlPre = '/tperson/';
  }


}

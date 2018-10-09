
import { mergeMap as _observableMergeMap, catchError as _observableCatch } from 'rxjs/operators';
import { Observable, from as _observableFrom, throwError as _observableThrow, of as _observableOf } from 'rxjs';
import { Injectable, Inject, Optional, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpResponseBase } from '@angular/common/http';

import * as moment from 'moment';


export class CreateTPersonDto implements ICreateTPersonDto {

  constructor(data?: ICreateTPersonDto) {
      if (data) {
          for (const property in data) {
              if (data.hasOwnProperty(property))
                  (<any>this)[property] = (<any>data)[property];
          }
      }
  }
  cCode: string;
  cName: string;
  cPhone: string;
  cMemo: string;
  cPassword: string;
  cGroupID: string;
  cFunctionID: string;
  cPersonID: string;
  iOPType: number;
  cID: string;


  static fromJS(data: any): CreateTPersonDto {
      data = typeof data === 'object' ? data : {};
      const result = new CreateTPersonDto();
      result.init(data);
      return result;
  }

  init(data?: any) {
      if (data) {
          this.cCode = data['cCode'];
          this.cName = data['cName'];
          this.cPhone = data['cPhone'];
          this.cMemo = data['cMemo'];
          this.cPassword = data['cPassword'];
          this.cGroupID = data['cGroupID'];
          this.cFunctionID = data['cFunctionID'];
          this.cPersonID = data['cPersonID'];
          this.iOPType = data['iOPType'];
          this.cID = data['cID'];
      }
  }

  toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data['cCode'] = this.cCode;
      data['cName'] = this.cName;
      data['cPhone'] = this.cPhone;
      data['cMemo'] = this.cMemo;
      data['cPassword'] = this.cPassword;
      data['cGroupID'] = this.cGroupID;
      data['cFunctionID'] = this.cFunctionID;
      data['cPersonID'] = this.cPersonID;
      data['iOPType'] = this.iOPType;
      data['cID'] = this.cID;
      return data;
  }

  clone(): CreateTPersonDto {
      const json = this.toJSON();
      const result = new CreateTPersonDto();
      result.init(json);
      return result;
  }
}

export interface ICreateTPersonDto {
  cCode: string;
  cName: string;
  cPhone: string;
  cMemo: string;
  cPassword: string;
  cGroupID: string;
  cFunctionID: string;
  cPersonID: string;
  iOPType: number;
  cID: string;
}

export class TPersonDto implements ITPersonDto {

  constructor(data?: ITPersonDto) {
      if (data) {
          for (const property in data) {
              if (data.hasOwnProperty(property))
                  (<any>this)[property] = (<any>data)[property];
          }
      }
  }
  iAutoID: number;
  cCode: string;
  cName: string;
  cPhone: string;
  cMemo: string;
  cPassword: string;
  cID: string;
  dCDate: moment.Moment | undefined;

  static fromJS(data: any): TPersonDto {
      data = typeof data === 'object' ? data : {};
      const result = new TPersonDto();
      result.init(data);
      return result;
  }

  init(data?: any) {
      if (data) {
          this.iAutoID = data['iAutoID'];
          this.cCode = data['cCode'];
          this.cName = data['cName'];
          this.cPhone = data['cPhone'];
          this.cMemo = data['cMemo'];
          this.cPassword = data['cPassword'];
          this.cID = data['cID'];
          this.dCDate = data['dCDate'] ? moment(data['dCDate'].toString()) : <any>undefined;
      }
  }

  toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data['cCode'] = this.cCode;
      data['cName'] = this.cName;
      data['cPhone'] = this.cPhone;
      data['cMemo'] = this.cMemo;
      data['cPassword'] = this.cPassword;
      data['cID'] = this.cID;
      data['dCDate'] = this.dCDate ? this.dCDate.toISOString() : <any>undefined;
      data['iAutoID'] = this.iAutoID;
      return data;
  }

  clone(): TPersonDto {
      const json = this.toJSON();
      const result = new TPersonDto();
      result.init(json);
      return result;
  }
}

export interface ITPersonDto {
  iAutoID: number;
  cCode: string;
  cName: string;
  cPhone: string;
  cMemo: string;
  cPassword: string;
  cID: string;
  dCDate: moment.Moment | undefined;
}

export enum EnumOperType{
  add= 1,
  edit= 101,
  delete = 102
}

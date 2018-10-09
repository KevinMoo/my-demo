
import { mergeMap as _observableMergeMap, catchError as _observableCatch } from 'rxjs/operators';
import { Observable, from as _observableFrom, throwError as _observableThrow, of as _observableOf } from 'rxjs';
import { Injectable, Inject, Optional, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpResponseBase } from '@angular/common/http';

export class ProcedureDto {
  iOPType: number;
}



export class ProcedureResultDto   {

  constructor(data?: IProcedureResultDto) {
      if (data) {
          for (const property in data) {
              if (data.hasOwnProperty(property))
                  (<any>this)[property] = (<any>data)[property];
          }
      }
  }
  iResult: number;
  cResult: string;
  cID: string;

  static fromJS(data: any): ProcedureResultDto {
      data = typeof data === 'object' ? data : {};
      const result = new ProcedureResultDto();
      result.init(data);
      return result;
  }

  init(data?: any) {
      if (data) {
          this.iResult = data['iResult'];
          this.cResult = data['cResult'];
          this.cID = data['cID'];
      }
  }

  toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data['iResult'] = this.iResult;
      data['cResult'] = this.cResult;
      data['cID'] = this.cID;
      return data;
  }

  clone(): ProcedureResultDto {
      const json = this.toJSON();
      const result = new ProcedureResultDto();
      result.init(json);
      return result;
  }
}

export interface IProcedureResultDto {
  iResult: number;
  cResult: string;
  cID: string;
}

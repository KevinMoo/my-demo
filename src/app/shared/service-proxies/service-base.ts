import { _HttpClient } from '@delon/theme';
import { Observable } from 'rxjs';
import { PagedRequestDto } from '../component-base/paged-listing-component-base';
import { ProcedureResultDto, ProcedureDto } from '@shared/service-proxies/dtos/procedure-result-dto';





export class ServiceBase<T, EditDto extends ProcedureDto>  {
  constructor(public http: _HttpClient
  ) {

  }



  public urlForGetData = 'getlistby';
  public urlForProcedure = 'execProcedure';
  public urlForGetDtoBycId = 'GetModelBycID';
  public urlForGetDtoByiAutoId = 'GetByAutoId';
  public urlPre: string;


  public getData(pagedRequestDto: PagedRequestDto<T>): Observable<T> {
    if (pagedRequestDto.currentPage < 1) {
      pagedRequestDto.currentPage = 1;
    }
    return this.http
      .post(this.urlPre + this.urlForGetData, pagedRequestDto);
  }

  public procedureOper(newObject: EditDto ): Observable<T> {
    return this.http.post(this.urlPre + this.urlForProcedure, newObject);
  }

  public getDtoBycId(cId: string): Observable<T> {
    return this.http.get(this.urlPre + this.urlForGetDtoBycId, { cId: cId });
  }

  public getDtoByiAutoId(iAutoId: number) {
    return this.http.get(this.urlPre + this.urlForGetDtoByiAutoId, { iAutoId: iAutoId });
  }

}

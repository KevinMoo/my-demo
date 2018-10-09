import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { STColumn, STComponent, STData, STChange } from '@delon/abc';
import { SFSchema } from '@delon/form';
import { tap, map } from 'rxjs/operators';
// import { finally } from 'rxjs/operators/finally';
import { NzMessageService, NzModalService } from 'ng-zorro-antd';
import { TPersonDto, EnumOperType } from '@shared/service-proxies/dtos/t-person-dto';
import { CreateTPersonDto } from '@shared/service-proxies/dtos/t-person-dto';
import { PagedListingComponentBase, PagedRequestDto } from '@shared/component-base/paged-listing-component-base';
import { TPersonService } from '@shared/service-proxies/service-proxies';
import { ProcedureResultDto } from '@shared/service-proxies/dtos/procedure-result-dto';


@Component({
  selector: 'app-t-person-list',
  templateUrl: './list.component.html',
})
export class TPersonListComponent extends PagedListingComponentBase<TPersonDto, TPersonDto, CreateTPersonDto>  {

  isEditVisible = false;
  isEditOKLoading = false;

  @ViewChild('st') st: STComponent;
  columns: STColumn[] = [
    { title: '', index: 'iAutoID', type: 'checkbox' },
    { title: '编号', index: 'cCode', width: '100' },
    { title: '名称', index: 'cName', width: '100' },
    { title: '电话', index: 'cPhone', width: '100' },
    { title: '备注', width: '200px', index: 'cMemo' },
    { title: '时间', type: 'date', index: 'dCDate', width: '100' },
    {
      title: '',
      buttons: [

        {
          text: '编辑', type: 'link', click: (e: any) => {
            this.editDto.init(e);
            this.editDto.iOPType = EnumOperType.add;
            this.isEditVisible = true;
          }
        },
        {
          text: '删除', type: 'modal', pop: true, popTitle: '确认删除吗？'
          , click: (e: any) => {
            this.editDto = new CreateTPersonDto();
            this.editDto.cID = e.cID;
            this.editDto.iOPType = EnumOperType.delete;
            this._tpersonService.procedureOper(this.editDto)
              .subscribe((res: any) => {
                this.operCallback(res);
              });
          }
        },
      ]
    }
  ];

  operCallback(res: any) {
    this.isEditOKLoading = false;
    if (res.items[0].iResult < 0) {
      this.msg.error('保存失败！原因：' + res.items[0].cResult);
      return;
    }
    this.isEditVisible = false;
    this.msg.info('操作完成!');
    this.refresh();
  }

  constructor(
    private http: _HttpClient,
    private modal: ModalHelper,
    private modalSrv: NzModalService,
    public msg: NzMessageService,
    private _tpersonService: TPersonService

  ) {
    super();
    this.queryDto = new TPersonDto();
    this.editDto = new CreateTPersonDto();
  }


  protected fetchDataList(
    request: PagedRequestDto<TPersonDto>,
    pageNumber: number,
    finishedCallback: Function
  ): void {
    this._tpersonService
      .getData(request)
      .pipe(
        tap(() => (finishedCallback()))
      )
      .subscribe((result: any) => {
        this.dataList = result.items;
        this.totalItems = result.pageList.totalRecord;
      });
  }



  checkboxChange(list: STData[]) {
    this.selectedDataItems = list;
  }

  remove() {
    this.http
      .delete('/rule', { nos: this.selectedDataItems.map(i => i.cID).join(',') })
      .subscribe(() => {
        this.refresh();
      });
  }

  pageChange(param: STChange) {
    this.pageNumber = param.pi;
    this.refresh();
  }




  add(tpl: TemplateRef<{}>) {
    this.editDto = new CreateTPersonDto();
    this.editDto.iOPType = EnumOperType.add;
    this.isEditVisible = true;
  }

  handleEditOk(e: any) {
    this.isEditOKLoading = true;
    this._tpersonService.procedureOper(this.editDto)
      .subscribe((res: any) => {
        this.operCallback(res);
      });
  }

  handleEditCancel(e: any) {
    this.modalSrv.create({
      nzTitle: '询问',
      nzContent: '<p>你确定不保存退出吗？</p>',
      nzOnOk: () => {
        this.isEditVisible = false;
      }
    });
  }



  reset(ls: any[]) {
    for (const item of ls) item.value = false;
    this.refresh();
  }




}

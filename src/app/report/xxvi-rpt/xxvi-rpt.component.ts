import { Component, OnInit } from '@angular/core';
import {ExcelService} from '../../services/excel.service';
import { HttpClientModule , HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-xxvi-rpt',
  templateUrl: './xxvi-rpt.component.html',
  styleUrls: ['./xxvi-rpt.component.scss']
})
export class XXVIRptComponent implements OnInit {
data:any = [];
companylist: any;
site_names: any;
datas: any;
esi_district: string;
esi_code: string;
esi_protax: string;
company: string;
unit_name: string;
date: string;
companyName: string;
siteName: string;
year: string;
month1: string;

  constructor(private excelService: ExcelService,private http: HttpClient) {
    this.http.post('https://bssservice.herokuapp.com/company/companylists', {"id":0}).subscribe((data:any) => {
      this.companylist = data.data;
  });
   }

  ngOnInit() {
  }
  fetchsite(data){
    if(data === 'BSS'){
      this.esi_district = 'CHENNAI'
      this.esi_code = 'BSS'
      this.esi_protax = 'CHENNAI'
    }else if(data === 'BSSPL'){
     this.esi_district = 'BSSPL'
     this.esi_code = 'BSSPL'
     this.esi_protax = 'BSSPL'

    }else if(data === 'BSSB'){
     this.esi_district = 'BANGALORE'
     this.esi_code = 'BSSB'
     this.esi_protax = 'BANGALORE'

   }else if(data === 'BSSC'){
     this.esi_district = 'COIMBATORE'
     this.esi_code = 'BSSC'
     this.esi_protax = 'COIMBATORE'

   }else if(data === 'BSSK'){
     this.esi_district = 'KERALA'
     this.esi_code = 'BSSK'
     this.esi_protax = 'KERALA'

   }else if(data === 'BSSPA'){
     this.esi_district = 'BSSPA'
     this.esi_code = 'BSSPA'
     this.esi_protax = 'BSSPA'

   }else if(data === 'BSSR'){
     this.esi_district = 'SATHANUR'
     this.esi_code = 'BSSR'
     this.esi_protax = 'SATHANUR'

   }else if(data === 'BSST'){
     this.esi_district = 'THRUPPUR'
     this.esi_code = 'BSST'
     this.esi_protax = 'THRUPPUR'

   }else if(data === 'MMSPL'){
     this.esi_district = 'MMSPL'
     this.esi_code = 'MMSPL'
     this.esi_protax = 'MMSPL'

   }else if(data === 'BSTR'){
     this.esi_district = 'THIRUKOVILUR'
     this.esi_code = 'BSTR'
     this.esi_protax = 'THIRUKOVILUR'

   }
   this.companyName = data;
   this.http.post('https://bssservice.herokuapp.com/company/fetchcompanysite', {"company_name":data}).subscribe((data:any) => {
     this.site_names = data.data;
 });
  }


  dateChange(data) {
    let a = data.split('-');
    this.year = a[0];
    this.month1 = a[1];
  this.date = data;
  }

  Contract_list(data) {
    this.siteName = data;
    this.http.post('https://bssservice.herokuapp.com/reports/getpfecr', {"title":""+data}).subscribe((data:any) => {
      data.data.forEach(a => {
        if (this.date == a.date) {
          this.datas = data.data;
          console.log(this.datas);
          this.company = '';
          this.unit_name = '';
          this.date = '';
        } else {
          console.log('data not available');
          this.company = '';
          this.unit_name = '';
          this.date = '';
          this.ngOnInit();
        }
      });
    // this.unit_code = this.pfEcrDetails[0].sitelogin;
    // this.unit_namess =  this.pfEcrDetails[0].title;
    // this.fetchalreadyregister(this.unit_code);
     });
    }
  exportAsXLSX():void {
    this.excelService.exportAsExcelFile(this.data, 'FORM No. XXVI');
  }
  print(cmpName) {
      let printContents = document.getElementById(cmpName).innerHTML;
      let originalContents = document.body.innerHTML;
      document.body.innerHTML = printContents;
      window.print();
      document.body.innerHTML = originalContents;
  }
}

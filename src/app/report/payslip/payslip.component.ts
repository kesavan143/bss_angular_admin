import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

declare var $;

@Component({
  selector: 'app-payslip',
  templateUrl: './payslip.component.html',
  styleUrls: ['./payslip.component.scss']
})
export class PayslipComponent implements OnInit {

  date: string;

  data: any;
  tempData: any;
  renderedData: any;
  dataSource: MatTableDataSource<{}>;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private http: HttpClient) {
    this.dataSource = new MatTableDataSource(this.data);
    this.dataSource.connect().subscribe(d => this.renderedData = d);
  }

  ngOnInit() {
    // var completedate = new Date();
    // var y = completedate.getFullYear();
    // var months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    // var m = months[completedate.getMonth()];
    // var ym = y + '-' + m;

  }
  dateChange() {
    console.log(this.date);
    this.http.post('https://bssservice.herokuapp.com/reports/payslip', { 'date': this.date }).subscribe((res: any) => {
      this.data = res.data
      console.log(this.data);
    });
    // this.http.post('https://bssservice.herokuapp.com/reports/payslip', { 'date': this.date }).subscribe((res: any) => {
    //   this.data = res.data;
    //   console.log(this.data);
    //   $(document).ready(function () {
    //     $('#datTabl').DataTable({
    //       'columns': [
    //         { data: 'ecode' },
    //         { data: 'ename' },
    //         { data: 'etype' },
    //         { data: 'unit_name' },
    //         { data: 'present' },
    //         { data: 'ebankname' },
    //         { data: 'eifsc' },
    //         { data: 'company_name' },
    //         { data: 'basic' },
    //         { data: 'da' },
    //         { data: 'hra' },
    //         { data: 'trv_ex' },
    //         { data: 'others' },
    //         { data: 'pf' },
    //         { data: 'esi' },
    //         { data: 'pr_tax' },
    //         { data: 'advance' },
    //         { data: 'loan' },
    //         { data: 'uniform' },
    //         { data: 'mess' },
    //         { data: 'rent' },
    //         { data: 'atm' },
    //         { data: 'phone' },
    //         { data: 'gross' },
    //         { data: 'total_dec' },
    //         { data: 'net_pay' }
    //       ],
    //       destroy: true,
    //       aaData: res.data,
    //       dom: 'Bfrtip',
    //       buttons: [
    //         {
    //           extend: 'excel',
    //           title: 'PAYSLIP export'
    //         },
    //         {
    //           extend: 'csv',
    //           title: 'PAYSLIP export'
    //         },
    //         {
    //           extend: 'pdf',
    //           title: 'PAYSLIP export'
    //         },
    //         'copy'
    //       ]
    //     });
    //   });
    // });
  }
}



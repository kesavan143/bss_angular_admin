import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

declare var $;
@Component({
  selector: 'app-cashandbankstatement-rpt',
  templateUrl: './cashandbankstatement-rpt.component.html',
  styleUrls: ['./cashandbankstatement-rpt.component.scss']
})
export class CashandbankstatementRptComponent implements OnInit {

  companylist: any;
  companyName: string;
  date: any;
  paymode: string;

  data: any;
  tempData: any;
  renderedData: any;
  dataSource: MatTableDataSource<{}>;

  total: number;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private http: HttpClient) {
    this.dataSource = new MatTableDataSource(this.data);
    this.dataSource.connect().subscribe(d => this.renderedData = d);
  }

  ngOnInit() {
    this.http.post('https://bssservice.herokuapp.com/company/companylists', { "id": 0 }).subscribe((data: any) => {
      this.companylist = data.data;
      console.log(this.companylist);
    });
  }
  find(data) {
    console.log(data)
    this.companyName = data;
  }
  dateChange(data) {
    console.log(this.companyName, this.paymode, data)
    // var completedate = new Date();
    // var y = completedate.getFullYear();
    // var months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    // var m = months[completedate.getMonth()];
    // var ym = y + '-' + m;
    this.http.post('https://bssservice.herokuapp.com/reports/cashandbank', { 'companyName': this.companyName, 'date': this.date, 'paymode': this.paymode }).subscribe((res: any) => {
      this.data = res.data;
      $(document).ready(function () {
        $('#datTabl').DataTable({
          'columns': [
            { data: 'company_name' },
            { data: 'unit_name' },
            { data: 'ecode' },
            { data: 'ename' },
            { data: 'date' },
            { data: 'eac' },
            { data: 'eifsc' },
            { data: 'ebankname' },
            { data: 'ebankbranch' },
            { data: 'net_pay' },
            { data: 'paymode' },
          ],
          destroy: true,
          aaData: res.data,
          dom: 'Bfrtip',
          buttons: [
            {
              extend: 'excel',
              title: 'CASH & BANK STATEMENT export'
            },
            {
              extend: 'csv',
              title: 'CASH & BANK STATEMENT export'
            },
            {
              extend: 'pdf',
              title: 'CASH & BANK STATEMENT export'
            },
            'copy'
          ]
        });
      });
    });

  }
}

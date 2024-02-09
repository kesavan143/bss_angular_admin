import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

declare var $;
@Component({
  selector: 'app-totpaysummary-rpt',
  templateUrl: './totpaysummary-rpt.component.html',
  styleUrls: ['./totpaysummary-rpt.component.scss']
})
export class TotpaysummaryRptComponent implements OnInit {

  companylist: any;
  companyName: string;
  date: any;

  total: number;

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
    this.http.post('https://bssservice.herokuapp.com/company/companylists', { "id": 0 }).subscribe((data: any) => {
      this.companylist = data.data;
      console.log(this.companylist);
    });
  }

  find(data) {
    this.companyName = data;
  }

  dateChange(data) {
    this.date = data;
    console.log(this.companyName, this.date)
    this.http.post('https://bssservice.herokuapp.com/reports/gettotalpay', { 'companyName': this.companyName, 'date': this.date }).subscribe((res: any) => {
      this.data = res.data;
      console.log(this.data);
      this.total = res.total;
      $(document).ready(function () {
        $('#datTabl').DataTable({
          'columns': [
            { data: 'company_name' },
            { data: 'ucode' },
            { data: 'unit_name' },
            { data: 'date' },
            { data: 'gross' },
            { data: 'pf' },
            { data: 'esi' },
            { data: 'pr_tax' },
            { data: 'advance' },
            { data: 'loan' },
            { data: 'uniform' },
            { data: 'mess' },
            { data: 'rent' },
            { data: 'atm' },
            { data: 'others' },
            { data: 'Insur' },
            { data: 'IT_Mess' },
            { data: 'total_dec' },
            { data: 'net_pay' },
          ],
          destroy: true,
          aaData: res.data,
          dom: 'Bfrtip',
          buttons: [
            {
              extend: 'excel',
              title: 'Total Pay SUMMARY export'
            },
            {
              extend: 'csv',
              title: 'Total Pay SUMMARY export'
            },
            {
              extend: 'pdf',
              title: 'Total Pay SUMMARY export'
            },
            'copy'
          ]
        });
      });
    });
  }

}

import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';

import { ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

import { EmployeeService } from '../../services/employee.service';
import { ExcelService } from '../../services/excel.service';

declare var $;
@Component({
  selector: 'app-proftaxform-rpt',
  templateUrl: './proftaxform-rpt.component.html',
  styleUrls: ['./proftaxform-rpt.component.scss']
})
export class ProftaxformRptComponent implements OnInit {

  data: any;
  tempData: any;
  renderedData: any;
  dataSource: MatTableDataSource<{}>;

  companylist: any;
  startYear: string;
  endYear: string;
  cycle: string;
  companyName: string;

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

    var completedate = new Date();
    var y = completedate.getFullYear();
    var months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    var m = months[completedate.getMonth()];
    var ym = y + '-' + m;

  }
  find(Companyname) {
    this.companyName = Companyname;
  }
  dateChange() {
    console.log(this.companyName, this.startYear, this.endYear, this.cycle);
    this.http.post('https://bssservice.herokuapp.com/reports/proftax', { 'companyName': this.companyName, 'startyear': this.startYear, 'endyear': this.endYear, 'cycle': this.cycle }).subscribe((res: any) => {
      this.data = res.data;
      console.log(this.data);
      $(document).ready(function () {
        $('#datTabl').DataTable({
          'columns': [
            { data: 'company_name' },
            { data: 'unit_name' },
            { data: 'ecode' },
            { data: 'ename' },
            { data: 'total_duties' },
            { data: 'gross' },
            { data: 'pr_tax' }
          ],
          destroy: true,
          aaData: res.data,
          dom: 'Bfrtip',
          buttons: [
            {
              extend: 'excel',
              title: 'PROF TAX Form - 6 export'
            },
            {
              extend: 'csv',
              title: 'PROF TAX Form - 6 export'
            },
            {
              extend: 'pdf',
              title: 'PROF TAX Form - 6 export'
            },
            'copy'
          ]
        });
      });
    });
  }

}

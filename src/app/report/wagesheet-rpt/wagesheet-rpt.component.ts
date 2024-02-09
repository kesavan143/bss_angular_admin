import { Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {  ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

declare var $;
@Component({
  selector: 'app-wagesheet-rpt',
  templateUrl: './wagesheet-rpt.component.html',
  styleUrls: ['./wagesheet-rpt.component.scss']
})
export class WagesheetRptComponent implements OnInit {

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
    var completedate = new Date();
    var y = completedate.getFullYear();
    var months = ["01","02","03","04","05","06","07","08","09","10","11","12"];
    var m = months[completedate.getMonth()];
    var ym = y+'-'+m;
    this.http.get('https://bssservice.herokuapp.com/reports/getwagesheet').subscribe((res :any)=>{
      this.data = res.data;
      console.log(this.data);
      $(document).ready(function() {
        $('#datTabl').DataTable( {
          'columns': [
            { data: 'company_name' },
            { data: 'unit_name' },
            { data: 'ecode' },
            { data: 'ename' },
            { data: 'designation' },
            { data: '' },
            { data: '' },
            { data: 'dutyoff' },
            { data: 'ewdays' },
            { data: 'total_duties' },
            { data: 'basic' },
            { data: 'da' },
            { data: 'hra' },
            { data: 'ewamount' },
            { data: '' },
            { data: '' },
            { data: 'ewdays' },
            { data: 'gross' },
            { data: 'waesi' },
            { data: 'total_dec' },
            { data: 'gross' },
            { data: 'pf' },
            { data: 'esi' },
            { data: '' },
            { data: 'advance' },
            { data: 'loan' },
            { data: '' },
            { data: 'uniform' },
            { data: 'mess' },
            { data: 'atm' },
            { data: 'id' },
            { data: 'others' },
            { data: 'total_dec' },
            { data: 'net_pay' },
            { data: '' },
            { data: 'paymode' }
           ],
            destroy: true,
            aaData: res.data,
            dom: 'Bfrtip',
            buttons: [
              {
                extend: 'excel',
                title: 'Wage Sheet export' + ' ' + ym,
              },
              {
                extend: 'csv',
                title: 'Wage Sheet export' + ' ' + ym,
              },
              {
                extend: 'pdf',
                title: 'Wage Sheet export' + ' ' + ym,
              },
              'copy'
            ]
        } );
    } );
    });
    }

}

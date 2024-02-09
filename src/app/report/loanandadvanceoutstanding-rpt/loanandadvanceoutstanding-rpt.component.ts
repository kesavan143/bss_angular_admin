import { Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {  ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

declare var $;

@Component({
  selector: 'app-loanandadvanceoutstanding-rpt',
  templateUrl: './loanandadvanceoutstanding-rpt.component.html',
  styleUrls: ['./loanandadvanceoutstanding-rpt.component.scss']
})
export class LoanandadvanceoutstandingRptComponent implements OnInit {

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
    this.http.get('https://bssservice.herokuapp.com/reports/getloanandoutstanding').subscribe((res :any)=>{
      this.data = res.data;
      console.log(this.data);
      $(document).ready(function() {
        $('#datTabl').DataTable( {
          'columns': [
            { data: 'company_name' },
            { data: 'unit_name' },
            { data: 'ecode' },
            { data: 'ename' },
            { data: 'advance' },
            { data: 'loan' },
            { data: 'uniform' },
            { data: 'mess' },
            { data: 'rent' },
            { data: 'atm' },
            { data: 'others' }
           ],
            destroy: true,
            aaData: res.data,
            dom: 'Bfrtip',
            buttons: [
              {
                extend: 'excel',
                title: 'Loan & Advance Outstanding export' + ' ' + ym,
              },
              {
                extend: 'csv',
                title: 'Loan & Advance Outstanding export' + ' ' + ym,
              },
              {
                extend: 'pdf',
                title: 'Loan & Advance Outstanding export' + ' ' + ym,
              },
              'copy'
            ]
        } );
    } );
    });
    }

}

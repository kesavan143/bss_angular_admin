import { Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {  ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

declare var $;

@Component({
  selector: 'app-unitmaster-rpt',
  templateUrl: './unitmaster-rpt.component.html',
  styleUrls: ['./unitmaster-rpt.component.scss']
})
export class UnitmasterRptComponent implements OnInit {

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
    this.http.get('https://bssservice.herokuapp.com/reports/getunitmaster').subscribe((res :any)=>{
      this.data = res.data;
      console.log(this.data);
      $(document).ready(function() {
        $('#datTabl').DataTable( {
          'columns': [
            { data: 'id' },
            { data: 'ucode' },
            { data: 'company_name' },
           { data: 'unit_name' },
           { data: 'rank' },
           { data: 'basic' },
           { data: 'da' },
           { data: 'hra' },
           { data: 'trv_exp' },
            { data: 'medical' },
           { data: 'others' },
           { data: 'others1' },
           { data: 'others2' },
           { data: 'others3' },
           { data: 'total_pay' },
           ],
            destroy: true,
            aaData: res.data,
            dom: 'Bfrtip',
            buttons: [
              {
                extend: 'excel',
                title: 'UNIT MASTER export' + ' ' + ym,
              },
              {
                extend: 'csv',
                title: 'UNIT MASTER export' + ' ' + ym,
              },
              {
                extend: 'pdf',
                title: 'UNIT MASTER export' + ' ' + ym,
              },
              'copy'
            ]
        } );
    } );
    });
    }
}


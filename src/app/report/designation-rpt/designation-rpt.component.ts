import { Component, OnInit} from '@angular/core';
import { HttpClient} from '@angular/common/http';

import {  ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

declare var $;

@Component({
  selector: 'app-designation-rpt',
  templateUrl: './designation-rpt.component.html',
  styleUrls: ['./designation-rpt.component.scss']
})
export class DesignationRptComponent implements OnInit {


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
    this.http.get('https://bssservice.herokuapp.com/reports/getDesignation').subscribe((res :any)=>{
      this.data = res.data;
      console.log(this.data);
      $(document).ready(function() {
        $('#datTabl').DataTable( {
          'columns': [
            // { data: 'slno' },
            { data: 'company_name' },
            { data: 'unit_name' },
            { data: 'etype' },
            { data: 'designation' }
           ],
            destroy: true,
            aaData: res.data,
            dom: 'Bfrtip',
            buttons: [
              {
                extend: 'excel',
                title: 'Designation export' + ' ' + ym
              },
              {
                extend: 'csv',
                title: 'Designation export' + ' ' + ym
              },
              {
                extend: 'pdf',
                title: 'Designation export' + ' ' + ym
              },
              'copy'
            ]
        } );
    } );
    });
    }
}



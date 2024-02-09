import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

declare var $;

@Component({
  selector: 'app-esiformat-rpt',
  templateUrl: './esiformat-rpt.component.html',
  styleUrls: ['./esiformat-rpt.component.scss']
})
export class EsiformatRptComponent implements OnInit {

  companylist: any;
  companyName: string;
  date: any;

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
  dateChange() {
    this.http.post('https://bssservice.herokuapp.com/reports/getwagesheet', { 'companyName': this.companyName, 'date': this.date }).subscribe((res: any) => {
      this.data = res.data;
      console.log(this.data);
      $(document).ready(function () {
        $('#datTabl').DataTable({
          'columns': [
            { data: 'company_name' },
            { data: 'unit_name' },
            { data: 'ecode' },
            { data: 'esino' },
            { data: 'total_duties' },
            { data: 'gross' },
            { data: 'designation' },
            { data: 'esi' }
          ],
          destroy: true,
          aaData: res.data,
          dom: 'Bfrtip',
          buttons: [
            {
              extend: 'excel',
              title: 'ESI FORMAT export'
            },
            {
              extend: 'csv',
              title: 'ESI FORMAT export'
            },
            {
              extend: 'pdf',
              title: 'ESI FORMAT export'
            },
            'copy'
          ]
        });
      });
    });
  }

}

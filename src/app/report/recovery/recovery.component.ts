import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';


declare var $;

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.scss']
})
export class RecoveryComponent implements OnInit {
  data: any;
  tempData: any;
  renderedData: any;
  dataSource: MatTableDataSource<{}>;
  date: string;


  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private http: HttpClient) {

    this.dataSource = new MatTableDataSource(this.data);
    this.dataSource.connect().subscribe(d => this.renderedData = d);
  }

  ngOnInit() {
    var completedate = new Date();
    var y = completedate.getFullYear();
    var months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    var m = months[completedate.getMonth()];
    var ym = y + '-' + m;


  }

  dateChange() {
    console.log(this.date);
    this.http.post('https://bssservice.herokuapp.com/reports/recovery', { 'date': this.date }).subscribe((res: any) => {
      this.data = res.data;
      console.log(this.data);
      $(document).ready(function () {
        $('#datTabl').DataTable({
          'columns': [
            { data: 'ecode' },
            { data: 'ename' },
            { data: 'advance' },
            { data: 'loan' },
            { data: 'uniform' },
            { data: 'mess' },
            { data: 'rent' },
            { data: 'atm' },
            { data: 'phone' },
            { data: 'others' },
            { data: 'total' },
          ],
          destroy: true,
          aaData: res.data,
          dom: 'Bfrtip',
          buttons: [
            {
              extend: 'excel',
              title: 'EMI Recovery export'
            },
            {
              extend: 'csv',
              title: 'EMI Recovery export'
            },
            {
              extend: 'pdf',
              title: 'EMI Recovery export'
            },
            'copy'
          ]
        });
      });
    });
  }

  print(cmpName) {
    let printContents = document.getElementById(cmpName).innerHTML;
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  }


}


import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';


declare var $;

@Component({
  selector: 'app-emivouchers-rpt',
  templateUrl: './emivouchers-rpt.component.html',
  styleUrls: ['./emivouchers-rpt.component.scss']
})
export class EmivouchersRptComponent implements OnInit {
  data: any;
  tempData: any;
  renderedData: any;
  dataSource: MatTableDataSource<{}>;
  date: string;
  status: string;


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
    console.log(this.date, this.status);
    this.http.post('https://bssservice.herokuapp.com/reports/getemployeevoucher', { 'date': this.date, 'status': this.status }).subscribe((res: any) => {
      this.data = res.data;
      console.log(this.data);
      $(document).ready(function () {
        $('#datTabl').DataTable({
          'columns': [
            { data: 'id' },
            { data: 'company_name' },
            { data: 'site' },
            { data: 'employee_id' },
            { data: 'employee_name' },
            { data: 'advance_type' },
            { data: 'ddate' },
            { data: 'pbalanceamount' },
            { data: 'pamount' },
            { data: 'status' },
          ],
          destroy: true,
          aaData: res.data,
          dom: 'Bfrtip',
          buttons: [
            {
              extend: 'excel',
              title: 'EMI Voucher export'
            },
            {
              extend: 'csv',
              title: 'EMI Voucher export'
            },
            {
              extend: 'pdf',
              title: 'EMI Voucher export'
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


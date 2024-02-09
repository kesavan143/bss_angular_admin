import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

declare var $;

@Component({
  selector: 'app-emplist-rpt',
  templateUrl: './emplist-rpt.component.html',
  styleUrls: ['./emplist-rpt.component.scss']
})
export class EmplistRptComponent implements OnInit {

  companylist: any;

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

    var completedate = new Date();
    var y = completedate.getFullYear();
    var months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    var m = months[completedate.getMonth()];
    var ym = y + '-' + m;
  }
  find(data) {
    console.log(data);
    this.http.post('https://bssservice.herokuapp.com/reports/getemployeedetails', { 'companyName': data }).subscribe((res: any) => {
      this.data = res.data;
      console.log(this.data);
      $(document).ready(function () {
        $('#datTabl').DataTable({
          'columns': [
            { data: 'company_name' },
            { data: 'site_name' },
            { data: 'ecode' },
            { data: 'Name' },
            { data: 'gender' },
            { data: 'employee_type' },
            { data: 'Date_of_birth' },
            { data: 'date_joining' },
            { data: 'dor' },
            { data: 'pf1' },
            { data: 'pf2' },
            { data: 'pf3' },
            { data: 'uan' },
            { data: 'esic_no' },
            { data: 'workstatus' },
            { data: 'material_status' },
            { data: 'dispensary' },
            { data: 'father_name' },
            { data: 'sponname' },
            { data: 'bankname' },
            { data: 'bankbranchname' },
            { data: 'a_c' },
            { data: 'ifsc' },
            { data: 'site_name' },
            { data: 'ucode' },
            { data: 'Mobile_No' },
            { data: 'aadhar_card' },
            { data: 'pan' },
            { data: 'voter_id' },
            { data: 'driving_licence' },
            { data: 'permentaddress' },
            { data: 'Address' }
          ],
          destroy: true,
          aaData: res.data,
          dom: 'Bfrtip',
          buttons: [
            {
              extend: 'excel',
              title: 'Employee List export'
            },
            {
              extend: 'csv',
              title: 'Employee List export'
            },
            {
              extend: 'pdf',
              title: 'Employee List export'
            },
            'copy'
          ]
        });
      });
    });
  }

}

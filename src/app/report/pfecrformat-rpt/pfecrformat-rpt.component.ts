import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {  ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

declare var $;
@Component({
  selector: 'app-pfecrformat-rpt',
  templateUrl: './pfecrformat-rpt.component.html',
  styleUrls: ['./pfecrformat-rpt.component.scss']
})
export class PfecrformatRptComponent implements OnInit {

  date: any;
  data: any;
  tempData: any;
  renderedData: any;
  dataSource: MatTableDataSource<{}>;


  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
      }


      dateChange(data) {
        var completedate = new Date();
        var y = completedate.getFullYear();
        var months = ["01","02","03","04","05","06","07","08","09","10","11","12"];
        var m = months[completedate.getMonth()];
        var ym = y+'-'+m;
        console.log(data);
        this.date = data;
        console.log( this.date)
        this.http.post('https://bssservice.herokuapp.com/reports/getpfecr', {'date': this.date}).subscribe((res :any)=>{
          this.data = res.data;
          console.log(this.data);
          $(document).ready(function() {
            $('#datTabl').DataTable( {
              'columns': [
                { data: 'ecode' },
                { data: 'company_name' },
                { data: 'site_name' },
                { data: 'ename' },
                { data: 'panNo' },
                { data: 'uan' },
                { data: 'grosswages' },
                { data: 'gross' },
                { data: 'gross' },
                { data: 'gross' },
                { data: 'EESHAREREMITTED' },
                { data: 'EPSCONTRIBUTIONREMITTED' },
                { data: 'ERSHAREREMITTEDs' },
                { data: 'dutyoff' },
                { data: 'refund' },
                { data: 'dob' },
                { data: 'doj' },
                { data: 'gender' },
                { data: 'f_m_name' },
                { data: 'relationship' },
                { data: 'mobile_no' },
                { data: 'email_id' },
                { data: 'nationality' },
                { data: 'ewamount' },
                { data: 'qualification' },
                { data: 'marital_status' },
                { data: 'isInternationalWorker' },
                { data: 'countryOfOrigin' },
                { data: 'passportNo' },
                { data: 'passportValidFrom' },
                { data: 'passportValidTo' },
                { data: 'isPhysicalHandicap' },
                { data: 'locomotive' },
                { data: 'hearing' },
                { data: 'visual' },
                { data: 'ifsc' },
                { data: 'nameAsPerBank' },
                { data: 'panNo' },
                { data: 'nameAsPerPan' },
                { data: 'aadhaarNo' },
                { data: 'nameAsPerAadhaar' },
               ],
                destroy: true,
                aaData: res.data,
                dom: 'Bfrtip',
                buttons: [
                  {
                    extend: 'excel',
                    title: 'PF ECR FORMAT export' + ' ' + ym,
                  },
                  {
                    extend: 'csv',
                    title: 'PF ECR FORMAT export' + ' ' + ym,
                  },
                  {
                    extend: 'pdf',
                    title: 'PF ECR FORMAT export' + ' ' + ym,
                  },
                  'copy'
                ]
            } );
        } );
        });
        }
      }
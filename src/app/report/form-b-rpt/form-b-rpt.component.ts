import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

declare var $;
@Component({
  selector: 'app-form-b-rpt',
  templateUrl: './form-b-rpt.component.html',
  styleUrls: ['./form-b-rpt.component.scss']
})
export class FormBRptComponent implements OnInit {


  companylist: any;
  companyName: string;
  date: any;
  data: any;
  tempData: any;
  renderedData: any;
  dataSource: MatTableDataSource<{}>;


  public displayedColumns = ['slno', 'nameoftheemployee', 'fathername', 'boj', 'pfacno', 'noofdaysworked', 'totalwagespaid', 'wagesforpf', 'contribution'];


  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    //   this.http.get('https://bssservice.herokuapp.com/reports/getform36b').subscribe((data:any) => {
    //     this.dataSource = data.data;
    //   console.log(this.dataSource);
    // });
    this.http.post('https://bssservice.herokuapp.com/company/companylists', { "id": 0 }).subscribe((data: any) => {
      this.companylist = data.data;
      console.log(this.companylist);
    });
  }

  find(data) {
    console.log(data)
    this.companyName = data;
  }
  dateChange(data) {
    var completedate = new Date();
    var y = completedate.getFullYear();
    var months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    var m = months[completedate.getMonth()];
    var ym = y + '-' + m;
    console.log(data);
    this.date = data;
    console.log(this.companyName, this.date)
    this.http.post('https://bssservice.herokuapp.com/reports/getform36b', { 'companyName': this.companyName, 'date': this.date }).subscribe((res: any) => {
      this.data = res.data;
      console.log(this.data);
      $(document).ready(function () {
        $('#datTabl').DataTable({
          'columns': [
            { data: 'EName' },
            { data: 'FName' },
            { data: 'DOJ' },
            { data: 'PFNO' },
            { data: 'Total_duties' },
            { data: 'Gross' },
            { data: 'PF_Wages' },
            { data: 'Contribution' }
          ],
          destroy: true,
          aaData: res.data,
          dom: 'Brtip',
          buttons: [
            {
              extend: 'excel',
              title: 'Form - 36 B' + ' ' + ym,
              messageTop: `PROFORMA STATEMENT TO BE OBTAINED FROM THE CONTRACTOR\n
                  NAME & ADDRESS OF THE PRINCIPAL EMPLOYER:    HAPAG LLOYD GLOBAL SERVICES PVT LTD,PERUNGUDI, CH-97\n
                  NAME & ADDRESS OF THE CONTRACTOR :    BHARATHEEYAM SECURITY SERVICES PVT LTD, PALLIKARANAI, CH-100\n
                  TN/MAS/85084                                                                              NOV-2017`,
              messageBottom: `I/We hereby certify that all the above employees who were actually deployed in your establishment during ________, have all been covered under EPF & MP Act, 1952 and the contributions 
                  in respect of them for the month of ______ have been remitted by me/us under Code No. TN/MAS/85084 maintained at ROYAPETTAH RO/SRO on ___________________________.\n\n\n
                   DATE:                                                       SIGNATURE OF THE CONTRACTOR`
            },
            {
              extend: 'csv',
              title: 'Form - 36 B export' + ' ' + ym,
              messageTop: `PROFORMA STATEMENT TO BE OBTAINED FROM THE CONTRACTOR\n
                  NAME & ADDRESS OF THE PRINCIPAL EMPLOYER:    HAPAG LLOYD GLOBAL SERVICES PVT LTD,PERUNGUDI, CH-97\n
                  NAME & ADDRESS OF THE CONTRACTOR :    BHARATHEEYAM SECURITY SERVICES PVT LTD, PALLIKARANAI, CH-100\n
                  TN/MAS/85084                                                                              NOV-2017`,
              messageBottom: `I/We hereby certify that all the above employees who were actually deployed in your establishment during ________, have all been covered under EPF & MP Act, 1952 and the contributions 
                  in respect of them for the month of ______ have been remitted by me/us under Code No. TN/MAS/85084 maintained at ROYAPETTAH RO/SRO on ___________________________.\n\n\n
                   DATE:                                                       SIGNATURE OF THE CONTRACTOR`
            },
            {
              extend: 'pdf',
              title: 'Form - 36 B export' + ' ' + ym,
              messageTop: `PROFORMA STATEMENT TO BE OBTAINED FROM THE CONTRACTOR\n
                  NAME & ADDRESS OF THE PRINCIPAL EMPLOYER:    HAPAG LLOYD GLOBAL SERVICES PVT LTD,PERUNGUDI, CH-97\n
                  NAME & ADDRESS OF THE CONTRACTOR :    BHARATHEEYAM SECURITY SERVICES PVT LTD, PALLIKARANAI, CH-100\n
                  TN/MAS/85084                                                                              NOV-2017`,
              messageBottom: `I/We hereby certify that all the above employees who were actually deployed in your establishment during ________, have all been covered under EPF & MP Act, 1952 and the contributions 
                  in respect of them for the month of ______ have been remitted by me/us under Code No. TN/MAS/85084 maintained at ROYAPETTAH RO/SRO on ___________________________.\n\n\n
                   DATE:                                                       SIGNATURE OF THE CONTRACTOR`
            },
            'copy'
          ]
        });
      });
    });
  }
}
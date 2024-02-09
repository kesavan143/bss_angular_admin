
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

import { EmployeeService } from '../services/employee.service';

import { Router } from '@angular/router';

import * as $ from 'jquery';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent  implements OnInit {

  constructor(private userService: EmployeeService, private router: Router) {
  }

  ngOnInit() {
    // $(document).ready(function() {
    //   $('#example').DataTable( {
    //       dom: 'Bfrtip',
    //       buttons: [
    //           'copyHtml5',
    //           'excelHtml5',
    //           'csvHtml5',
    //           'pdfHtml5',
    //       ]
    //   } );
    //   } );
}

}

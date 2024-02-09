import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import {ExcelService} from '../../services/excel.service';

@Component({
  selector: 'app-xxvii-rpt',
  templateUrl: './xxvii-rpt.component.html',
  styleUrls: ['./xxvii-rpt.component.scss']
})
export class XXVIIRptComponent implements OnInit {
  @ViewChild('myDiv') myDiv: ElementRef;
data:any = [];
  constructor(private excelService: ExcelService) { }

  ngOnInit() {
  }
  exportAsXLSX():void {
    // this.data = this.myDiv.nativeElement.textContent;
    // this.data = this.myDiv.nativeElement.innerHTML;
    console.log(this.myDiv.nativeElement.innerHTML);
    // this.excelService.exportAsExcelFile(this.data, 'FORM No. XXVII');
  }
  print(cmpName) {
      let printContents = document.getElementById(cmpName).innerHTML;
      let originalContents = document.body.innerHTML;
      document.body.innerHTML = printContents;
      window.print();
      document.body.innerHTML = originalContents;
  }
}

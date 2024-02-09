import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-unit-master-salary-details',
  templateUrl: './unit-master-salary-details.component.html',
  styleUrls: ['./unit-master-salary-details.component.scss']
})
export class UnitMasterSalaryDetailsComponent implements OnInit {
  selectedfile:any;
  constructor( private http: HttpClient ) { }

  ngOnInit() {
  }
  public attach() {
    const fd = new FormData();
    fd.append('filetoupload', this.selectedfile, this.selectedfile.name);
    console.log(fd);
    this.http.post('https://bssservice.herokuapp.com/bulkupload/bulkupload_unit_master_salary_details', fd)
    .subscribe((data: any) => {
    console.log(data.data);
    });
    alert('Uploaded Succesfully');
  }

  onfileselected(event) {
    console.log(event);
    this.selectedfile = event.target.files[0];
    }
}

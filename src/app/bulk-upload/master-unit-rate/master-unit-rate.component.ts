import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-master-unit-rate',
  templateUrl: './master-unit-rate.component.html',
  styleUrls: ['./master-unit-rate.component.scss']
})
export class MasterUnitRateComponent implements OnInit {
  selectedfile:any;
  constructor( private http: HttpClient ) { }

  ngOnInit() {
    this.selectedfile = '';
  }
  public attach() {
    const fd = new FormData();
    fd.append('filetoupload', this.selectedfile, this.selectedfile.name);
    console.log(fd);
    this.http.post('https://bssservice.herokuapp.com/bulkupload/bulkupload_manual_unit_rate', fd)
    .subscribe((data: any) => {
    console.log(data.data);
    this.ngOnInit();
    });
    alert('Uploaded Succesfully');
  }

  onfileselected(event) {
    console.log(event);
    this.selectedfile = event.target.files[0];
    }
}

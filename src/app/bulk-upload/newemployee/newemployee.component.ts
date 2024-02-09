import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-newemployee',
  templateUrl: './newemployee.component.html',
  styleUrls: ['./newemployee.component.scss']
})
export class NewemployeeComponent implements OnInit {
  selectedfile:any;
  constructor( private http: HttpClient ) { }

  ngOnInit() {
  }
  public attach() {
    const fd = new FormData();
    fd.append('filetoupload', this.selectedfile, this.selectedfile.name);
    console.log(fd);
    this.http.post('https://bssservice.herokuapp.com/bulkupload/bulkuploadformat', fd)
    .subscribe((data: any) => {
    alert('Uploaded Succesfully');
    });
  }

  onfileselected(event) {
    console.log(event);
    this.selectedfile = event.target.files[0];
    }
}

import { Component, OnInit,Inject } from '@angular/core';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router';
import {LOCAL_STORAGE,  WebStorageService } from 'angular-webstorage-service';

@Component({
  selector: 'app-viewnotifications',
  templateUrl: './viewnotifications.component.html',
  styleUrls: ['./viewnotifications.component.scss']
})
export class ViewnotificationsComponent implements OnInit {

  datas:any;

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService,private http: HttpClient ,private route: ActivatedRoute, private router: Router) { 
    
    this.datas = this.getFromLocal('nofifcationdata');

     console.log(this.datas)
  
    
  }


saveInLocal(key, val): void {
  console.log('recieved= key:' + key + 'value:' + val);
  this.storage.set(key, val);
 }
 getFromLocal(key): any {
  console.log('recieved= key:' + key);
  return this.storage.get(key);
 }


  ngOnInit() {
    let id = this.getFromLocal('user_id');
    let count = this.getFromLocal('notificount');
    this.http.post('https://bssservice.herokuapp.com/notification/updatenotification',{"id":""+this.datas.id}).subscribe((data:any) => {
      console.log(this.datas);
    });
    this.http.post('https://bssservice.herokuapp.com/notification/notificationcount', {"user_id":""+id}).subscribe((data:any) => {
      let Count = data.data[0].count;
      this.saveInLocal('notificount',Count);
    });
  }

}

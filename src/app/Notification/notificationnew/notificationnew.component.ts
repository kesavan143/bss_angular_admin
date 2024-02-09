import { Component, OnInit ,Inject} from '@angular/core';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router'
import {LOCAL_STORAGE,  WebStorageService } from 'angular-webstorage-service';

@Component({
  selector: 'app-notificationnew',
  templateUrl: './notificationnew.component.html',
  styleUrls: ['./notificationnew.component.scss']
})
export class NotificationnewComponent implements OnInit {



datas:any;
datass:any

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService,private http: HttpClient ,private route: ActivatedRoute, private router: Router) { 
    
  }

  ngOnInit() {
    let id = this.getFromLocal('user_id');
    let count = this.getFromLocal('notificount');
    this.http.post('https://bssservice.herokuapp.com/notification/listofnotification',{"user_id": ""+id}).subscribe((data:any) => {
      this.datass = data.data;
      console.log(this.datass.length)
      this.datas=[]
      for(let i=0;i<this.datass.length;i++){
        console.log(this.datass[i].status)
        if(this.datass[i].status == "New")
        {
          this.datas.push(this.datass[i])
        }
      }
      console.log(this.datas);
    });
  }


saveInLocal(key, val): void {
  console.log('recieved= key:' + key + 'value:' + val);
  this.storage.set(key, val);
 }
 getFromLocal(key): any {
  console.log('recieved= key:' + key);
  return this.storage.get(key);
 }

 view(data){
  this.saveInLocal('nofifcationdata',data);
  this.router.navigate(['main/viewnotification'])
 }


}

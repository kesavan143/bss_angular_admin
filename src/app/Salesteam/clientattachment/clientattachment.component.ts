import { Component, OnInit } from '@angular/core';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router';

@Component({
  selector: 'app-clientattachment',
  templateUrl: './clientattachment.component.html',
  styleUrls: ['./clientattachment.component.scss']
})
export class ClientattachmentComponent implements OnInit {
  id:any;
  datas:any;
  attachment:attachment;
  
  selectedfile:any;
  
  datass:any;
  
  
  
    
  model:any;
  canloadimage:any;
  
  
  
    constructor(private http: HttpClient ,private route: ActivatedRoute, private router: Router) {
      this.attachment = new attachment();
      
      this.route.params.subscribe(params => {
        this.id = params['id']; // (+) converts string 'id' to a number
        console.log('this id: ' + this.id);
  
        });
  
    }
    ngOnInit(){
      this.http.post('https://bssservice.herokuapp.com/client/mylistclientattach',{"site_id":""+this.id}).subscribe((data:any) => {
        this.datas = data.data;
        console.log(this.datas);
      });   
      }
      public delete($event, item){
        this.http.post('https://bssservice.herokuapp.com/client/deleteclientattach',{"id":""+item.id}).subscribe((data:any) => {
           alert("Deleted Successfully")
          this.ngOnInit()

        }); 

      }
      public downloads($event, item){
        this.http.post('https://bssservice.herokuapp.com/client/fetchclientattach',{"id":""+item.id}).subscribe((data:any) => {
          this.datass = data.data;
          console.log(this.datass[0].path);
          let url = "https://bssservice.herokuapp.com"+this.datass[0].path;
          window.location.href=url;
        });   
      }
      done(){
       alert("Docuement Added to Contract")
       this.router.navigate(['main/contractpage'])
      }
  
      
      public attach() {
        const fd = new FormData();
        fd.append('filetoupload', this.selectedfile, this.selectedfile.name);
        console.log(fd);
        this.http.post('https://bssservice.herokuapp.com/upload/file', fd)
        .subscribe((data: any) => {
        console.log(data.data); 
        this.next1(data.data.path)
        this.canloadimage = true;
        });      
      }
     onfileselected(event) {
      console.log(event);
      this.selectedfile = event.target.files[0];
      }
      next1(path)
     {
            this.attachment.site_id = ""+this.id;
            this.attachment.path = path;
            console.log(this.attachment)
            this.http.post('https://bssservice.herokuapp.com/client/addclientattach',this.attachment).subscribe((data:any)  => {
            console.log(data);
            alert("Add Successfully");
            this.ngOnInit()
            });
      }   
  }
  
  class attachment{
  
    site_id:string;
   title:string;
   path:string;
   
  }
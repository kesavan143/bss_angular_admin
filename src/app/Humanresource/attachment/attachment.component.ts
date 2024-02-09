import { Component, OnInit } from '@angular/core';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router';


@Component({
  selector: 'app-attachment',
  templateUrl: './attachment.component.html',
  styleUrls: ['./attachment.component.scss']
})
export class AttachmentComponent implements OnInit {
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
    this.http.post('https://bssservice.herokuapp.com/attachment/mylistattach',{"Emp_id":""+this.id}).subscribe((data:any) => {
      this.datas = data.data;
      console.log(this.datas);
    });   
    }
    delete1(data) {
      console.log(data);
      this.http.post('https://bssservice.herokuapp.com/attachment/deleteattach',{"id":""+data.id}).subscribe((data:any) => {
        alert('Attachment List Deleted Successfully');
        this.ngOnInit();
      });
    }
    public delete($event, item){
    }
    public downloads($event, item){
      this.http.post('https://bssservice.herokuapp.com/attachment/fetchattach',{"id":""+item.id}).subscribe((data:any) => {
        this.datass = data.data;
        console.log(this.datass[0].path);
        let url = "https://bssservice.herokuapp.com"+this.datass[0].path;
        window.location.href=url;
      });
    }
    done(){
     alert("Employee Details Added Successfully")
     this.router.navigate(['main/viewemployees'])
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
          this.attachment.Emp_id = ""+this.id;
          this.attachment.path = path;
          console.log(this.attachment)
          this.http.post('https://bssservice.herokuapp.com/attachment/createattach',this.attachment).subscribe((data:any)  => {
          console.log(data);
          alert("add Successfully");
          this.ngOnInit()
          });
    }   
}

class attachment{

 Emp_id:string;
 title:string;
 path:string;
 
}
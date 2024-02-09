import { NgModule,Pipe,Component, OnInit ,Attribute} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {formatDate } from '@angular/common';
import { ActivatedRoute ,Router} from '@angular/router'

@Component({
  selector: 'app-addcompany',
  templateUrl: './addcompany.component.html',
  styleUrls: ['./addcompany.component.scss']
})
export class AddcompanyComponent implements OnInit {
  id: number;
  employee_id:string;
  datas: any;
  additems: additems;
  updateitems:updateitems;
  total:number;
  editStatus: boolean;
  viewStatus: boolean;
  constructor(private http: HttpClient , private route: ActivatedRoute, private router: Router) {
    this.additems = new additems();
    this.updateitems = new updateitems();
    }


  ngOnInit() {
    this.clearData();
  this.http.post('https://bssservice.herokuapp.com/company/companylists', {"id":0}).subscribe((data:any) => {
    this.datas = data.data;
    console.log(this.datas);
  });
  }

clearData() {
  this.editStatus = false;
  this.viewStatus = false;
  this.additems.company_name = '';
  this.additems.area = '';
  this.additems.company_address = '';
  this.additems.company_bank_name = '';
  this.additems.company_bank_a_c_no = '';
  this.additems.company_bank_ifsc = '';
  this.additems.company_bank_branch = '';
  this.additems.company_gst_tax_reg_no = '';
  this.additems.company_pan_no = '';
  this.additems.company_cin_no = '';
  this.additems.company_pf_code_no = '';
  this.additems.company_esi_code_no = '';
}

additem() {
      console.log(this.additems);
      this.http.post('https://bssservice.herokuapp.com/company/addcompany',this.additems).subscribe(data => {
        console.log(data);
        alert('Company added successfully')
        this.ngOnInit();
      });
    }

    onFetch(data) {
      this.editStatus = true;
      console.log(data);
      this.id = data.id;
      this.additems.company_name = data.company_name;
      this.additems.area = data.area;
      this.additems.company_address = data.company_address;
      this.additems.company_bank_name = data.company_bank_name;
      this.additems.company_bank_a_c_no = data.company_bank_a_c_no;
      this.additems.company_bank_ifsc = data.company_bank_ifsc;
      this.additems.company_bank_branch = data.company_bank_branch;
      this.additems.company_gst_tax_reg_no = data.company_gst_tax_reg_no;
      this.additems.company_pan_no = data.company_pan_no;
      this.additems.company_cin_no = data.company_cin_no;
      this.additems.company_pf_code_no = data.company_pf_code_no;
      this.additems.company_esi_code_no = data.company_esi_code_no;
    }
    onUpdateItem() {
      this.updateitems.id = this.id;
      this.updateitems.company_name = this.additems.company_name;
      this.updateitems.area = this.additems.area;
      this.updateitems.company_address = this.additems.company_address;
      this.updateitems.company_bank_name = this.additems.company_bank_name;
      this.updateitems.company_bank_a_c_no = this.additems.company_bank_a_c_no
      this.updateitems.company_bank_ifsc = this.additems.company_bank_ifsc;
      this.updateitems.company_bank_branch = this.additems.company_bank_branch;
      this.updateitems.company_gst_tax_reg_no = this.additems.company_gst_tax_reg_no;
      this.updateitems.company_pan_no = this.additems.company_pan_no;
      this.updateitems.company_cin_no = this.additems.company_cin_no;
      this.updateitems.company_pf_code_no = this.additems.company_pf_code_no;
      this.updateitems.company_esi_code_no = this.additems.company_esi_code_no;
      console.log(this.updateitems);
      this.http.post('https://bssservice.herokuapp.com/company/updatecompany',this.updateitems).subscribe(data => {
        console.log(data);
        alert('Company updated successfully')
        this.ngOnInit();
      });
    }
    onView(data) {
      console.log(data);
      this.viewStatus = true;
      this.id = data.id;
      this.additems.company_name = data.company_name;
      this.additems.area = data.area;
      this.additems.company_address = data.company_address;
      this.additems.company_bank_name = data.company_bank_name;
      this.additems.company_bank_a_c_no = data.company_bank_a_c_no;
      this.additems.company_bank_ifsc = data.company_bank_ifsc;
      this.additems.company_bank_branch = data.company_bank_branch;
      this.additems.company_gst_tax_reg_no = data.company_gst_tax_reg_no;
      this.additems.company_pan_no = data.company_pan_no;
      this.additems.company_cin_no = data.company_cin_no;
      this.additems.company_pf_code_no = data.company_pf_code_no;
      this.additems.company_esi_code_no = data.company_esi_code_no;
    }
    onCancelUpdateItem() {
      this.editStatus = false;
      this.additems.company_name = '';
      this.additems.area = '';
      this.additems.company_address = '';
      this.additems.company_bank_name = '';
      this.additems.company_bank_a_c_no = '';
      this.additems.company_bank_ifsc = '';
      this.additems.company_bank_branch = '';
      this.additems.company_gst_tax_reg_no = '';
      this.additems.company_pan_no = '';
      this.additems.company_cin_no = '';
      this.additems.company_pf_code_no = '';
      this.additems.company_esi_code_no = '';
    }





    onDelete(data){
     this.http.post('https://bssservice.herokuapp.com/company/deletecompany',{"id":data.id}).subscribe((data:any) => {
      alert('Company deleted successfully');
     this.ngOnInit();
      });
    }

    // update() {
    //  let a = this.additems.company_name;
    //  let b = this.additems.area;
    //   this.http.post('https://bssservice.herokuapp.com/company/updatecompany',{"id":this.items_id,"items":a,"rates":b}).subscribe(data => {

    //     this.ngOnInit();
    //   });
    // }




}



class additems {
  company_name: string;
  area: string;
  company_address: string;
  company_bank_name: string;
  company_bank_a_c_no: string;
  company_bank_ifsc: string;
  company_bank_branch: string;
  company_gst_tax_reg_no: string;
  company_pan_no: string;
  company_cin_no: string;
  company_pf_code_no: string;
  company_esi_code_no: string;
}

class updateitems {
  id: number;
  company_name: string;
  area: string;
  company_address: string;
  company_bank_name: string;
  company_bank_a_c_no: string;
  company_bank_ifsc: string;
  company_bank_branch: string;
  company_gst_tax_reg_no: string;
  company_pan_no: string;
  company_cin_no: string;
  company_pf_code_no: string;
  company_esi_code_no: string;
}

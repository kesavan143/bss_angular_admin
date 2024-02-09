import { Component, OnInit } from '@angular/core';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { ActivatedRoute, Router} from '@angular/router';
import {formatDate } from '@angular/common';
@Component({
  selector: 'app-updateemployee',
  templateUrl: './updateemployee.component.html',
  styleUrls: ['./updateemployee.component.scss']
})
export class UpdateemployeeComponent implements OnInit {

  employee_id: string;
  datas: any; 
  site_names:any;
  public adduser: Adduser;
  datass:any[]=[];
  companylist:any;
  ecodetext:string;
  constructor( private httpClient:HttpClient, private route: ActivatedRoute, private router: Router ) {
    this.adduser = new Adduser();
    this.httpClient.post('https://bssservice.herokuapp.com/employee/emptypelist', {"id":0}).subscribe((data:any) => {
      this.datass = data.data;
      console.log(this.datass[0].employee_type);
    });
    this.httpClient.get('https://bssservice.herokuapp.com/authentication/efetchsitedetails').subscribe((data:any) => {
      this.site_names = data.data;
    });
    this.route.params.subscribe(params => {
     this.employee_id = params['id']; // (+) converts string 'id' to a number
     console.log('this id: ' + this.employee_id);
     this.adduser.id = +this.employee_id;
     this.httpClient.post('https://bssservice.herokuapp.com/authentication/employee_id',{employee_id:this.employee_id}).subscribe((data:any)  => {
      this.adduser = data.data;
      console.log(this.adduser.Date_of_birth);
      this.adduser.Date_of_birth = formatDate(this.adduser.Date_of_birth, 'yyyy-MM-dd', 'en-US', '+0530');
      this.adduser.date_joining = formatDate(this.adduser.date_joining, 'yyyy-MM-dd', 'en-US', '+0530');
      this.adduser.employee_type = data.data.employee_type;
      this.adduser.pf_action = this.adduser.pf_action;
      this.adduser.esi_action = this.adduser.esi_action;
      this.adduser.prof_action = this.adduser.prof_action;
      this.adduser.work_status_action = this.adduser.work_status_action;

      this.adduser.prom_in1 = this.adduser.prom_in1;
      this.adduser.prom_in_mobile_no = this.adduser.prom_in_mobile_no;
      this.adduser.prom_in_mobile_no1 = this.adduser.prom_in_mobile_no1;
      this.adduser.work_exp = this.adduser.work_exp;
      this.adduser.chest = this.adduser.chest;
      this.adduser.area = this.adduser.area;
      this.adduser.fcontact1 = this.adduser.fcontact1;
      this.adduser.fcontact2 = this.adduser.fcontact2;
      this.adduser.fcontact3 = this.adduser.fcontact3;
      this.adduser.fcontact4 = this.adduser.fcontact4;
      this.adduser.fcontact5 = this.adduser.fcontact5;

      this.adduser.contact = this.adduser.Mobile_No;
      console.log(this.adduser.employee_type);
      if(this.adduser.employee_type == null){
        this.adduser.employee_type = "";
      }
      if(this.adduser.father_name== null){
      this.adduser.father_name = "";
      }
      if(this.adduser.gender== null){
      this.adduser.gender = "";
      }
    
      if(this.adduser.material_status== null){
        this.adduser.material_status = "";
      }
      if(this.adduser.nationality == null){
      this.adduser.nationality = "";
      }
      if(this.adduser.languages== null){
      this.adduser.languages = "";
      }
      if(this.adduser.date_joining== null){
        this.adduser.date_joining = "";
      }
      if( this.adduser.driving_licence== null){
        this.adduser.driving_licence = "";
      }
      if(this.adduser.Email_ID== null){
        this.adduser.Email_ID = "";
      }
      if(this.adduser.Mobile_No== null){
        this.adduser.Mobile_No = "";
      }
      if(this.adduser.Name== null){
        this.adduser.Name = "";
      }
      if(this.adduser.Date_of_birth== null){
        this.adduser.Date_of_birth = "";
      }
      if(this.adduser.Password== null){
        this.adduser.Password = "";
      }
      if(this.adduser.aadhar_card== null){
        this.adduser.aadhar_card = "";
      }
      if(this.adduser.voter_id== null){
        this.adduser.voter_id = "";
      }
      if(this.adduser.Address== null){
        this.adduser.Address = "";
      }

      if(this.adduser.company_name== null){
        this.adduser.company_name = "";
      }
      if(this.adduser.pf1== null){
        this.adduser.pf1 = "";
      } if(this.adduser.pf2== null){
        this.adduser.pf2 = "";
      } if(this.adduser.pf3== null){
        this.adduser.pf3 = "";
      }
      if(this.adduser.uan== null){
        this.adduser.uan = "";
      }

      if(this.adduser.qrcode== null){
        this.adduser.qrcode = "";
      }
      if(this.adduser.attach== null){
        this.adduser.attach = "";
      }
      if(this.adduser.workstatus== null){
        this.adduser.workstatus = "";
      }
      if(this.adduser.resigned== null){
        this.adduser.resigned = "";
      }
      if(this.adduser.createdtime== null){
        this.adduser.createdtime = "";
      }
      if(this.adduser.contact== null){
        this.adduser.contact = "";
      }
      if(this.adduser.ifsc== null){
      this.adduser.ifsc = "";
      }
      if(this.adduser.a_c== null){
        this.adduser.a_c = "";
      }
      if( this.adduser.bankname== null){
        this.adduser.bankname = "";
      }
      if( this.adduser.account== null){
        this.adduser.account = "";
      }
      if( this.adduser.prom_in== null){
        this.adduser.prom_in = "";
      }
      if(this.adduser.pan== null){
        this.adduser.pan = "";
      }
      if(this.adduser.esi== null){
        this.adduser.esi = "";
      }
      
      if(this.adduser.weight== null){
        this.adduser.weight = "";
      }
      if(this.adduser.height== null){
        this.adduser.height = "";
      }
      if(this.adduser.permentaddress== null){
        this.adduser.permentaddress = "";
      }
      if(this.adduser.idtype== null){
        this.adduser.idtype = "";
      }
      if(this.adduser.fname1== null){
        this.adduser.fname1 = "";
      }
      if(this.adduser.fsex1== null){
        this.adduser.fsex1 = "";
      }
      if(this.adduser.frelationship1== null){
        this.adduser.frelationship1 = "";
      }
      if(this.adduser.fdateofbirth1== null){
        this.adduser.fdateofbirth1 = "";
      }
      if(this.adduser.fage1== null){
        this.adduser.fage1 = "";
      }
      if( this.adduser.foccupation1== null){
        this.adduser.foccupation1 = "";
      }
      if(this.adduser.faadharcard1== null){
        this.adduser.faadharcard1 = "";
      }
      if(this.adduser.fname2== null){
        this.adduser.fname2 = "";
      }
      if(this.adduser.fsex2== null){
        this.adduser.fsex2 = "";
      }
      if(this.adduser.frelationship2== null){
        this.adduser.frelationship2 = "";
      }
      if(this.adduser.fdateofbirth2== null){
        this.adduser.fdateofbirth2 = "";
      }
      if( this.adduser.fage2== null){
        this.adduser.fage2 = "";
      }
      if( this.adduser.foccupation2== null){
        this.adduser.foccupation2 = "";
      }
      if(this.adduser.faadharcard2== null){
        this.adduser.faadharcard2 = "";
      }
      if(this.adduser.fname3== null){
        this.adduser.fname3 = "";
      }
      if(this.adduser.fsex3== null){
        this.adduser.fsex3 = "";
      }
      if(this.adduser.frelationship3== null){
        this.adduser.frelationship3 = "";
      }
      if(this.adduser.fdateofbirth3== null){
        this.adduser.fdateofbirth3 = "";
      }
      if(this.adduser.fage3== null){
        this.adduser.fage3 = "";
      }
      if(this.adduser.foccupation3== null){
        this.adduser.foccupation3 = "";
      }
      if(this.adduser.faadharcard3== null){
        this.adduser.faadharcard3 = "";
      }
      if(this.adduser.fname4== null){
        this.adduser.fname4 = "";
      }
      if(this.adduser.fsex4== null){
        this.adduser.fsex4 = "";
      }
      if(this.adduser.frelationship4== null){
        this.adduser.frelationship4 = "";
      }
      if(this.adduser.fdateofbirth4== null){
        this.adduser.fdateofbirth4 = "";
      }
      if(this.adduser.fage4== null){
        this.adduser.fage4 = "";
      }
      if(this.adduser.foccupation4== null){
        this.adduser.foccupation4 = "";
      }
      if(this.adduser.faadharcard4== null){
        this.adduser.faadharcard4 = "";
      }
      if(this.adduser.fname5== null){
        this.adduser.fname5 = "";
      }
      if(this.adduser.fsex5== null){
        this.adduser.fsex5 = "";
      }
      if(this.adduser.frelationship5== null){
      this.adduser.frelationship5 = "";
      }
      if(this.adduser.fdateofbirth5== null){
        this.adduser.fdateofbirth5 = "";
      }
      if(this.adduser.fage5== null){
        this.adduser.fage5 = "";
      }
      if( this.adduser.foccupation5== null){
        this.adduser.foccupation5 = "";
      }
      if(this.adduser.faadharcard5== null){
        this.adduser.faadharcard5 = "";
      }
      if(this.adduser.nname1== null){
        this.adduser.nname1 = "";
      }
      if(this.adduser.nsex1== null){
        this.adduser.nsex1 = "";
      }
      if(this.adduser.nrelationship1== null){
        this.adduser.nrelationship1 = "";
      }
      if(this.adduser.ndateofbirth1== null){
        this.adduser.ndateofbirth1 = "";
      }
      if( this.adduser.nage1== null){
        this.adduser.nage1 = "";
      }
      if(this.adduser.noccupation1== null){
        this.adduser.noccupation1 = "";
      }
      if(this.adduser.naadharcard1== null){
        this.adduser.naadharcard1 = "";
      }
      if(this.adduser.nname2 == null){
        this.adduser.nname2 = "";
      }
      if(this.adduser.nsex2== null){
        this.adduser.nsex2 = "";
      }
      if(this.adduser.nrelationship2== null){
        this.adduser.nrelationship2 = "";
      }
      if(this.adduser.ndateofbirth2== null){
        this.adduser.ndateofbirth2 = "";
      }
      if(this.adduser.nage2 == null){
        this.adduser.nage2 = "";
      }
      if(this.adduser.noccupation2== null){
        this.adduser.noccupation2 = "";
      }
      if(this.adduser.naadharcard2 == null){
        this.adduser.naadharcard2 = "";
      }
      if(this.adduser.nname3== null){
        this.adduser.nname3 = "";
      }
      if(this.adduser.nsex3== null){
        this.adduser.nsex3 = "";
      }
      if(this.adduser.nrelationship3== null){
        this.adduser.nrelationship3 = "";
      }
      if( this.adduser.ndateofbirth3== null){
        this.adduser.ndateofbirth3 = "";
      }
      if(this.adduser.nage3== null){
        this.adduser.nage3 = "";
      }
      if(this.adduser.noccupation3== null){
        this.adduser.noccupation3 = "";
      }
      if(this.adduser.naadharcard3== null){
        this.adduser.naadharcard3 = "";
      }
      if( this.adduser.nname4== null){
        this.adduser.nname4 = "";
      }
      if( this.adduser.nsex4== null){
        this.adduser.nsex4 = "";
      }
      if(this.adduser.nrelationship4== null){
        this.adduser.nrelationship4 = "";
      }
      if(this.adduser.ndateofbirth4 == null){
        this.adduser.ndateofbirth4 = "";
      }
      if(this.adduser.nage4== null){
        this.adduser.nage4 = "";
      }
      if(this.adduser.noccupation4== null){
        this.adduser.noccupation4 = "";
      }
      if(this.adduser.naadharcard4== null){
        this.adduser.naadharcard4 = "";
      }
      if(this.adduser.nname5 == null){
        this.adduser.nname5 = "";
      }
      if(this.adduser.nsex5== null){
        this.adduser.nsex5 = "";
      }
      if( this.adduser.nrelationship5== null){
        this.adduser.nrelationship5 = "";
      }
      if(this.adduser.ndateofbirth5== null){
        this.adduser.ndateofbirth5 = "";
      }
      if(this.adduser.nage5== null){
        this.adduser.nage5 = "";
      }
      if(this.adduser.Emp_id == null){
        this.adduser.Emp_id = "";
      }
      if(this.adduser.noccupation5== null){
        this.adduser.noccupation5 = "";
      }
      if(this.adduser.naadharcard5== null){
      this.adduser.naadharcard5 = "";
      }
      if(this.adduser.mother_tongue== null){
        this.adduser.mother_tongue = "";
        }
        if(this.adduser.Edq== null){
          this.adduser.Edq = "";
          }
          if(this.adduser.language1 == null){
            this.adduser.language1 = "";
            }if(this.adduser.language2 == null){
              this.adduser.language2 = "";
              }if(this.adduser.language3 == null){
                this.adduser.language3 = "";
                }if(this.adduser.language4 == null){
                  this.adduser.language4 = "";
                  }if(this.adduser.language5 == null){
                    this.adduser.language5 = "";
                    }if(this.adduser.lanstate1 == null){
                      this.adduser.lanstate1 = "";
                      }if(this.adduser.lanstate2 == null){
                        this.adduser.lanstate2 = "";
                        }if(this.adduser.lanstate3 == null){
                          this.adduser.lanstate3 = "";
                          }if(this.adduser.lanstate4 == null){
                            this.adduser.lanstate4 = "";
                            }if(this.adduser.lanstate5 == null){
                              this.adduser.lanstate5 = "";
                              } if(this.adduser.personmark  == null){
                                this.adduser.personmark = "";
                              }
                              if(this.adduser.nameorg == null){
                                this.adduser.nameorg = "";
                              }
                              if(this.adduser.position == null){
                                this.adduser.position = "";
                              }
                              if(this.adduser.servicef == null){
                                this.adduser.servicef = "";
                              }
                              if(this.adduser.servicet == null){
                                this.adduser.servicet = "";
                              }
                              if(this.adduser.lastsalary == null){
                                this.adduser.lastsalary = "";
                              }
                              if(this.adduser.reasonlev == null){
                                this.adduser.reasonlev = "";
                              }
                              if(this.adduser.nomiename1 == null){
                                this.adduser.nomiename1 = "";
                              }      if(this.adduser.nomieaddress1 == null){
                                this.adduser.nomieaddress1 = "";
                              }
                              if(this.adduser.nomierelation1 == null){
                                this.adduser.nomierelation1 = "";
                              }
                              if(this.adduser.nomiedate1 == null){
                                this.adduser.nomiedate1 = "";
                              }
                              if(this.adduser.nomiefund1 == null){
                                this.adduser.nomiefund1 = "";
                              }
                              if(this.adduser.nomiemirror1 == null){
                                this.adduser.nomiemirror1 = "";
                              }
                              if(this.adduser.nomiename2 == null){
                                this.adduser.nomiename2 = "";
                              }
                              if(this.adduser.nomieaddress2 == null){
                                this.adduser.nomieaddress2 = "";
                              }
                              if(this.adduser.nomierelation2 == null){
                                this.adduser.nomierelation2 = "";
                              }      if(this.adduser.nomiedate2 == null){
                                this.adduser.nomiedate2 = "";
                              }
                              if(this.adduser.nomiefund2 == null){
                                this.adduser.nomiefund2 = "";
                              }
                              if(this.adduser.nomiemirror2 == null){
                                this.adduser.nomiemirror2 = "";
                              }
                              if(this.adduser.nomiename3 == null){
                                this.adduser.nomiename3 = "";
                              }
                              if(this.adduser.nomieaddress3 == null){
                                this.adduser.nomieaddress3 = "";
                              }
                              if(this.adduser.nomierelation3 == null){
                                this.adduser.nomierelation3 = "";
                              }
                              if(this.adduser.nomiedate3 == null){
                                this.adduser.nomiedate3 = "";
                              }
                              if(this.adduser.nomiefund3 == null){
                                this.adduser.nomiefund3 = "";
                              }      if(this.adduser.nomiemirror3 == null){
                                this.adduser.nomiemirror3 = "";
                              }
                              if(this.adduser.nomiename4 == null){
                                this.adduser.nomiename4 = "";
                              }
                              if(this.adduser.nomieaddress4 == null){
                                this.adduser.nomieaddress4 = "";
                              }
                              if(this.adduser.nomierelation4 == null){
                                this.adduser.nomierelation4 = "";
                              }
                              if(this.adduser.nomiedate4 == null){
                                this.adduser.nomiedate4 = "";
                              }
                              if(this.adduser.nomiefund4 == null){
                                this.adduser.nomiefund4 = "";
                              }
                              if(this.adduser.nomiemirror4 == null){
                                this.adduser.nomiemirror4 = "";
                              }
                              if(this.adduser.nomiename5 == null){
                                this.adduser.nomiename5 = "";
                              }if(this.adduser.nomieaddress5 == null){
                                this.adduser.nomieaddress5 = "";
                              }if(this.adduser.nomierelation5 == null){
                                this.adduser.nomierelation5 = "";
                              }if(this.adduser.nomiedate5 == null){
                                this.adduser.nomiedate5 = "";
                              }if(this.adduser.nomiefund5 == null){
                                this.adduser.nomiefund5 = "";
                              }if(this.adduser.epf_no == null){
                                this.adduser.epf_no = "";
                              }if(this.adduser.esic_no == null){
                                this.adduser.esic_no = "";
                              }if(this.adduser.sponsored_by == null){
                                this.adduser.sponsored_by = "";
                              }if(this.adduser.rank == null){
                                this.adduser.rank = "";
                              }if(this.adduser.sponname == null){
                                this.adduser.sponname = "";
                              }if(this.adduser.Sponregion == null){
                                this.adduser.Sponregion = "";
                              }if(this.adduser.remarks == null){
                                this.adduser.remarks = "";
                              }if(this.adduser.language1 == null){
                                this.adduser.language1 = "";
                              }if(this.adduser.language2 == null){
                                this.adduser.language2 = "";
                              }if(this.adduser.language3 == null){
                                this.adduser.language3 = "";
                              }if(this.adduser.language4 == null){
                                this.adduser.language4 = "";
                              }if(this.adduser.language5 == null){
                                this.adduser.language5 = "";
                              }if(this.adduser.lanstate1 == null){
                                this.adduser.lanstate1 = "";
                              }if(this.adduser.lanstate2 == null){
                                this.adduser.lanstate2 = "";
                              }if(this.adduser.lanstate3 == null){
                                this.adduser.lanstate3 = "";
                              }if(this.adduser.lanstate4 == null){
                                this.adduser.lanstate4 = "";
                              }if(this.adduser.lanstate5 == null){
                                this.adduser.lanstate5 = "";
                              }if(this.adduser.age == null){
                                this.adduser.age = "";
                              }if(this.adduser.nomiemirror5 == null){
                                this.adduser.nomiemirror5 = "";
                              }if(this.adduser.site_name == null){
                                this.adduser.site_name = "";
                              }if(this.adduser.pf_action == null){
                                this.adduser.pf_action = false;
                              }if(this.adduser.esi_action == null){
                                this.adduser.esi_action = false;
                              }if(this.adduser.prof_action == null){
                                this.adduser.prof_action = false;
                              }if(this.adduser.work_status_action == null){
                                this.adduser.work_status_action = false;
                              }if(this.adduser.prom_in1 == null){
                    this.adduser.prom_in1 = '';
                  }if(this.adduser.prom_in_mobile_no == null){
                    this.adduser.prom_in_mobile_no = '';
                  }if(this.adduser.prom_in_mobile_no1 == null){
                    this.adduser.prom_in_mobile_no1 = '';
                  }if(this.adduser.work_exp == null){
                    this.adduser.work_exp = '';
                  }if(this.adduser.chest == null){
                    this.adduser.chest = '';
                  }if(this.adduser.area == null){
                    this.adduser.area = '';
                  }if(this.adduser.fcontact1 == null){
                    this.adduser.fcontact1 = '';
                  }if(this.adduser.fcontact2 == null){
                    this.adduser.fcontact2 = '';
                  }if(this.adduser.fcontact3 == null){
                    this.adduser.fcontact3 = '';
                  }if(this.adduser.fcontact4 == null){
                    this.adduser.fcontact4 = '';
                  }if(this.adduser.fcontact5 == null){
                    this.adduser.fcontact5 = '';
                  }if(this.adduser.Date_of_birth == '0NaN-NaN-NaNTNaN:NaN:NaN.NaN+NaN:NaN'){
                                this.adduser.Date_of_birth = '';
                              }if(this.adduser.Empid == null) {
                                this.adduser.Empid = '';
                              }if(this.adduser.dispensary == null) {
                                this.adduser.dispensary = '';
                              }if(this.adduser.dor == null) {
                                this.adduser.dor = '';
                              }if(this.adduser.emname == null) {
                                this.adduser.emname = '';
                              }if(this.adduser.prtax_action == null) {
                                this.adduser.prtax_action = false;
                              }if(this.adduser.ucode == null) {
                                this.adduser.ucode = '';
                              }if(this.adduser.hname == null) {
                                this.adduser.hname = '';
                              }if(this.adduser.ccode == null) {
                                this.adduser.ccode = '';
                              }



      console.log(this.adduser);
      });
  });
   }

  ngOnInit() {




  }
  public dateChange(value) {
    console.log(value)
    let a = formatDate(value,'yyyy', 'en-US', '+0530');
    let b  = formatDate(new Date(),'yyyy', 'en-US', '+0530');
    console.log(a,b)
    let c  = +b - +a
    this.adduser.age = ''+c
    console.log(this.adduser.age)

  }

  syncdata(){

  }
//   fetchsite(data) {
//     console.log(data);
//     if ( data === 'BSS') {
//     this.ecodetext = 'S'
//     } else if ( data === 'BSSPL') {
//       this.ecodetext = 'P'
//     } else if ( data === 'MMSPL') {
//       this.ecodetext = 'M'
//     } else if ( data === 'BSST') {
//       this.ecodetext = 'T'
//     } else if ( data === 'BSSC') {
//       this.ecodetext = 'C'
//     } else if ( data === 'BSSR') {
//       this.ecodetext = 'R'
//     } else if ( data === 'BSTR') {
//       this.ecodetext = 'H'
//     } else if ( data === 'BSSK') {
//       this.ecodetext = 'K'
//     } else if ( data === 'BSSB') {
//       this.ecodetext = 'B'
//     }
//     this.http.post('https://bssservice.herokuapp.com/company/fetchcompanysite', {'company_name':data}).subscribe((data:any) => {
//       this.site_names = data.data;
//     console.log(this.site_names);
//   });
// let code = this.ecodetext + this.ecodenumber;
// console.log(code);
// this.http.post('https://bssservice.herokuapp.com/company/fetchemployeeid', {'employee_code':code}).subscribe((data:any) => {
// console.log(code);
// if(data.data[0].ecode === code) {
//   alert('ECODE:' + ' ' + data.data[0].ecode  + ' ' + 'already exist')
// }
// });
//   }


  addapi() {
    console.log(this.adduser)
    this.httpClient.post('https://bssservice.herokuapp.com/authentication/updateemployee',this.adduser).subscribe((data:any) => {
    this.datas = data.data;
    console.log(this.datas);

    this.router.navigate(['main/addemployee2/'+this.employee_id]);
    });
  }

  





}
class Adduser {
  
  id:number;
  employee_type: string;
  father_name: string;
  gender: string;
  material_status: string;
  Edq: string;
  nationality: string;
  languages: string;
  date_joining: string;
  driving_licence: string;
  Email_ID: string;
  Mobile_No: string;
  Name: string;
  Date_of_birth: string;
  Password: string;
  aadhar_card: string;
  voter_id: string;
  Address: string;
  attach: string;
  qrcode: string;
  workstatus: string;
  resigned: string;
  createdtime: string;
  contact: string;
  ifsc: string;
  a_c: string;
  bankname: string;
  account: string;
  prom_in: string;
  pan: string;
  weight: string;
  height: string;
  mother_tongue: string;
  permentaddress: string;
  idtype: string;
  fname1: string;
  fsex1: string;
  frelationship1: string;
  fdateofbirth1: string;
  fage1: string;
  foccupation1: string;
  faadharcard1: string;
  fname2: string;
  fsex2: string;
  frelationship2: string;
  fdateofbirth2: string;
  fage2: string;
  foccupation2: string;
  faadharcard2: string;
  fname3: string;
  fsex3: string;
  frelationship3: string;
  fdateofbirth3: string;
  fage3: string;
  foccupation3: string;
  faadharcard3: string;
  fname4: string;
  fsex4: string;
  frelationship4: string;
  fdateofbirth4: string;
  fage4: string;
  foccupation4: string;
  faadharcard4: string;
  fname5: string;
  fsex5: string;
  frelationship5: string;
  fdateofbirth5: string;
  fage5: string;
  foccupation5: string;
  faadharcard5: string;
  nname1: string;
  nsex1: string;
  nrelationship1: string;
  ndateofbirth1: string;
  nage1: string;
  noccupation1: string;
  naadharcard1: string;
  nname2: string;
  nsex2: string;
  nrelationship2: string;
  ndateofbirth2: string;
  nage2: string;
  noccupation2: string;
  naadharcard2: string;
  nname3: string;
  nsex3: string;
  nrelationship3: string;
  ndateofbirth3: string;
  nage3: string;
  noccupation3: string;
  naadharcard3: string;
  nname4: string;
  nsex4: string;
  nrelationship4: string;
  ndateofbirth4: string;
  nage4: string;
  noccupation4: string;
  naadharcard4: string;
  nname5: string;
  nsex5: string;
  nrelationship5: string;
  ndateofbirth5: string;
  nage5: string;
  noccupation5: string;
  naadharcard5: string;
  language1:string;
language2:string;
language3:string;
language4:string;
language5:string;
lanstate1:string;
lanstate2:string;
lanstate3:string;
lanstate4:string;
lanstate5:string;
Emp_id:string;
  personmark: string;
  nameorg: string;
  position: string;
  servicef: string;
  servicet: string;
  lastsalary: string;
  reasonlev: string;
  nomiename1: string;
  nomieaddress1: string;
  nomiedate1: string;
  nomiefund1: string;
  nomiemirror1: string;
  nomiename2: string;
  nomieaddress2: string;
  nomiedate2: string;
  nomiefund2: string;
  nomiemirror2: string;
  nomiename3: string;
  nomieaddress3: string;
  nomiedate3: string;
  nomiefund3: string;
  nomiemirror3: string;
  nomiename4: string;
  nomieaddress4: string;
  nomiedate4: string;
  nomiefund4: string;
  nomiemirror4: string;
  nomiename5: string;
  nomieaddress5: string;
  nomiedate5: string;
  nomiefund5: string;
  nomiemirror5: string;
  nomierelation1: string;
  nomierelation2: string;
  nomierelation3: string;
  nomierelation4: string;
  nomierelation5: string;
  epf_no: string;
  esic_no: string;
  sponsored_by: string;
  rank: string;
  sponname: string;
  Sponregion: string;
  remarks: string;
  age:string;
  site_name:string;
  company_name: string;
  pf1: string;
  pf2:string;
  pf3:string;
  uan:string;
  esi:string;
  pf_action:boolean;
  esi_action:boolean;
  dispensary:string;
  dor:string;
  Empid:string;
  prtax_action:boolean;
  ucode:string;
  hname:string;
  emname:string;
  ccode:string;
  prof_action:boolean;
  work_status_action: boolean;


  prom_in1:string;
  prom_in_mobile_no:string;
  prom_in_mobile_no1:string;
  work_exp: string;
  chest:string;
  area:string;
  fcontact1:string;
  fcontact2:string;
  fcontact3:string;
  fcontact4:string;
  fcontact5:string;








}
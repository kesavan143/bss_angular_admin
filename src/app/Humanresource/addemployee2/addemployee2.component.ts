import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-addemployee2',
  templateUrl: './addemployee2.component.html',
  styleUrls: ['./addemployee2.component.scss']
})
export class Addemployee2Component implements OnInit {
  id: any;
  titles = [];
  datas: any;
  email_id: any;
  adduser: Adduser;
  details: string;
  qrs: any;
  employee_id: number;

  EyeStatus: boolean;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {
    this.adduser = new Adduser();

    this.route.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number
      console.log('this id: ' + this.id);
      this.http.post('https://bssservice.herokuapp.com/authentication/employee_id', { employee_id: "" + this.id }).subscribe((data: any) => {
        this.adduser = data.data;
        if (this.adduser.employee_type == null) {
          this.adduser.employee_type = "";
        }
        if (this.adduser.father_name == null) {
          this.adduser.father_name = "";
        }
        if (this.adduser.gender == null) {
          this.adduser.gender = "";
        }
        if (this.adduser.material_status == null) {
          this.adduser.material_status = "";
        }
        if (this.adduser.nationality == null) {
          this.adduser.nationality = "";
        }
        if (this.adduser.languages == null) {
          this.adduser.languages = "";
        }
        if (this.adduser.date_joining == null) {
          this.adduser.date_joining = "";
        }
        if (this.adduser.driving_licence == null) {
          this.adduser.driving_licence = "";
        }
        if (this.adduser.Email_ID == null) {
          this.adduser.Email_ID = "";
        }
        if (this.adduser.Mobile_No == null) {
          this.adduser.Mobile_No = "";
        }
        if (this.adduser.Name == null) {
          this.adduser.Name = "";
        }
        if (this.adduser.Date_of_birth == null) {
          this.adduser.Date_of_birth = "";
        }
        if (this.adduser.company_name == null) {
          this.adduser.company_name = "";
        }
        if (this.adduser.pf1 == null) {
          this.adduser.pf1 = "";
        }
        if (this.adduser.pf2 == null) {
          this.adduser.pf2 = "";
        }
        if (this.adduser.pf3 == null) {
          this.adduser.pf3 = "";
        }
        if (this.adduser.uan == null) {
          this.adduser.uan = "";
        }
        if (this.adduser.Password == null) {
          this.adduser.Password = "";
        }
        if (this.adduser.aadhar_card == null) {
          this.adduser.aadhar_card = "";
        }
        if (this.adduser.voter_id == null) {
          this.adduser.voter_id = "";
        }
        if (this.adduser.Address == null) {
          this.adduser.Address = "";
        }
        if (this.adduser.qrcode == null) {
          this.adduser.qrcode = "";
        }
        if (this.adduser.attach == null) {
          this.adduser.attach = "";
        }
        if (this.adduser.workstatus == null) {
          this.adduser.workstatus = "";
        }
        if (this.adduser.resigned == null) {
          this.adduser.resigned = "";
        }
        if (this.adduser.createdtime == null) {
          this.adduser.createdtime = "";
        }
        if (this.adduser.contact == null) {
          this.adduser.contact = "";
        }
        if (this.adduser.ifsc == null) {
          this.adduser.ifsc = "";
        }
        if (this.adduser.a_c == null) {
          this.adduser.a_c = "";
        }
        if (this.adduser.bankname == null) {
          this.adduser.bankname = "";
        }
        if (this.adduser.account == null) {
          this.adduser.account = "";
        }
        if (this.adduser.prom_in == null) {
          this.adduser.prom_in = "";
        }
        if (this.adduser.pan == null) {
          this.adduser.pan = "";
        }
        if (this.adduser.weight == null) {
          this.adduser.weight = "";
        }
        if (this.adduser.height == null) {
          this.adduser.height = "";
        }
        if (this.adduser.permentaddress == null) {
          this.adduser.permentaddress = "";
        }
        if (this.adduser.idtype == null) {
          this.adduser.idtype = "";
        }
        if (this.adduser.fname1 == null) {
          this.adduser.fname1 = "";
        }
        if (this.adduser.fsex1 == null) {
          this.adduser.fsex1 = "";
        }
        if (this.adduser.frelationship1 == null) {
          this.adduser.frelationship1 = "";
        }
        if (this.adduser.fdateofbirth1 == null) {
          this.adduser.fdateofbirth1 = "";
        }
        if (this.adduser.fage1 == null) {
          this.adduser.fage1 = "";
        }
        if (this.adduser.foccupation1 == null) {
          this.adduser.foccupation1 = "";
        }
        if (this.adduser.faadharcard1 == null) {
          this.adduser.faadharcard1 = "";
        }
        if (this.adduser.fname2 == null) {
          this.adduser.fname2 = "";
        }
        if (this.adduser.fsex2 == null) {
          this.adduser.fsex2 = "";
        }
        if (this.adduser.frelationship2 == null) {
          this.adduser.frelationship2 = "";
        }
        if (this.adduser.fdateofbirth2 == null) {
          this.adduser.fdateofbirth2 = "";
        }
        if (this.adduser.fage2 == null) {
          this.adduser.fage2 = "";
        }
        if (this.adduser.foccupation2 == null) {
          this.adduser.foccupation2 = "";
        }
        if (this.adduser.faadharcard2 == null) {
          this.adduser.faadharcard2 = "";
        }
        if (this.adduser.fname3 == null) {
          this.adduser.fname3 = "";
        }
        if (this.adduser.fsex3 == null) {
          this.adduser.fsex3 = "";
        }
        if (this.adduser.frelationship3 == null) {
          this.adduser.frelationship3 = "";
        }
        if (this.adduser.fdateofbirth3 == null) {
          this.adduser.fdateofbirth3 = "";
        }
        if (this.adduser.fage3 == null) {
          this.adduser.fage3 = "";
        }
        if (this.adduser.foccupation3 == null) {
          this.adduser.foccupation3 = "";
        }
        if (this.adduser.faadharcard3 == null) {
          this.adduser.faadharcard3 = "";
        }
        if (this.adduser.fname4 == null) {
          this.adduser.fname4 = "";
        }
        if (this.adduser.fsex4 == null) {
          this.adduser.fsex4 = "";
        }
        if (this.adduser.frelationship4 == null) {
          this.adduser.frelationship4 = "";
        }
        if (this.adduser.fdateofbirth4 == null) {
          this.adduser.fdateofbirth4 = "";
        }
        if (this.adduser.fage4 == null) {
          this.adduser.fage4 = "";
        }
        if (this.adduser.foccupation4 == null) {
          this.adduser.foccupation4 = "";
        }
        if (this.adduser.faadharcard4 == null) {
          this.adduser.faadharcard4 = "";
        }
        if (this.adduser.fname5 == null) {
          this.adduser.fname5 = "";
        }
        if (this.adduser.fsex5 == null) {
          this.adduser.fsex5 = "";
        }
        if (this.adduser.frelationship5 == null) {
          this.adduser.frelationship5 = "";
        }
        if (this.adduser.fdateofbirth5 == null) {
          this.adduser.fdateofbirth5 = "";
        }
        if (this.adduser.fage5 == null) {
          this.adduser.fage5 = "";
        }
        if (this.adduser.foccupation5 == null) {
          this.adduser.foccupation5 = "";
        }
        if (this.adduser.faadharcard5 == null) {
          this.adduser.faadharcard5 = "";
        }
        if (this.adduser.nname1 == null) {
          this.adduser.nname1 = "";
        }
        if (this.adduser.nsex1 == null) {
          this.adduser.nsex1 = "";
        }
        if (this.adduser.nrelationship1 == null) {
          this.adduser.nrelationship1 = "";
        }
        if (this.adduser.ndateofbirth1 == null) {
          this.adduser.ndateofbirth1 = "";
        }
        if (this.adduser.nage1 == null) {
          this.adduser.nage1 = "";
        }
        if (this.adduser.noccupation1 == null) {
          this.adduser.noccupation1 = "";
        }
        if (this.adduser.naadharcard1 == null) {
          this.adduser.naadharcard1 = "";
        }
        if (this.adduser.nname2 == null) {
          this.adduser.nname2 = "";
        }
        if (this.adduser.nsex2 == null) {
          this.adduser.nsex2 = "";
        }
        if (this.adduser.nrelationship2 == null) {
          this.adduser.nrelationship2 = "";
        }
        if (this.adduser.ndateofbirth2 == null) {
          this.adduser.ndateofbirth2 = "";
        }
        if (this.adduser.nage2 == null) {
          this.adduser.nage2 = "";
        }
        if (this.adduser.noccupation2 == null) {
          this.adduser.noccupation2 = "";
        }
        if (this.adduser.naadharcard2 == null) {
          this.adduser.naadharcard2 = "";
        }
        if (this.adduser.nname3 == null) {
          this.adduser.nname3 = "";
        }
        if (this.adduser.nsex3 == null) {
          this.adduser.nsex3 = "";
        }
        if (this.adduser.nrelationship3 == null) {
          this.adduser.nrelationship3 = "";
        }
        if (this.adduser.ndateofbirth3 == null) {
          this.adduser.ndateofbirth3 = "";
        }
        if (this.adduser.nage3 == null) {
          this.adduser.nage3 = "";
        }
        if (this.adduser.noccupation3 == null) {
          this.adduser.noccupation3 = "";
        }
        if (this.adduser.naadharcard3 == null) {
          this.adduser.naadharcard3 = "";
        }
        if (this.adduser.nname4 == null) {
          this.adduser.nname4 = "";
        }
        if (this.adduser.nsex4 == null) {
          this.adduser.nsex4 = "";
        }
        if (this.adduser.nrelationship4 == null) {
          this.adduser.nrelationship4 = "";
        }
        if (this.adduser.ndateofbirth4 == null) {
          this.adduser.ndateofbirth4 = "";
        }
        if (this.adduser.nage4 == null) {
          this.adduser.nage4 = "";
        }
        if (this.adduser.noccupation4 == null) {
          this.adduser.noccupation4 = "";
        }
        if (this.adduser.naadharcard4 == null) {
          this.adduser.naadharcard4 = "";
        }
        if (this.adduser.nname5 == null) {
          this.adduser.nname5 = "";
        }
        if (this.adduser.nsex5 == null) {
          this.adduser.nsex5 = "";
        }
        if (this.adduser.nrelationship5 == null) {
          this.adduser.nrelationship5 = "";
        }
        if (this.adduser.ndateofbirth5 == null) {
          this.adduser.ndateofbirth5 = "";
        }
        if (this.adduser.nage5 == null) {
          this.adduser.nage5 = "";
        }
        if (this.adduser.noccupation5 == null) {
          this.adduser.noccupation5 = "";
        }
        if (this.adduser.naadharcard5 == null) {
          this.adduser.naadharcard5 = "";
        }
        if (this.adduser.mother_tongue == null) {
          this.adduser.mother_tongue = "";
        }
        if (this.adduser.mother_tongue_state == null) {
          this.adduser.mother_tongue_state = "";
        }
        if (this.adduser.Edq == null) {
          this.adduser.Edq = "";
        }
        if (this.adduser.language1 == null) {
          this.adduser.language1 = "";
        } if (this.adduser.language2 == null) {
          this.adduser.language2 = "";
        } if (this.adduser.language3 == null) {
          this.adduser.language3 = "";
        } if (this.adduser.language4 == null) {
          this.adduser.language4 = "";
        } if (this.adduser.language5 == null) {
          this.adduser.language5 = "";
        } if (this.adduser.lanstate1 == null) {
          this.adduser.lanstate1 = "";
        } if (this.adduser.lanstate2 == null) {
          this.adduser.lanstate2 = "";
        } if (this.adduser.lanstate3 == null) {
          this.adduser.lanstate3 = "";
        } if (this.adduser.lanstate4 == null) {
          this.adduser.lanstate4 = "";
        } if (this.adduser.lanstate5 == null) {
          this.adduser.lanstate5 = "";
        } if (this.adduser.personmark == null) {
          this.adduser.personmark = "";
        } if (this.adduser.personmark1 == null) {
          this.adduser.personmark1 = "";
        }
        if (this.adduser.nameorg == null) {
          this.adduser.nameorg = "";
        }
        if (this.adduser.position == null) {
          this.adduser.position = "";
        }
        if (this.adduser.servicef == null) {
          this.adduser.servicef = "";
        }
        if (this.adduser.servicet == null) {
          this.adduser.servicet = "";
        }
        if (this.adduser.lastsalary == null) {
          this.adduser.lastsalary = "";
        }
        if (this.adduser.reasonlev == null) {
          this.adduser.reasonlev = "";
        }
        if (this.adduser.nomiename1 == null) {
          this.adduser.nomiename1 = "";
        } if (this.adduser.nomieaddress1 == null) {
          this.adduser.nomieaddress1 = "";
        }
        if (this.adduser.nomierelation1 == null) {
          this.adduser.nomierelation1 = "";
        }
        if (this.adduser.nomiedate1 == null) {
          this.adduser.nomiedate1 = "";
        }
        if (this.adduser.nomiefund1 == null) {
          this.adduser.nomiefund1 = "";
        }
        if (this.adduser.nomiemirror1 == null) {
          this.adduser.nomiemirror1 = "";
        }
        if (this.adduser.nomiename2 == null) {
          this.adduser.nomiename2 = "";
        }
        if (this.adduser.nomieaddress2 == null) {
          this.adduser.nomieaddress2 = "";
        }
        if (this.adduser.nomierelation2 == null) {
          this.adduser.nomierelation2 = "";
        } if (this.adduser.nomiedate2 == null) {
          this.adduser.nomiedate2 = "";
        }
        if (this.adduser.nomiefund2 == null) {
          this.adduser.nomiefund2 = "";
        }
        if (this.adduser.nomiemirror2 == null) {
          this.adduser.nomiemirror2 = "";
        }
        if (this.adduser.nomiename3 == null) {
          this.adduser.nomiename3 = "";
        }
        if (this.adduser.nomieaddress3 == null) {
          this.adduser.nomieaddress3 = "";
        }
        if (this.adduser.nomierelation3 == null) {
          this.adduser.nomierelation3 = "";
        }
        if (this.adduser.nomiedate3 == null) {
          this.adduser.nomiedate3 = "";
        }
        if (this.adduser.nomiefund3 == null) {
          this.adduser.nomiefund3 = "";
        } if (this.adduser.nomiemirror3 == null) {
          this.adduser.nomiemirror3 = "";
        }
        if (this.adduser.nomiename4 == null) {
          this.adduser.nomiename4 = "";
        }
        if (this.adduser.nomieaddress4 == null) {
          this.adduser.nomieaddress4 = "";
        }
        if (this.adduser.nomierelation4 == null) {
          this.adduser.nomierelation4 = "";
        }
        if (this.adduser.nomiedate4 == null) {
          this.adduser.nomiedate4 = "";
        }
        if (this.adduser.nomiefund4 == null) {
          this.adduser.nomiefund4 = "";
        }
        if (this.adduser.nomiemirror4 == null) {
          this.adduser.nomiemirror4 = "";
        }
        if (this.adduser.nomiename5 == null) {
          this.adduser.nomiename5 = "";
        } if (this.adduser.nomieaddress5 == null) {
          this.adduser.nomieaddress5 = "";
        } if (this.adduser.nomierelation5 == null) {
          this.adduser.nomierelation5 = "";
        } if (this.adduser.nomiedate5 == null) {
          this.adduser.nomiedate5 = "";
        } if (this.adduser.nomiefund5 == null) {
          this.adduser.nomiefund5 = "";
        } if (this.adduser.epf_no == null) {
          this.adduser.epf_no = "";
        } if (this.adduser.esic_no == null) {
          this.adduser.esic_no = "";
        } if (this.adduser.sponsored_by == null) {
          this.adduser.sponsored_by = "";
        } if (this.adduser.rank == null) {
          this.adduser.rank = "";
        } if (this.adduser.sponname == null) {
          this.adduser.sponname = "";
        } if (this.adduser.Sponregion == null) {
          this.adduser.Sponregion = "";
        } if (this.adduser.remarks == null) {
          this.adduser.remarks = "";
        } if (this.adduser.language1 == null) {
          this.adduser.language1 = "";
        } if (this.adduser.language2 == null) {
          this.adduser.language2 = "";
        } if (this.adduser.language3 == null) {
          this.adduser.language3 = "";
        } if (this.adduser.language4 == null) {
          this.adduser.language4 = "";
        } if (this.adduser.language5 == null) {
          this.adduser.language5 = "";
        } if (this.adduser.lanstate1 == null) {
          this.adduser.lanstate1 = "";
        } if (this.adduser.lanstate2 == null) {
          this.adduser.lanstate2 = "";
        } if (this.adduser.lanstate3 == null) {
          this.adduser.lanstate3 = "";
        } if (this.adduser.lanstate4 == null) {
          this.adduser.lanstate4 = "";
        } if (this.adduser.lanstate5 == null) {
          this.adduser.lanstate5 = "";
        } if (this.adduser.age == null) {
          this.adduser.age = "";
        } if (this.adduser.nomiemirror5 == null) {
          this.adduser.nomiemirror5 = "";
        }
        if (this.adduser.Spectacles == null) {
          this.adduser.Spectacles = 'No';
        } if (this.adduser.RightEyePower == null) {
          this.adduser.RightEyePower = 'N/A';
        } if (this.adduser.LeftEyePower == null) {
          this.adduser.LeftEyePower = 'N/A';
        } if (this.adduser.School_CollegeName == null) {
          this.adduser.School_CollegeName = '';
        } if (this.adduser.School_CollegeAddress == null) {
          this.adduser.School_CollegeAddress = '';
        } if (this.adduser.HigherClassStudied == null) {
          this.adduser.HigherClassStudied = '';
        } if (this.adduser.StudiedYear == null) {
          this.adduser.StudiedYear = '';
        } if (this.adduser.StudiedResultStatus == null) {
          this.adduser.StudiedResultStatus = 'Pass';
        }
        if (this.adduser.Spectacles === 'Yes') {
          this.EyeStatus = true;
        } else if (this.adduser.Spectacles === 'No') {
          this.EyeStatus = false;
        }

        if (this.adduser.TC_No == null) {
          this.adduser.TC_No = '';
        } if (this.adduser.TC_Type == null) {
          this.adduser.TC_Type = '';
        } if (this.adduser.MarkSheet_of == null) {
          this.adduser.MarkSheet_of = '';
        } if (this.adduser.MarkSheet_of_Type == null) {
          this.adduser.MarkSheet_of_Type = '';
        } if (this.adduser.Games == null) {
          this.adduser.Games = '';
        } if (this.adduser.Hobbies == null) {
          this.adduser.Hobbies = '';
        } if (this.adduser.RecOfIntWrittenWork == null) {
          this.adduser.RecOfIntWrittenWork = '';
        } if (this.adduser.RecOfIntAppearance == null) {
          this.adduser.RecOfIntAppearance = '';
        } if (this.adduser.RecOfIntFirstImperssion == null) {
          this.adduser.RecOfIntFirstImperssion = '';
        } if (this.adduser.RecOfIntResult == null) {
          this.adduser.RecOfIntResult = '';
        } if (this.adduser.RecOfIntDesignationEntry == null) {
          this.adduser.RecOfIntDesignationEntry = '';
        } if (this.adduser.RecOfIntToBePostedTo == null) {
          this.adduser.RecOfIntToBePostedTo = '';
        } if (this.adduser.RecOfIntRemarks == null) {
          this.adduser.RecOfIntRemarks = '';
        }
        this.adduser.nomiedate1 = this.adduser.ndateofbirth1;
        this.adduser.nomiedate2 = this.adduser.ndateofbirth2;
        this.adduser.nomiedate3 = this.adduser.ndateofbirth3;
        this.adduser.nomiedate4 = this.adduser.ndateofbirth4;
        this.adduser.nomiedate5 = this.adduser.ndateofbirth5;

        this.adduser.nomiename1 = this.adduser.nname1;
        this.adduser.nomiename2 = this.adduser.nname2;
        this.adduser.nomiename3 = this.adduser.nname3;
        this.adduser.nomiename4 = this.adduser.nname4;
        this.adduser.nomiename5 = this.adduser.nname5;

        this.adduser.nomierelation1 = this.adduser.nrelationship1;
        this.adduser.nomierelation2 = this.adduser.nrelationship2;
        this.adduser.nomierelation3 = this.adduser.nrelationship3;
        this.adduser.nomierelation4 = this.adduser.nrelationship4;
        this.adduser.nomierelation5 = this.adduser.nrelationship5;

        this.adduser.nomieaddress1 = this.adduser.Address;
        this.adduser.nomieaddress2 = this.adduser.Address;
        this.adduser.nomieaddress3 = this.adduser.Address;
        this.adduser.nomieaddress4 = this.adduser.Address;
        this.adduser.nomieaddress5 = this.adduser.Address;
        console.log(this.adduser);
      });
    });
  }
  ngOnInit() {


  }

  onSpectacles(value) {
    if (value === 'Yes') {
      this.EyeStatus = true;
      console.log(this.EyeStatus);
    } else if (value === 'No') {
      this.EyeStatus = false;
      console.log(this.EyeStatus);
    }
  }
  check() {
    if (this.adduser.Spectacles === 'No') {
      this.adduser.RightEyePower = 'N/A';
      this.adduser.LeftEyePower = 'N/A';
    }
    this.http.post('https://bssservice.herokuapp.com/authentication/updateemployee1', {
      "Emp_id": "" + this.id,
      "personmark": this.adduser.personmark,
      "personmark1": this.adduser.personmark1,
      "nameorg": this.adduser.nameorg,
      "position": this.adduser.position,
      "servicef": this.adduser.servicef,
      "servicet": this.adduser.servicet,
      "lastsalary": this.adduser.lastsalary,
      "reasonlev": this.adduser.reasonlev,
      "nomiename1": this.adduser.nomiename1,
      "nomieaddress1": this.adduser.nomieaddress1,
      "nomiedate1": this.adduser.nomiedate1,
      "nomiefund1": this.adduser.nomiefund1,
      "nomiemirror1": this.adduser.nomiemirror1,
      "nomiename2": this.adduser.nomiename2,
      "nomieaddress2": this.adduser.nomieaddress2,
      "nomiedate2": this.adduser.nomiedate2,
      "nomiefund2": this.adduser.nomiefund2,
      "nomiemirror2": this.adduser.nomiemirror2,
      "nomiename3": this.adduser.nomiename3,
      "nomieaddress3": this.adduser.nomieaddress3,
      "nomiedate3": this.adduser.nomiedate3,
      "nomiefund3": this.adduser.nomiefund3,
      "nomiemirror3": this.adduser.nomiemirror3,
      "nomiename4": this.adduser.nomiename4,
      "nomieaddress4": this.adduser.nomieaddress4,
      "nomiedate4": this.adduser.nomiedate4,
      "nomiefund4": this.adduser.nomiefund4,
      "nomiemirror4": this.adduser.nomiemirror4,
      "nomiename5": this.adduser.nomiename5,
      "nomieaddress5": this.adduser.nomieaddress5,
      "nomiedate5": this.adduser.nomiedate5,
      "nomiefund5": this.adduser.nomiefund5,
      "nomiemirror5": this.adduser.nomiemirror5,
      "nomierelation1": this.adduser.nomierelation1,
      "nomierelation2": this.adduser.nomierelation2,
      "nomierelation3": this.adduser.nomierelation3,
      "nomierelation4": this.adduser.nomierelation4,
      "nomierelation5": this.adduser.nomierelation5,
      "epf_no": this.adduser.epf_no,
      "esic_no": this.adduser.esic_no,
      "sponsored_by": this.adduser.sponsored_by,
      "rank": this.adduser.rank,
      "sponname": this.adduser.sponname,
      "Sponregion": this.adduser.Sponregion,
      "remarks": this.adduser.remarks,
      "language1": this.adduser.language1,
      "language2": this.adduser.language2,
      "language3": this.adduser.language3,
      "language4": this.adduser.language4,
      "language5": this.adduser.language5,
      "lanstate1": this.adduser.lanstate1,
      "lanstate2": this.adduser.lanstate2,
      "lanstate3": this.adduser.lanstate3,
      "lanstate4": this.adduser.lanstate4,
      "lanstate5": this.adduser.lanstate5,
      'Spectacles': this.adduser.Spectacles,
      'RightEyePower': this.adduser.RightEyePower,
      'LeftEyePower': this.adduser.LeftEyePower,
      'School_CollegeName': this.adduser.School_CollegeName,
      'School_CollegeAddress': this.adduser.School_CollegeAddress,
      'HigherClassStudied': this.adduser.HigherClassStudied,
      'StudiedYear': this.adduser.StudiedYear,
      'StudiedResultStatus': this.adduser.StudiedResultStatus,

      'TC_No': this.adduser.TC_No,
      'TC_Type': this.adduser.TC_Type,
      'MarkSheet_of': this.adduser.MarkSheet_of,
      'MarkSheet_of_Type': this.adduser.MarkSheet_of_Type,
      'Games': this.adduser.Games,
      'Hobbies': this.adduser.Hobbies,
      'RecOfIntWrittenWork': this.adduser.RecOfIntWrittenWork,
      'RecOfIntAppearance': this.adduser.RecOfIntAppearance,
      'RecOfIntFirstImperssion': this.adduser.RecOfIntFirstImperssion,
      'RecOfIntResult': this.adduser.RecOfIntResult,
      'RecOfIntDesignationEntry': this.adduser.RecOfIntDesignationEntry,
      'RecOfIntToBePostedTo': this.adduser.RecOfIntToBePostedTo,
      'RecOfIntRemarks': this.adduser.RecOfIntRemarks,

      'mother_tongue_state': this.adduser.mother_tongue,
      'mother_tongue': this.adduser.mother_tongue
    }).subscribe((data: any) => {
      this.adduser = data.data;
      console.log(this.adduser);
      this.router.navigate(['main/attachment/' + this.id])
    });
  }
}




class Adduser {
  Emp_id: string;
  personmark: string;
  personmark1: string;
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
  language1: string;
  language2: string;
  language3: string;
  language4: string;
  language5: string;
  lanstate1: string;
  lanstate2: string;
  lanstate3: string;
  lanstate4: string;
  lanstate5: string;
  age: string;

  id: number;
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
  mother_tongue_state: string;
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
  site_name: string;
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

  company_name: string;
  pf1: string;
  pf2: string;
  pf3: string;
  uan: string;

  Spectacles: string;
  RightEyePower: string;
  LeftEyePower: string;
  School_CollegeName: string;
  School_CollegeAddress: string;
  HigherClassStudied: string;
  StudiedYear: string;
  StudiedResultStatus: string;

  TC_No: string;
  TC_Type: string;
  MarkSheet_of: string;
  MarkSheet_of_Type: string;
  Games: string;
  Hobbies: string;
  RecOfIntWrittenWork: string;
  RecOfIntAppearance: string;
  RecOfIntFirstImperssion: string;
  RecOfIntResult: string;
  RecOfIntDesignationEntry: string;
  RecOfIntToBePostedTo: string;
  RecOfIntRemarks: string;
}
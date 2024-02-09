import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NgModule, ChangeDetectionStrategy } from '@angular/core';
import { DashboardPageComponent } from '../pages/dashboard-page/dashboard-page.component';
import { LoginPageComponent } from '../pages/login-page/login-page.component';
import { MainPageComponent } from '../pages/main-page/main-page.component';
import { RegisterPageComponent } from '../pages/register-page/register-page.component';
import { DatepickerPageComponent } from '../pages/datepicker-page/datepicker-page.component';
import { SchoolmanagementComponent } from '../Salesteam/schoolmanagement/schoolmanagement.component';
import { ForgotpswdComponent } from '../pages/forgotpswd/forgotpswd.component';
import { ChangepaswordComponent } from '../pages/changepasword/changepasword.component';
import { ViewuserComponent } from '../Users/viewuser/viewuser.component';
import { ViewemployeesComponent } from '../Humanresource/viewemployees/viewemployees.component';
import { EmployeedetailsComponent } from '../Humanresource/employeedetails/employeedetails.component';
import { AddclientComponent } from '../Salesteam/addclient/addclient.component';
import { UpdateemployeeComponent } from '../Humanresource/updateemployee/updateemployee.component';
import { AddemployeeComponent } from '../Humanresource/addemployee/addemployee.component';
import { AdduserComponent } from '../Users/adduser/adduser.component';
import { UserdetailsComponent } from '../Users/userdetails/userdetails.component';
import { OperationcomplaintlistComponent } from '../operationteam/operationcomplaintlist/operationcomplaintlist.component';
import { OperacomcompleteviewComponent } from '../operationteam/operacomcompleteview/operacomcompleteview.component';
import { OperacominprogresslistComponent } from '../operationteam/operacominprogresslist/operacominprogresslist.component';
import { OperacomcompletelistComponent } from '../operationteam/operacomcompletelist/operacomcompletelist.component';
import { EmployeeComponent } from '../searchquery/employee/employee.component';
import { ClientComponent } from '../searchquery/client/client.component';
import { OperationcomlistComponent } from '../operationteam/operationcomlist/operationcomlist.component';
import { OperationfeedlistComponent } from '../operationteam/operationfeedlist/operationfeedlist.component';
import { ViewdetailsComponent } from 'app/Users/viewdetails/viewdetails.component';
import { ConfigurenumberComponent } from 'app/operationteam/configurenumber/configurenumber.component';
import { SettrainingComponent } from 'app/operationteam/settraining/settraining.component';
import { SettrainingvideosComponent } from 'app/operationteam/settrainingvideos/settrainingvideos.component';
import { SettraininglistComponent } from 'app/operationteam/settraininglist/settraininglist.component';
import { SettraininglessonsComponent } from 'app/operationteam/settraininglessons/settraininglessons.component';
import { EmployeetrackingComponent } from 'app/employeetracking/employeetracking.component';
import { FAQComponent } from 'app/operationteam/faq/faq.component';
import { ExamlistComponent } from 'app/operationteam/examlist/examlist.component';
import { QuestionpaperComponent } from 'app/operationteam/questionpaper/questionpaper.component';
import { PointtrackComponent } from 'app/operationteam/pointtracking/pointtrack/pointtrack.component';
import { PointtrackdetailsComponent } from 'app/operationteam/pointtracking/pointtrackdetails/pointtrackdetails.component'
import { PointTrackMapSpotsComponent } from 'app/Tracking/point-track-map-spots/point-track-map-spots.component';
import { PointTrackRecordsSpotsComponent } from 'app/Tracking/point-track-records-spots/point-track-records-spots.component';
import { PointTrackRecordslistComponent } from 'app/Tracking/point-track-recordslist/point-track-recordslist.component';
import { attachEmbeddedView } from '@angular/core/src/view';
import { CreateqrComponent } from 'app/Attendance/createqr/createqr.component';
import { AttendanceAllComponent } from 'app/Attendance/attendance-all/attendance-all.component';
import { AttendancedateComponent } from 'app/Attendance/attendancedate/attendancedate.component';
import { AttendanceweeklyComponent } from 'app/Attendance/attendanceweekly/attendanceweekly.component';
import { AttendanceMonthlyComponent } from 'app/Attendance/attendance-monthly/attendance-monthly.component';
import { AttendancecustomComponent } from 'app/Attendance/attendancecustom/attendancecustom.component';
import { AttendanceyearlyComponent } from 'app/Attendance/attendanceyearly/attendanceyearly.component';
import { Addclietn2Component } from 'app/Salesteam/addclietn2/addclietn2.component';
import { AssignlistComponent } from 'app/operationteam/assignlist/assignlist.component';
import { AddassignComponent } from 'app/operationteam/addassign/addassign.component';
import { AssignviewComponent } from 'app/operationteam/assignview/assignview.component';
import { SmsComponent } from 'app/operationteam/sms/sms.component';
import { ResignedemployeesComponent } from '../Humanresource/resignedemployees/resignedemployees.component';
import { ResignedusersComponent } from '../Users/resignedusers/resignedusers.component';
import { ComplainthistoryComponent } from '../operationteam/complainthistory/complainthistory.component';
import { ClosedissuesComponent } from 'app/operationteam/closedissues/closedissues.component';
import { ClosedissuesviewComponent } from 'app/operationteam/closedissuesview/closedissuesview.component';
import { Addemployee2Component } from 'app/Humanresource/addemployee2/addemployee2.component';
import { AttachmentComponent } from 'app/Humanresource/attachment/attachment.component';
import { ReportComponent } from 'app/Humanresource/report/report.component';
import { ClientsiteComponent } from 'app/Salesteam/clientsite/clientsite.component';
import { ContractComponent } from 'app/Salesteam/contract/contract.component';
import { AddclientsiteComponent } from 'app/Salesteam/addclientsite/addclientsite.component';
import { AddcontractComponent } from 'app/Salesteam/addcontract/addcontract.component';
import { EditclientsiteComponent } from 'app/Salesteam/editclientsite/editclientsite.component';
import { PaymentpageComponent } from 'app/Salesteam/paymentpage/paymentpage.component';
import { AddpaymentComponent } from 'app/Salesteam/addpayment/addpayment.component';
import { UpdatepaymentComponent } from 'app/Salesteam/updatepayment/updatepayment.component';
import { AddrequirementComponent } from 'app/Salesteam/addrequirement/addrequirement.component';
import { ViewclientComponent } from 'app/Salesteam/viewclient/viewclient.component';
import { ViewsiteComponent } from 'app/Salesteam/viewsite/viewsite.component';
import { UpdateclientComponent } from 'app/Salesteam/updateclient/updateclient.component';
import { UniformComponent } from 'app/Humanresource/uniform/uniform.component';
import { PrintComponent } from 'app/Humanresource/print/print.component';
import { ClientattachmentComponent } from 'app/Salesteam/clientattachment/clientattachment.component';
import { UniformlistComponent } from 'app/Humanresource/uniformlist/uniformlist.component';
import { ViewuniformComponent } from 'app/Humanresource/viewuniform/viewuniform.component';
import { ItemsComponent } from 'app/Master/items/items.component';
import { EmployeetypeComponent } from 'app/Master/employeetype/employeetype.component';
import { ListdetailsComponent } from 'app/Finance/listdetails/listdetails.component';
import { CreatebillComponent } from 'app/Finance/createbill/createbill.component';
import { PrintbillComponent } from 'app/Finance/printbill/printbill.component';
import { UpdatebillComponent } from 'app/Finance/updatebill/updatebill.component';
import { TrainingReoprtComponent } from 'app/Salesteam/training-reoprt/training-reoprt.component';
import { QualitycheckComponent } from 'app/Salesteam/qualitycheck/qualitycheck.component';
import { NightreportComponent } from 'app/Salesteam/nightreport/nightreport.component';
import { ViewTrainingReoprtComponent } from 'app/Salesteam/view-training-reoprt/view-training-reoprt.component';
import { ViewqualitycheckComponent } from 'app/Salesteam/viewqualitycheck/viewqualitycheck.component';
import { ViewnightreportComponent } from 'app/Salesteam/viewnightreport/viewnightreport.component';
import { ContractPageComponent } from 'app/Salesteam/contract-page/contract-page.component';
import { ViewcontractpageComponent } from 'app/Salesteam/viewcontractpage/viewcontractpage.component';
import { EditcontractComponent } from 'app/Salesteam/editcontract/editcontract.component';
import { ViewpaymentsComponent } from 'app/Salesteam/viewpayments/viewpayments.component';
import { ViewfullpaymentsComponent } from 'app/Salesteam/viewfullpayments/viewfullpayments.component';
import { UpdatecontractsComponent } from 'app/Salesteam/updatecontracts/updatecontracts.component';
import { AdduniformComponent } from 'app/Humanresource/adduniform/adduniform.component';
import { LeftemployeeComponent } from 'app/Humanresource/leftemployee/leftemployee.component';
import { EmployeeReportComponent } from 'app/Humanresource/employee-report/employee-report.component';
import { TestComponent } from 'app/test/test.component';
import { EmployeehistroyComponent } from 'app/employeetracking/employeehistroy/employeehistroy.component';
import { Test2Component } from 'app/test2/test2.component';
import { ClientdetailsComponent } from 'app/operationteam/clientdetails/clientdetails.component';
import { SiteDetailsComponent } from 'app/operationteam/site-details/site-details.component';
import { NotificationnewComponent } from 'app/Notification/notificationnew/notificationnew.component';
import { NotificationReadedComponent } from 'app/Notification/notification-readed/notification-readed.component';
import { ViewnotificationsComponent } from 'app/Notification/viewnotifications/viewnotifications.component';
import { EmployeelistComponent } from 'app/payroll/employeelist/employeelist.component';
import { CalenderlistComponent } from 'app/payroll/calenderlist/calenderlist.component';
import { AssignclientlistComponent } from 'app/operationteam/assignclientlist/assignclientlist.component';
import { AssignsitelistComponent } from 'app/operationteam/assignsitelist/assignsitelist.component';
import { AssignemployeelistComponent } from 'app/operationteam/assignemployeelist/assignemployeelist.component';
import { AssignalllistComponent } from 'app/operationteam/assignalllist/assignalllist.component';
import { PaymentdetailsComponent } from 'app/payroll/paymentdetails/paymentdetails.component';
import { advanceActivatedRoute } from '@angular/router/src/router_state';
import { AdvancelistComponent } from 'app/payroll/advancelist/advancelist.component';
import { AddcompanyComponent } from 'app/Master/addcompany/addcompany.component';
import { SaleryprocessstatementComponent } from 'app/payroll/saleryprocessstatement/saleryprocessstatement.component';
import { SaleryprocessprintComponent } from 'app/payroll/saleryprocessprint/saleryprocessprint.component';
import { ManualpayrollComponent } from 'app/payroll/manualpayroll/manualpayroll.component';
import { PaymentprocessComponent } from 'app/payroll/paymentprocess/paymentprocess.component';
import { ManualEntryEmpComponent } from 'app/payroll/manual-entry-emp/manual-entry-emp.component';
import { ManualEntryUnitComponent } from 'app/payroll/manual-entry-unit/manual-entry-unit.component';
import { UnitwiseComponent } from 'app/payroll/unitwise/unitwise.component';
import { RepotsalllComponent } from 'app/payroll/repotsalll/repotsalll.component';
import { ReprotscollectionComponent } from 'app/payroll/reprotscollection/reprotscollection.component';

// tables
import { EmplistRptComponent } from 'app/report/emplist-rpt/emplist-rpt.component';
import { DesignationRptComponent } from 'app/report/designation-rpt/designation-rpt.component';
import { UnitmasterRptComponent } from 'app/report/unitmaster-rpt/unitmaster-rpt.component';
import { EmivouchersRptComponent } from 'app/report/emivouchers-rpt/emivouchers-rpt.component';
import { LoanandadvanceoutstandingRptComponent } from 'app/report/loanandadvanceoutstanding-rpt/loanandadvanceoutstanding-rpt.component';
import { TotpaysummaryRptComponent } from 'app/report/totpaysummary-rpt/totpaysummary-rpt.component';
import { WagesheetRptComponent } from 'app/report/wagesheet-rpt/wagesheet-rpt.component';
import { CashandbankstatementRptComponent } from 'app/report/cashandbankstatement-rpt/cashandbankstatement-rpt.component';
import { PfecrformatRptComponent } from 'app/report//pfecrformat-rpt/pfecrformat-rpt.component';
import { EsiformatRptComponent } from 'app/report/esiformat-rpt/esiformat-rpt.component';
import { ProftaxformRptComponent } from 'app/report/proftaxform-rpt/proftaxform-rpt.component';
import { FormDRptComponent } from 'app/report/form-d-rpt/form-d-rpt.component';
import { FormBRptComponent } from 'app/report/form-b-rpt/form-b-rpt.component';
import { XXVIIIRptComponent } from 'app/report/xxviii-rpt/xxviii-rpt.component';
import { XXIXRptComponent } from 'app/report/xxix-rpt/xxix-rpt.component';
import { XXVIRptComponent } from 'app/report/xxvi-rpt/xxvi-rpt.component';
import { XXVIIRptComponent } from 'app/report/xxvii-rpt/xxvii-rpt.component';
import { NewemployeeComponent } from 'app/bulk-upload/newemployee/newemployee.component';
import { MasterUnitRateComponent } from 'app/bulk-upload/master-unit-rate/master-unit-rate.component';
import { UnitMasterSalaryDetailsComponent } from 'app/bulk-upload/unit-master-salary-details/unit-master-salary-details.component';
import { PayslipComponent } from 'app/report/payslip/payslip.component';
import { RecoveryComponent } from 'app/report/recovery/recovery.component';
import { ApplicationComponent } from '../../app/prints/application/application.component';


// Routes model for application. Some of the pages are loaded lazily to increase startup time.
const APP_ROUTES: Routes = [
  {
    path: 'main', component: MainPageComponent, children: [
      { path: 'dashboard', component: DashboardPageComponent },
      { path: 'Operationcomplaintlist', component: OperationcomplaintlistComponent },
      { path: 'viewemployees', component: ViewemployeesComponent },
      { path: 'employeedetails', component: EmployeedetailsComponent },
      { path: 'advance', component: AdvancelistComponent },
      { path: 'reportsall', component: ReprotscollectionComponent },
      { path: 'unitwise', component: UnitwiseComponent },
      { path: 'gettalll', component: RepotsalllComponent },
      { path: 'advance', component: AdvancelistComponent },
      { path: 'addcompany', component: AddcompanyComponent },
      { path: 'salaryprocess', component: SaleryprocessstatementComponent },
      { path: 'salaryprocessreport', component: SaleryprocessprintComponent },
      { path: 'payrollemployeestatus', component: EmployeelistComponent },
      { path: 'payrollcalenderlist/:id', component: CalenderlistComponent },
      { path: 'payrollpaymentdetails', component: PaymentdetailsComponent },


      { path: 'assignclientlist', component: AssignclientlistComponent },
      { path: 'assignsitelist/:id', component: AssignsitelistComponent },
      { path: 'assignemployeelist/:id', component: AssignemployeelistComponent },
      { path: 'assignalllist', component: AssignalllistComponent },

      { path: 'manualpayrollentry', component: ManualpayrollComponent },

      { path: 'paymentprocessstatus', component: PaymentprocessComponent },



      { path: 'test', component: TestComponent },
      { path: 'test2', component: Test2Component },

      { path: 'clientmanagement', component: SchoolmanagementComponent },


      { path: 'notificationnew', component: NotificationnewComponent },
      { path: 'notificationread', component: NotificationReadedComponent },
      { path: 'viewnotification', component: ViewnotificationsComponent },


      { path: 'opsclient', component: ClientdetailsComponent },
      { path: 'opssite/:id', component: SiteDetailsComponent },

      { path: 'Manualentry', component: ManualEntryEmpComponent },
      { path: 'unitentry', component: ManualEntryUnitComponent },



      { path: 'addemployee', component: AddemployeeComponent },
      { path: 'employeereportss', component: EmployeeReportComponent },
      { path: 'report/:id', component: ReportComponent },
      { path: 'adduniform', component: AdduniformComponent },
      { path: 'uniform/:id', component: UniformComponent },
      { path: 'uniformlist', component: UniformlistComponent },
      { path: 'viewuniform/:id', component: ViewuniformComponent },
      { path: 'items', component: ItemsComponent },
      { path: 'employee_type', component: EmployeetypeComponent },
      { path: 'leftemployee', component: LeftemployeeComponent },
      { path: 'print/:id', component: PrintComponent },
      { path: 'addemployee2/:id', component: Addemployee2Component },
      { path: 'attachment/:id', component: AttachmentComponent },
      { path: 'updateemployee/:id', component: UpdateemployeeComponent },
      { path: 'viewuser', component: ViewuserComponent },
      { path: 'resignedemployees', component: ResignedemployeesComponent },
      { path: 'resignedusers', component: ResignedusersComponent },
      { path: 'addusers', component: AdduserComponent },
      { path: 'Configurenumber', component: ConfigurenumberComponent },
      { path: 'Closedissues', component: ClosedissuesComponent },
      { path: 'Closedissuesview/:id', component: ClosedissuesviewComponent },
      { path: 'employeedetails/:id', component: EmployeedetailsComponent },
      { path: 'userdetails/:id', component: UserdetailsComponent },
      { path: 'viewdetails/:id', component: ViewdetailsComponent },
      { path: 'Operationcomlist', component: OperationcomlistComponent },
      { path: 'sms', component: SmsComponent },
      { path: 'operacominprogresslist', component: OperacominprogresslistComponent },
      { path: 'operacomcompletelist', component: OperacomcompletelistComponent },
      { path: 'operacomcompleteview/:id', component: OperacomcompleteviewComponent },
      { path: 'settrainingtop', component: SettrainingComponent },
      { path: 'settrainingvideos/:id', component: SettrainingvideosComponent },
      { path: 'settraininglist', component: SettraininglistComponent },
      { path: 'settraininglessons/:id', component: SettraininglessonsComponent },
      { path: 'employeetracking', component: EmployeetrackingComponent },
      { path: 'employeetrackinghistory/:id', component: EmployeehistroyComponent },
      { path: 'FAQ', component: FAQComponent },
      { path: 'complainthistory', component: ComplainthistoryComponent },
      { path: 'Examlist', component: ExamlistComponent },
      { path: 'questionpaper', component: QuestionpaperComponent },


      //Create Client//
      { path: 'addclient', component: AddclientComponent },
      { path: 'updateclient/:id', component: UpdateclientComponent },
      { path: 'clientsite', component: ClientsiteComponent },
      { path: 'addclientsite', component: AddclientsiteComponent },
      { path: 'editclientsite/:id', component: EditclientsiteComponent },
      { path: 'viewclientsite/:id', component: ViewsiteComponent },
      { path: 'contract', component: ContractComponent },
      { path: 'addrequirement/:id', component: AddrequirementComponent },
      { path: 'addcontract', component: AddcontractComponent },
      { path: 'clientattachment/:id', component: ClientattachmentComponent },
      { path: 'addpayment/:id', component: AddpaymentComponent },
      { path: 'paymentpage/:id', component: PaymentpageComponent },
      { path: 'updatepayment/:id', component: UpdatepaymentComponent },
      { path: 'viewpayment/:id', component: ViewpaymentsComponent },
      { path: 'viewfullpayments/:id', component: ViewfullpaymentsComponent },
      { path: 'viewclient/:id', component: ViewclientComponent },
      { path: 'viewcontractpage/:id', component: ViewcontractpageComponent },
      { path: 'updatecontracts/:id', component: UpdatecontractsComponent },
      //training,quality,nightcheck///
      { path: 'TrainingReoprt/:id', component: TrainingReoprtComponent },
      { path: 'qualitycheck/:id', component: QualitycheckComponent },
      { path: 'nightreport/:id', component: NightreportComponent },
      { path: 'viewTrainingReoprt/:id', component: ViewTrainingReoprtComponent },
      { path: 'viewqualitycheck/:id', component: ViewqualitycheckComponent },
      { path: 'viewnightreport/:id', component: ViewnightreportComponent },
      //Contract///
      { path: 'contractpage', component: ContractPageComponent },
      { path: 'viewcontract/:id', component: ViewcontractpageComponent },
      { path: 'editcontract/:id', component: EditcontractComponent },
      { path: 'addcontractpage/:id', component: AddcontractComponent },




      //Finance Management//
      { path: 'listdetails', component: ListdetailsComponent },
      { path: 'createbill', component: CreatebillComponent },
      { path: 'printbill', component: PrintbillComponent },
      { path: 'updatebill', component: UpdatebillComponent },






      // point Tacrking Process//
      { path: 'Pointtracking', component: PointtrackComponent },
      { path: 'Pointtrackingdetails/:id', component: PointtrackdetailsComponent },

      // Tracking Points//
      { path: 'PointTrackRecordslist/:id', component: PointTrackRecordslistComponent },
      { path: 'PointTrackMapSpots/:id', component: PointTrackMapSpotsComponent },
      { path: 'PointTrackRecordsSpots/:id', component: PointTrackRecordsSpotsComponent },

      // Attendance//
      { path: 'Createqr', component: CreateqrComponent },
      { path: 'Attendanceall', component: AttendanceAllComponent },
      { path: 'Attendancedate', component: AttendancedateComponent },
      { path: 'Attendanceweekly', component: AttendanceweeklyComponent },
      { path: 'AttendanceMonthly', component: AttendanceMonthlyComponent },
      { path: 'Attendanceyearly', component: AttendanceyearlyComponent },
      { path: 'Attendancecustom', component: AttendancecustomComponent },

      // report
      { path: 'reportemplist', component: EmplistRptComponent },
      { path: 'reportdesignation', component: DesignationRptComponent },
      { path: 'reportunitmaster', component: UnitmasterRptComponent },
      { path: 'reportemivoucher', component: EmivouchersRptComponent },
      { path: 'reportloanadvance', component: LoanandadvanceoutstandingRptComponent },
      { path: 'reporttotalpay', component: TotpaysummaryRptComponent },
      { path: 'reportwagesheet', component: WagesheetRptComponent },
      { path: 'reportcashandbankstatement', component: CashandbankstatementRptComponent },
      { path: 'reportpfecrformat', component: PfecrformatRptComponent },
      { path: 'reportesiformat', component: EsiformatRptComponent },
      { path: 'reportproftaxform-6', component: ProftaxformRptComponent },
      { path: 'reportform-d', component: FormDRptComponent },
      { path: 'reportform-36b', component: FormBRptComponent },
      { path: 'reportform-XXVIII', component: XXVIIIRptComponent },
      { path: 'reportform-XXIX', component: XXIXRptComponent },
      { path: 'reportform-XXVI', component: XXVIRptComponent },
      { path: 'reportform-XXVII', component: XXVIIRptComponent },
      { path: 'payslip', component: PayslipComponent },
      { path: 'recovery', component: RecoveryComponent },

      // bulk upload
      { path: 'addNewEmployee', component: NewemployeeComponent },
      { path: 'addNewMasterUnitRate', component: MasterUnitRateComponent },
      { path: 'addNewUnitMasterSalesDetails', component: UnitMasterSalaryDetailsComponent },

       //print Pdf Pages
       {path:'application', component: ApplicationComponent},

      // Assign Management//
      { path: 'assignlist', component: AssignlistComponent },
      { path: 'addassign', component: AddassignComponent },
      { path: 'viewassign/:id', component: AssignviewComponent },

      { path: 'operationfeedlist', component: OperationfeedlistComponent },
      { path: 'employeesearch', component: EmployeeComponent },
      { path: 'clientsearch', component: ClientComponent },
      { path: 'datepicker', component: DatepickerPageComponent },
      { path: '**', redirectTo: '/dashboard' },


      
 
    ]
  },
  { path: 'mainpage', redirectTo: '/main/dashboard', pathMatch: 'full' },
  { path: '', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'forgotpassword', component: ForgotpswdComponent },
  { path: 'changepassword', component: ChangepaswordComponent },


];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES, { preloadingStrategy: PreloadAllModules }),
  ]
})
export class AppRoutesModule {
}

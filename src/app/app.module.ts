import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component, VERSION } from '@angular/core'
import { MapModule, MapAPILoader, BingMapAPILoaderConfig, BingMapAPILoader, MarkerTypeId, IMapOptions, IBox, WindowRef, DocumentRef, MapServiceFactory, BingMapServiceFactory } from 'angular-maps';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { AppComponent } from './app.component';
import { MultimenuComponent } from './components/multimenu/multimenu.component';
import { AppRoutesModule } from './routes/app-routes.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NgbButtonsModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ResizeService } from './resize/resize.service';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { NgxGalleryModule } from 'ngx-gallery';
import { AgmCoreModule } from '@agm/core';
import { TextMaskModule } from 'angular2-text-mask';
import { DatepickerPageComponent } from './pages/datepicker-page/datepicker-page.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SchoolmanagementComponent } from './Salesteam/schoolmanagement/schoolmanagement.component';
import { StorageServiceModule } from 'angular-webstorage-service';
import { HttpModule } from '@angular/http';
import { ForgotpswdComponent } from './pages/forgotpswd/forgotpswd.component';
import { ChangepaswordComponent } from './pages/changepasword/changepasword.component';
import { ViewuserComponent } from './Users/viewuser/viewuser.component';
import { ViewemployeesComponent } from './Humanresource/viewemployees/viewemployees.component';
import { EmployeedetailsComponent } from './Humanresource/employeedetails/employeedetails.component';
import { AddclientComponent } from './Salesteam/addclient/addclient.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { UpdateemployeeComponent } from './Humanresource/updateemployee/updateemployee.component';
import { AddemployeeComponent } from './Humanresource/addemployee/addemployee.component';
import { AdduserComponent } from './Users/adduser/adduser.component';
import { UserdetailsComponent } from './Users/userdetails/userdetails.component';
import { OperationcomplaintlistComponent } from './operationteam/operationcomplaintlist/operationcomplaintlist.component';
import { OperacominprogresslistComponent } from './operationteam/operacominprogresslist/operacominprogresslist.component';
import { OperacomcompletelistComponent } from './operationteam/operacomcompletelist/operacomcompletelist.component';
import { OperacomcompleteviewComponent } from './operationteam/operacomcompleteview/operacomcompleteview.component';
import { EmployeeComponent } from './searchquery/employee/employee.component';
import { ClientComponent } from './searchquery/client/client.component';
import { OperationcomlistComponent } from './operationteam/operationcomlist/operationcomlist.component';
import { OperationfeedlistComponent } from './operationteam/operationfeedlist/operationfeedlist.component';
import { ViewdetailsComponent } from './Users/viewdetails/viewdetails.component';
import { ConfigurenumberComponent } from './operationteam/configurenumber/configurenumber.component';
import { SettrainingComponent } from './operationteam/settraining/settraining.component';
import { SettraininglistComponent } from './operationteam/settraininglist/settraininglist.component';
import { SettrainingvideosComponent } from './operationteam/settrainingvideos/settrainingvideos.component';
import { SettraininglessonsComponent } from './operationteam/settraininglessons/settraininglessons.component';
import { EmployeetrackingComponent } from './employeetracking/employeetracking.component';
import { FAQComponent } from './operationteam/faq/faq.component';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { ExamlistComponent } from './operationteam/examlist/examlist.component';
import { QuestionpaperComponent } from './operationteam/questionpaper/questionpaper.component';
import { PointtrackComponent } from './operationteam/pointtracking/pointtrack/pointtrack.component';
import { PointtrackdetailsComponent } from './operationteam/pointtracking/pointtrackdetails/pointtrackdetails.component';
import { PointTrackMapSpotsComponent } from './Tracking/point-track-map-spots/point-track-map-spots.component';
import { PointTrackRecordsSpotsComponent } from './Tracking/point-track-records-spots/point-track-records-spots.component';
import { PointTrackRecordslistComponent } from './Tracking/point-track-recordslist/point-track-recordslist.component';
import { QRCodeModule } from 'angularx-qrcode';
import { CreateqrComponent } from './Attendance/createqr/createqr.component';
import { AttendanceAllComponent } from './Attendance/attendance-all/attendance-all.component';
import { AttendancedateComponent } from './Attendance/attendancedate/attendancedate.component';
import { AttendanceweeklyComponent } from './Attendance/attendanceweekly/attendanceweekly.component';
import { AttendanceMonthlyComponent } from './Attendance/attendance-monthly/attendance-monthly.component';
import { AttendancecustomComponent } from './Attendance/attendancecustom/attendancecustom.component';
import { AttendanceyearlyComponent } from './Attendance/attendanceyearly/attendanceyearly.component';
import { Addclietn2Component } from './Salesteam/addclietn2/addclietn2.component';
import { AddassignComponent } from './operationteam/addassign/addassign.component';
import { AssignlistComponent } from './operationteam/assignlist/assignlist.component';
import { AssignviewComponent } from './operationteam/assignview/assignview.component';
import { SmsComponent } from './operationteam/sms/sms.component';
import { ResignedusersComponent } from './Users/resignedusers/resignedusers.component';
import { ResignedemployeesComponent } from './Humanresource/resignedemployees/resignedemployees.component';
import { ComplainthistoryComponent } from './operationteam/complainthistory/complainthistory.component';
import { ClosedissuesComponent } from './operationteam/closedissues/closedissues.component';
import { ClosedissuesviewComponent } from './operationteam/closedissuesview/closedissuesview.component';
import { Addemployee2Component } from './Humanresource/addemployee2/addemployee2.component';
import { AttachmentComponent } from './Humanresource/attachment/attachment.component';
import { ReportComponent } from './Humanresource/report/report.component';
import { ClientsiteComponent } from './Salesteam/clientsite/clientsite.component';
import { ContractComponent } from './Salesteam/contract/contract.component';
import { AddcontractComponent } from './Salesteam/addcontract/addcontract.component';
import { AddclientsiteComponent } from './Salesteam/addclientsite/addclientsite.component';
import { EditclientsiteComponent } from './Salesteam/editclientsite/editclientsite.component';
import { EditcontractComponent } from './Salesteam/editcontract/editcontract.component';
import { PaymentpageComponent } from './Salesteam/paymentpage/paymentpage.component';
import { AddpaymentComponent } from './Salesteam/addpayment/addpayment.component';
import { UpdatepaymentComponent } from './Salesteam/updatepayment/updatepayment.component';
import { AddrequirementComponent } from './Salesteam/addrequirement/addrequirement.component';
import { ViewclientComponent } from './Salesteam/viewclient/viewclient.component';
import { ViewsiteComponent } from './Salesteam/viewsite/viewsite.component';
import { UpdateclientComponent } from './Salesteam/updateclient/updateclient.component';
import { UniformComponent } from './Humanresource/uniform/uniform.component';
import { PrintComponent } from './Humanresource/print/print.component';
import { ClientattachmentComponent } from './Salesteam/clientattachment/clientattachment.component';
import { UniformlistComponent } from './Humanresource/uniformlist/uniformlist.component';
import { ViewuniformComponent } from './Humanresource/viewuniform/viewuniform.component';
import { ItemsComponent } from './Master/items/items.component';
import { EmployeetypeComponent } from './Master/employeetype/employeetype.component';
import { TestComponent } from './test/test.component';
import { CreatebillComponent } from './Finance/createbill/createbill.component';
import { ListdetailsComponent } from './Finance/listdetails/listdetails.component';
import { PrintbillComponent } from './Finance/printbill/printbill.component';
import { UpdatebillComponent } from './Finance/updatebill/updatebill.component';
import { DataTableModule } from 'angular-6-datatable';
import { Ng2SearchPipeModule } from 'ng2-search-filter'; //importing the module
import { Ng2OrderModule } from 'ng2-order-pipe'; //importing the module
import { NgxPaginationModule } from 'ngx-pagination';
import { TrainingReoprtComponent } from './Salesteam/training-reoprt/training-reoprt.component';
import { QualitycheckComponent } from './Salesteam/qualitycheck/qualitycheck.component';
import { NightreportComponent } from './Salesteam/nightreport/nightreport.component';
import { ViewTrainingReoprtComponent } from './Salesteam/view-training-reoprt/view-training-reoprt.component';
import { ViewqualitycheckComponent } from './Salesteam/viewqualitycheck/viewqualitycheck.component';
import { ViewnightreportComponent } from './Salesteam/viewnightreport/viewnightreport.component';
import { ContractPageComponent } from './Salesteam/contract-page/contract-page.component';
import { ViewcontractpageComponent } from './Salesteam/viewcontractpage/viewcontractpage.component';
import { EditcontractpageComponent } from './Salesteam/editcontractpage/editcontractpage.component';
import { ViewpaymentsComponent } from './Salesteam/viewpayments/viewpayments.component';
import { ViewfullpaymentsComponent } from './Salesteam/viewfullpayments/viewfullpayments.component';
import { UpdatecontractComponent } from './Salesteam/updatecontract/updatecontract.component';
import { UpdatecontractsComponent } from './Salesteam/updatecontracts/updatecontracts.component';
import { AdduniformComponent } from './Humanresource/adduniform/adduniform.component';
import { LeftemployeeComponent } from './Humanresource/leftemployee/leftemployee.component';
import { EmployeeReportComponent } from './Humanresource/employee-report/employee-report.component';
import { EmployeehistroyComponent } from './employeetracking/employeehistroy/employeehistroy.component';
import { Test2Component } from './test2/test2.component';
import { Employeedetails2Component } from './Humanresource/employeedetails2/employeedetails2.component';
import { ClientdetailsComponent } from './operationteam/clientdetails/clientdetails.component';
import { SiteDetailsComponent } from './operationteam/site-details/site-details.component';
import { NotificationReadedComponent } from './Notification/notification-readed/notification-readed.component';
import { NotificationnewComponent } from './Notification/notificationnew/notificationnew.component';
import { ViewnotificationsComponent } from './Notification/viewnotifications/viewnotifications.component';
import { EmployeelistComponent } from './payroll/employeelist/employeelist.component';
import { CalenderlistComponent } from './payroll/calenderlist/calenderlist.component';
import { AssignclientlistComponent } from './operationteam/assignclientlist/assignclientlist.component';
import { AssignsitelistComponent } from './operationteam/assignsitelist/assignsitelist.component';
import { AssignemployeelistComponent } from './operationteam/assignemployeelist/assignemployeelist.component';
import { AssignalllistComponent } from './operationteam/assignalllist/assignalllist.component';
import { PaymentdetailsComponent } from './payroll/paymentdetails/paymentdetails.component';
import { AdvancelistComponent } from './payroll/advancelist/advancelist.component';
import { AddcompanyComponent } from './Master/addcompany/addcompany.component';
import { Ng4LoadingSpinnerModule, Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { SaleryprocessstatementComponent } from './payroll/saleryprocessstatement/saleryprocessstatement.component';
import { SaleryprocessprintComponent } from './payroll/saleryprocessprint/saleryprocessprint.component';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { ManualpayrollComponent } from './payroll/manualpayroll/manualpayroll.component';
import { PaymentprocessComponent } from './payroll/paymentprocess/paymentprocess.component';
import { ManualEntryUnitComponent } from './payroll/manual-entry-unit/manual-entry-unit.component';
import { ManualEntryEmpComponent } from './payroll/manual-entry-emp/manual-entry-emp.component';
import { UnitwiseComponent } from './payroll/unitwise/unitwise.component';
import { RepotsalllComponent } from './payroll/repotsalll/repotsalll.component';
import { ReprotscollectionComponent } from './payroll/reprotscollection/reprotscollection.component';
import { EmplistRptComponent } from './report/emplist-rpt/emplist-rpt.component';
import { DesignationRptComponent } from './report/designation-rpt/designation-rpt.component';
import { UnitmasterRptComponent } from './report/unitmaster-rpt/unitmaster-rpt.component';
import { EmivouchersRptComponent } from './report/emivouchers-rpt/emivouchers-rpt.component';
import { LoanandadvanceoutstandingRptComponent } from './report/loanandadvanceoutstanding-rpt/loanandadvanceoutstanding-rpt.component';
import { TotpaysummaryRptComponent } from './report/totpaysummary-rpt/totpaysummary-rpt.component';
import { WagesheetRptComponent } from './report/wagesheet-rpt/wagesheet-rpt.component';
import { CashandbankstatementRptComponent } from './report/cashandbankstatement-rpt/cashandbankstatement-rpt.component';
import { PfecrformatRptComponent } from './report/pfecrformat-rpt/pfecrformat-rpt.component';
import { EsiformatRptComponent } from './report/esiformat-rpt/esiformat-rpt.component';
import { ProftaxformRptComponent } from './report/proftaxform-rpt/proftaxform-rpt.component';
import { FormDRptComponent } from './report/form-d-rpt/form-d-rpt.component';
import { FormBRptComponent } from './report/form-b-rpt/form-b-rpt.component';
import { XXVIIIRptComponent } from './report/xxviii-rpt/xxviii-rpt.component';
import { XXIXRptComponent } from './report/xxix-rpt/xxix-rpt.component';
import { XXVIRptComponent } from './report/xxvi-rpt/xxvi-rpt.component';
import { XXVIIRptComponent } from './report/xxvii-rpt/xxvii-rpt.component';

import { ExcelService } from './services/excel.service';
import { NewemployeeComponent } from './bulk-upload/newemployee/newemployee.component';
import { UnitMasterSalaryDetailsComponent } from './bulk-upload/unit-master-salary-details/unit-master-salary-details.component';
import { MasterUnitRateComponent } from './bulk-upload/master-unit-rate/master-unit-rate.component';

import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { PayslipComponent } from './report/payslip/payslip.component';
import { RecoveryComponent } from './report/recovery/recovery.component';
import { ApplicationComponent } from './prints/application/application.component';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
// AoT requires an exported function for factories for translate module
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}






export class DemoMaterialModule { }

@NgModule({
  declarations: [
    AppComponent,
    MultimenuComponent,
    LoginPageComponent,
    MainPageComponent,
    RegisterPageComponent,
    DatepickerPageComponent,
    SchoolmanagementComponent,
    FAQComponent,
    PointtrackComponent,
    ForgotpswdComponent,
    ChangepaswordComponent,
    DashboardPageComponent,
    ViewuserComponent,
    ViewemployeesComponent,
    EmployeedetailsComponent,
    AddclientComponent,
    UpdateemployeeComponent,
    AddemployeeComponent,
    AdduserComponent,
    UserdetailsComponent,
    OperationcomplaintlistComponent,
    OperacominprogresslistComponent,
    OperacomcompletelistComponent,
    OperacomcompleteviewComponent,
    EmployeeComponent,
    ClientComponent,
    OperationcomlistComponent,
    OperationfeedlistComponent,
    ViewdetailsComponent,
    ConfigurenumberComponent,
    SettrainingComponent,
    SettraininglistComponent,
    SettrainingvideosComponent,
    SettraininglessonsComponent,
    EmployeetrackingComponent,
    ExamlistComponent,
    QuestionpaperComponent,
    PointtrackdetailsComponent,
    PointTrackMapSpotsComponent,
    PointTrackRecordsSpotsComponent,
    PointTrackRecordslistComponent,
    CreateqrComponent,
    AttendanceAllComponent,
    AttendancedateComponent,
    AttendanceweeklyComponent,
    AttendanceMonthlyComponent,
    AttendancecustomComponent,
    AttendanceyearlyComponent,
    Addclietn2Component,
    AddassignComponent,
    AssignlistComponent,
    AssignviewComponent,
    SmsComponent,
    ResignedusersComponent,
    ResignedemployeesComponent,
    ComplainthistoryComponent,
    ClosedissuesComponent,
    ClosedissuesviewComponent,
    Addemployee2Component,
    AttachmentComponent,
    ReportComponent,
    ClientsiteComponent,
    ContractComponent,
    AddcontractComponent,
    AddclientsiteComponent,
    EditclientsiteComponent,
    EditcontractComponent,
    PaymentpageComponent,
    AddpaymentComponent,
    UpdatepaymentComponent,
    AddrequirementComponent,
    ViewclientComponent,
    ViewsiteComponent,
    UpdateclientComponent,
    UniformComponent,
    PrintComponent,
    ClientattachmentComponent,
    UniformlistComponent,
    ViewuniformComponent,
    ItemsComponent,
    EmployeetypeComponent,
    TestComponent,
    CreatebillComponent,
    ListdetailsComponent,
    PrintbillComponent,
    UpdatebillComponent,
    TrainingReoprtComponent,
    QualitycheckComponent,
    NightreportComponent,
    ViewTrainingReoprtComponent,
    ViewqualitycheckComponent,
    ViewnightreportComponent,
    ContractPageComponent,
    ViewcontractpageComponent,
    EditcontractpageComponent,
    ViewpaymentsComponent,
    ViewfullpaymentsComponent,
    UpdatecontractComponent,
    UpdatecontractsComponent,
    AdduniformComponent,
    LeftemployeeComponent,
    EmployeeReportComponent,
    EmployeehistroyComponent,
    Test2Component,
    Employeedetails2Component,
    ClientdetailsComponent,
    SiteDetailsComponent,
    NotificationReadedComponent,
    NotificationnewComponent,
    ViewnotificationsComponent,
    EmployeelistComponent,
    CalenderlistComponent,
    AssignclientlistComponent,
    AssignsitelistComponent,
    AssignemployeelistComponent,
    AssignalllistComponent,
    PaymentdetailsComponent,
    AdvancelistComponent,
    AddcompanyComponent,
    SaleryprocessstatementComponent,
    SaleryprocessprintComponent,
    ManualpayrollComponent,
    PaymentprocessComponent,
    ManualEntryUnitComponent,
    ManualEntryEmpComponent,
    UnitwiseComponent,
    RepotsalllComponent,
    ReprotscollectionComponent,
    EmplistRptComponent,
    DesignationRptComponent,
    UnitmasterRptComponent,
    EmivouchersRptComponent,
    LoanandadvanceoutstandingRptComponent,
    TotpaysummaryRptComponent,
    WagesheetRptComponent,
    CashandbankstatementRptComponent,
    PfecrformatRptComponent,
    EsiformatRptComponent,
    ProftaxformRptComponent,
    FormDRptComponent,
    FormBRptComponent,
    XXVIIIRptComponent,
    XXIXRptComponent,
    XXVIRptComponent,
    XXVIIRptComponent,
    NewemployeeComponent,
    UnitMasterSalaryDetailsComponent,
    MasterUnitRateComponent,
    PayslipComponent,
    RecoveryComponent,
    ApplicationComponent,


  ],
  imports: [
    BrowserModule,
    CdkTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    Ng2SearchPipeModule, //including into imports
    Ng2OrderModule, // importing the sorting package here
    NgxPaginationModule,
    DataTableModule,
    Ng4LoadingSpinnerModule.forRoot(),
    NgxQRCodeModule,
    QRCodeModule,
    FormsModule,
    ReactiveFormsModule,
    PerfectScrollbarModule,
    RouterModule,
    AppRoutesModule,
    NgbModule.forRoot(),
    MapModule.forRoot(),
    NgbButtonsModule,
    NgxGalleryModule,
    TextMaskModule,
    BrowserAnimationsModule,
    HttpModule, StorageServiceModule,
    // Insert your google maps api key, if you do not need google map in your project, you can remove this import
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDFTKbcSXEN22pUx3zfaabEOGyy7oOZtmI'
    }),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    NgMultiSelectDropDownModule.forRoot(),
  ],
  providers: [
    ResizeService, ExcelService,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }],
  bootstrap: [AppComponent],
})
export class AppModule {
}










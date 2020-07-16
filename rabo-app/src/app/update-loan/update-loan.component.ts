import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { LoanService } from '../service/loan.service';
import { LoanDetails } from '../model/LoanDetails.model';


@Component({
  selector: 'app-update-loan',
  templateUrl: './update-loan.component.html',
  styleUrls: ['./update-loan.component.css']
})
export class UpdateLoanComponent implements OnInit {
  
loanNumber:number;
loanType:String;
loanTerm:number;



resultData:LoanDetails;

  constructor(private router: Router ,private loanService :LoanService,private route: ActivatedRoute) { }
  loan:number;


  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      this.loanNumber = params['loanNumber'];      
    });

    
    this.resultData = this.loanService.getLoanDetails(this.loanNumber);
    this.loanNumber = this.resultData.loanNumber;
    
    this.loanType = this.resultData.loanType;
    this.loanTerm = this.resultData.loanTerm;
   // this.amount = this.resultData.amount;

  }

  onSubmit(form :NgForm){
    
    var loanDetails = new LoanDetails();
    loanDetails.loanNumber = form.value.updateLoanData.loanNumber;
    loanDetails.loanTerm = form.value.updateLoanData.loanTerm;
    loanDetails.loanType = form.value.updateLoanData.loanType;
    loanDetails.amount = form.value.updateLoanData.amount;
    this.loanService.updateLoanDetails(loanDetails);
    }
}

import { Injectable } from '@angular/core';
import { CustomerDetails } from '../model/CustomerDetails.model';
import { SearchService } from './search.service';
import { LoanBaseService } from './loan-base.service';
import { LoanDetails } from '../model/LoanDetails.model';
import { DataService } from './data.service';


@Injectable({
  providedIn: 'root'
})



export class LoanService{
  

  searchService:SearchService;
  constructor() { 
    
    
  }

  saveLoanDetails(customerDetails:CustomerDetails){
   
   var dataService = new DataService();
   dataService.loan.push(customerDetails);
     
  }

  updateLoanDetails(loanDetails:LoanDetails){
    var dataService = new DataService();
    for(var dtl of dataService.loanDetailsAry){
      if(dtl.loanNumber == loanDetails.loanNumber){
        dtl.loanTerm = loanDetails.loanTerm;
        dtl.loanType = loanDetails.loanType;
      }
    }

    for(var loan of dataService.loan){
      if(loan.loanNumber == loanDetails.loanNumber){
        loan.amount = loanDetails.amount;
      }
    }

    

  }

  getLoanDetails(loanNumber :number){
    var dataService = new DataService();
    var result = null;
    for(var dtl of dataService.loanDetailsAry){
      if(dtl.loanNumber == loanNumber){
       result = dtl;
      }
    }

    for(var loan of dataService.loan){
      if(loan.loanNumber == loanNumber){
        result.amount = loan.amount;
      }
    }

    return result;

  }


}

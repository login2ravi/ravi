import { Injectable } from '@angular/core';
import {CustomerDetails} from "../model/CustomerDetails.model"
import { ngModuleJitUrl } from '@angular/compiler';
import {SearchResult} from '../model/Search.model';
import {LoanBaseService} from './loan-base.service'
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  
  

  loanDetails = 
  [{
    firstName :'rahul',
	  lastName :'dravid',
	  loanNumber :1001,
    loanType :'HomeLoan',
    loanTerm:10,
    amount:1000,
    city:'Chennai'

  },
  {
    firstName :'sachin',
	  lastName :'tendulkar',
	  loanNumber :1002,
    loanType :'HomeLoan',
    loanTerm:15,
    amount:5000,
    city:'Mumbai'
  }
];

  constructor() { 
    var dataService = new DataService();
    dataService.setCustomerLoan();
    dataService.setInitialCustomerDetailData();
  }


  public saveLoanDetails(customerDetails:CustomerDetails){
    
    var dataService = new DataService();
    dataService.loan.push(customerDetails);
  }

  public searchLoanDetail(firstName:String,lastName:String,loanNumber:number){
    var resultList  = new Array<SearchResult>();
    var dataService = new DataService();
    var searchResult = null;
    for(var loan of dataService.loan){
      
      if(loan.firstName === firstName || loan.lastName === lastName || loan.loanNumber == loanNumber){
        searchResult = new SearchResult();
        searchResult.firstName = loan.firstName;
        searchResult.lastName = loan.lastName;
        searchResult.amount = loan.amount;
        searchResult.loanNumber = loan.loanNumber;
        searchResult.city=loan.city;
        resultList.push(searchResult);
      }
    }
    
    return resultList;
  }
}

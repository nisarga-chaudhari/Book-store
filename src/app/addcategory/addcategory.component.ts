import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequesturlsService } from '../requesturls.service';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {
  requestURL:string=this._requestURL.requestURL_admin+"addcategory"

  constructor(private _http:HttpClient, private _requestURL:RequesturlsService) { }

  ngOnInit(): void {
  }

  category(booktype:any){
    this._http.post(this.requestURL,booktype).subscribe((data:any)=>{
      //console.log(data)
      this.ngOnInit()
    })
  }

}

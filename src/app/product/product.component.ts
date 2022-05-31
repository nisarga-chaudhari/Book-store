import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequesturlsService } from '../requesturls.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private _http:HttpClient,private _requestURL:RequesturlsService,private _authService:AuthService) { }
  prodDetails:any
  name:any
  pDetails:any
  categoryList:any
  _id:any
  public cart:any=[]
  ngOnInit(): void {
    var requestURL=this._requestURL.requestURL_user+"fetchProdDetails"
    var requestURL2 = this._requestURL.requestURL_admin + "fetchbooktype"

	  this._http.get(requestURL).subscribe((data:any)=>{
		  //console.log(data)
      this.prodDetails=data
	  })

    this._http.get(requestURL2).subscribe((data)=>{
      this.categoryList=data;
    })
  }
  //To show Add to cart button only on user panel after login
  checkTokenUser(){
    var res = this._authService.getTokenUser()
    if(res)
      this.name = localStorage.getItem('name')
    return res
	}

  applyfilter(filtertype:any){
    //console.log(filtertype)
    var requestURL1=this._requestURL.requestURL_user+"fetchProdDetailsfiltertype"
    this._http.post(requestURL1, {'booktype':filtertype}).subscribe((data:any)=>{
      this.prodDetails = data
    })
  }

  addtocart(prodtitle:any,prodprice:any){
    this._id=localStorage.getItem('_id')
    if(!!localStorage.getItem('cart'))
    {
      var data=JSON.parse(localStorage.getItem('cart')!)
      this.cart=data
      this.cart.push({'BookTitle':prodtitle,'BookPrice':prodprice,'_id':this._id})
      localStorage.setItem('cart',JSON.stringify(this.cart))
    }else{
      this.cart.push({'BookTitle':prodtitle,'BookPrice':prodprice,'_id':this._id})
      localStorage.setItem('cart',JSON.stringify(this.cart))

    }


    /*my previous code
    //this.pDetails=prodtitle+prodprice
    //console.log(this.pDetails)
    this._id=localStorage.getItem('_id')
    localStorage.setItem('BookTitle',prodtitle)
    localStorage.setItem('BookPrice',prodprice)
    //console.log(prodtitle,prodprice,this._id)

    var requestURL=this._requestURL.requestURL_user+"addtocart"
    this._http.post(requestURL,{'_id':this._id,'BookTitle':prodtitle,'BookPrice':prodprice}).subscribe((data:any)=>{
      //console.log(data)
      console.log(data.response)
    })
    */
  }

}

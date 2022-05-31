import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
//import { threadId } from 'worker_threads';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  //BookTitle:any
  //BookPrice:any
  plist:any
  userId:any
  //idlist:any
  userplist:any
  date:any
  public buy:any=[]
  public history:any=[]
  
  constructor(private route:Router) { }
  
  ngOnInit(): void {
    this.userId=localStorage.getItem('_id')
    
    this.plist=[]
    this.userplist=[]
    this.history=[]
    
    
    if(!!localStorage.getItem('cart'))
    { 
      this.plist=JSON.parse(localStorage.getItem('cart')!)

      this.plist.forEach((item:any,index:any)=>{  //to match _id with user_id and show products for that user only
        if(item._id===this.userId){
          this.userplist.push(item)
        }
      });
      
    }
  }

  buyAll(){
    
    localStorage.setItem('buyall',JSON.stringify(this.userplist))
    
    this.removeAll()
    this.route.navigate(['/buyproduct'])
  }
  removeAll(){
    this.plist.forEach((item:any,index:any)=>{
      if(item._id===this.userId){
        this.plist.splice(index);
      }
    })
    //localStorage.removeItem('cart')
    localStorage.setItem('cart',JSON.stringify(this.plist))
    this.ngOnInit()
  }

  remove(row:any){
    //console.log(row)
    this.plist.forEach((item:any,index:any)=>{
      //console.log(index)
      //console.log(item)
      if(item===row){
        this.plist.splice(index,1);
        //alert('item removed')
        this.plist = JSON.stringify(this.plist)
        localStorage.removeItem('cart')
        localStorage.setItem("cart", this.plist);
        this.ngOnInit()
      }
    })
    
  }

}

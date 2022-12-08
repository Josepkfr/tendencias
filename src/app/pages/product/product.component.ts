import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private http: HttpClient ) { }

  ngOnInit(): void {
    // this.findAll()
    // this.findOne("9")
    // this.create()
    // this.update("228")
    // this.delete("226")
  }

  findAll(){
    return this.http.get("http://api.escuelajs.co/api/v1/products").subscribe(res=>{
      console.log(res)
    })
  }

  findOne(id:string){
    return this.http.get(`http://api.escuelajs.co/api/v1/products/${id}`).subscribe(res=>{
      console.log(res)
    })
  }

  create(){
    const product = {
      title:"Titulo",
      price:55.60,
      description:"Esfero-Jose Alpala",
      images:["asdfaf"],
      categoryId:1
    }
    return this.http.post("http://api.escuelajs.co/api/v1/products",product).subscribe(res=>{
      console.log(res)
    })
  }

  update(id:string){
    const product = {
      title:"Titulo",
      price:55.60,
      description:"Esfero-Jose Alpala actualizado",
      images:["asdfaf"],
      categoryId:1
    }
    return this.http.put(`http://api.escuelajs.co/api/v1/products/${id}`,product).subscribe(res=>{
      console.log(res)
    })
  }

  delete(id:string){
    return this.http.delete(`http://api.escuelajs.co/api/v1/products/${id}`).subscribe(res=>{
      console.log(res)
    })
  }

}

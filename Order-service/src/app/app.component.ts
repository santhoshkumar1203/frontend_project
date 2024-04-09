import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OrderService } from './Order.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Order-module';
constructor(private orderService: OrderService){
  this.getOrderDetails();
}

  register(registerForm: NgForm){
    this.orderService.registerOrder(registerForm.value).subscribe(
      (resp: any)=>{
        console.log(resp);
        registerForm.reset();
        this.getOrderDetails();

      },(err: any)=>{
        console.log(err);
      }
    );
  }

  getOrderDetails(){
    this.orderService.getOrders().subscribe(
      (resp)=>{
        console.log(resp);
        this.orderDetails=resp;
      }, (err)=>{
        console.log(err);
      }
    );
  }

  orderDetails= null as any;

  deleteOrder(order: any){
    this.orderService.deleteOrder(order.oid).subscribe(
      (resp)=>{
        console.log(resp);
        this.getOrderDetails();
      },(err)=>{
        console.log(err);
      }
    );
  }
 
  OrderToUpdate={
    O_id: "",
    O_name: "",
    O_email: "",
    PhoneNumber:""
    
  };

  edit(order: any){
    this.OrderToUpdate=order;
  }
  updateOrder(){
    this.orderService.updateorder(this.OrderToUpdate).subscribe(
      (resp)=>{
        console.log(resp);
      },(err)=>{
        console.log(err);
      }
    );
  }
  
}

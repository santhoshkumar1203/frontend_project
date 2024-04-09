import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  API="http://localhost:8080";
  public registerOrder(OrderData: any)
  {
    return this.http.post(this.API + '/registerOrder' , OrderData);
  }

  public getOrders(){
    return this.http.get(this.API+'/getOrder');
  }

  public deleteOrder(O_id:any){
    return this.http.delete(this.API+'/deleteOrder?C_id=' + O_id);
  }

  public updateorder(Order: any){
    return this.http.put(this.API +'/updateorder', Order);
  }
  constructor(private http: HttpClient) { }
}

import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable()
export class UserService {
    
   activeUsers = ['Max', 'Anna'];

  inactiveUsers = ['Chris', 'Manu'];

  constructor(private counterService: CounterService) {
      
  }

 onSetToInactive(id: number) {
    
    this.counterService.count++;
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
     console.log(this.counterService.count);
  }

  onSetToActive(id: number) {
           
    this.counterService.count++;
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    console.log(this.counterService.count);

  }

}
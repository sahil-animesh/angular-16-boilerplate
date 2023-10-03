import { Injectable, Injector } from '@angular/core';
import { SocketService } from './socket.service';
import { SignalRService } from './signal-r.service';
import { environment } from 'src/enviroments/enviroment';
import { COMMUNICATION_WITH } from '../constant-files/constant';

@Injectable({
  providedIn: 'root'
})
export class SocketCommunicationService {

  connection!: SocketService | SignalRService;
  constructor(
    private injector: Injector
  ) {
    this.connection = environment.realTimeCommunication === COMMUNICATION_WITH.SOCKET ? this.injector.get(SocketService) : this.injector.get(SignalRService);
  }
}

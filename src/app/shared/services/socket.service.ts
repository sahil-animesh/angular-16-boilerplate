import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { environment } from 'src/enviroments/enviroment';
import { COMMUNICATION_WITH } from '../constant-files/constant';
import { SignalRService } from './signal-r.service';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  private socket: any;

  /**
   * below function is implemented to establish socket connection 
   */
  connect() {
    this.socket = io(environment.socketUrl, {
      reconnection: true,
      reconnectionDelay: 500,
      transports: ['websocket'],
      query: {
        authorization: sessionStorage.getItem('token'),
      },
    });

    this.socket.on('connect', (res: any) => {
    });
  }

  /**
   * function to diconnce from socket.
   */
  disconnect() {
    this.socket?.disconnect();
  }

}



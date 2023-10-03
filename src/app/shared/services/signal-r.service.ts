import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { environment } from 'src/enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {

  private hubConnection!: signalR.HubConnection;
  constructor() { }
  
  connect() {
    this.hubConnection = new signalR.HubConnectionBuilder()
    .configureLogging(signalR.LogLevel.Information)
    .withUrl(environment.signalRUrl)
    .build();

    this.hubConnection.start().then(() => {
      console.log("signalR is connected")
    }).catch((err) => {
      return console.error(err.toString());
    })
  }
}

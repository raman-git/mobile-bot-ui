import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {BotServiceProvider} from '../../providers/bot-service/bot-service';

@Component({
  selector: 'page-bot',
  templateUrl: 'bot.html'
})
export class BotPage {
  botService: BotServiceProvider;
  userInput: string;
  responseText: string;
  messages: ChatMessage[] = [];
  isLoading: boolean = false;

  constructor(public navCtrl: NavController, botService: BotServiceProvider) {
    this.botService = botService;
    this.messages.push(new ChatMessage('Welcome! How can I help you?', true));
  }
  sendMessage() {
    let message:string = this.userInput;
    if (!message || message.trim().length <=0) {
      return;
    }
    this.isLoading = true;
    this.messages.push(new ChatMessage(message, false));
    this.userInput = '';
    //send to server
    this.botService.sendMessage(message)
    .then(data => {
      console.log(data);
      this.isLoading = false;
      this.messages.push(new ChatMessage(<string>data, true));
    });
  }
  processMessage(message:string) {
    this.messages.push(new ChatMessage(message, true));
  }

  keyEventHandler(key:number) {
    if (key == 13) {
      this.sendMessage();
    }
  }

}

export class ChatMessage {
  isResponse = false;
  text: string;
  time: Date;
  
  constructor(text:string, isResponse:boolean) {
    this.text = text;
    this.isResponse = isResponse;
    this.time = new Date();
  }
}

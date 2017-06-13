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
    this.isLoading = true;
    this.messages.push(new ChatMessage(this.userInput, false));
    //send to server
    this.botService.sendMessage(this.userInput)
    .then(data => {
      console.log(data);
      this.isLoading = false;
      this.messages.push(new ChatMessage(<string>data, true));
    });
   
  }
  processMessage(message:string) {
    this.messages.push(new ChatMessage(message, true));
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

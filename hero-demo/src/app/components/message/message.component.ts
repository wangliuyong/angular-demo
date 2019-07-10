import { Component, OnInit } from '@angular/core';
import {  MessageService } from "../../services/message.service";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  constructor(
    public messageService: MessageService,//模板只能绑定公共属性
  ) { }

  ngOnInit() {
    
  }

}

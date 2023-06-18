import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ChatService } from './services/chat/chat.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

  @ViewChild('popup', { static: false }) popup: any

  public roomId!: string
  public messageText!: string
  public messageArray: { user: string, message: string }[] = []
  private storageArray:any[]=[]

  public showScreen!:boolean
  public phone!: string
  public currentUser: any
  public selectedUser: any

  public userList = [
    {
      id: 1,
      name: "The Swag Coder",
      phone: "93399145",
      image: "assets/user/user1.jpg",
      roomId: {
        2: "room-1",
        3: "room-2",
        4: "room-3",
      }
    },
    {
      id: 2,
      name: "Wade Warren",
      phone: "98899889",
      image: "assets/user/user2.jpg",
      roomId: {
        1: "room-1",
        3: "room-4",
        4: "room-5",
      }
    },
    {
      id: 3,
      name: "Albert Flores",
      phone: "78877887",
      image: "assets/user/user3.jpg",
      roomId: {
        1: "room-2",
        2: "room-4",
        4: "room-6",
      }
    },
    {
      id: 4,
      name: "Dianne",
      phone: "54455445",
      image: "assets/user/user4.jpg",
      roomId: {
        1: "room-3",
        2: "room-5",
        3: "room-6",
      }
    },
  ]

  constructor(private chatService: ChatService,private modalService:NgbModal) {
    
  }


  ngOnInit(): void {
    this.chatService.getMessage()
      .subscribe((data: { user: string, message: string }) => {
        if(this.roomId){
          setTimeout(()=>{
            this.storageArray=this.chatService.getStorage()
            const storageIndex=this.storageArray
            .findIndex((storage:any)=>storage.roomId == this.roomId)
            this.messageArray=this.storageArray[storageIndex].chats
          },500)
        }
      })
  }
  ngAfterViewInit(): void {
    this.openPopup(this.popup)
  }


  openPopup(content:any):void{
    this.modalService.open(content,{backdrop:'static',centered:true})
  }


  login(dismiss:any):void{
    this.currentUser = this.userList.find(user => user.phone === this.phone.toString())
    this.userList=this.userList.filter((user:any)=>user.phone !== this.phone.toString())
 
 
    if(this.currentUser){
      this.showScreen=true
      dismiss()
    }
  }

  selectUserHandler(phone: string | undefined): void {
    this.selectedUser = this.userList.find(user => user.phone === phone)
    this.roomId = this.selectedUser.roomId[this.currentUser.id]
    this.messageArray = [] 
 
    this.storageArray=this.chatService.getStorage()
    const storageIndex=this.storageArray.findIndex((storage:any)=>storage.roomId===this.roomId)

    if(storageIndex>-1){
      this.messageArray=this.storageArray[storageIndex].chats
    }

    this.join(this.currentUser.name, this.roomId)
  }


  join(username: string, roomId: string): void {
    this.chatService.joinRoom({ user: username, room: roomId })
  }

  sendMessage(): void {
    this.chatService.sendMessage({
      user: this.currentUser.name,
      room: this.roomId, 
      message: this.messageText
    })

    this.storageArray=this.chatService.getStorage()
    const storageIndex=this.storageArray.findIndex((storage:any)=>storage.roomId===this.roomId)

    if(storageIndex>-1){
      this.storageArray[storageIndex].chats.push({
        user:this.currentUser.name,
        message:this.messageText
      })
    }else{
      const updateStorage={
        roomId:this.roomId,
        chats:[{
          user:this.currentUser.name,
          message:this.messageText
        }]
      }

      this.storageArray.push(updateStorage)
    }
    this.chatService.setStorage(this.storageArray)
    this.messageText = ""
  }



}

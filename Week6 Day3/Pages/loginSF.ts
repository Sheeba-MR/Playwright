import { Page } from "@playwright/test"


  export class LoginPageSF{

  //global  property

  page:Page
  

    constructor(tpage:Page){

    this.page=tpage
    
    }

    // load url
   async loadUrl(url:string){
    await this.page.goto(url)
    } 

    // enter username and password
   async loginCredentials(username:string,password:string){
    await this.page.locator('#username').fill(username)
    await this.page.locator("[id='Login']").click()
    await this.page.locator('#password').fill(password)
    await this.page.locator("[id='Login']").click()
    }

  }
import { Wrapper } from "../helper/wrapperHA"
// extending wrapper (parent class) to child class
export class LoginSF extends Wrapper{

// load url
async loadUrl(url:string){
    await this.loadApplication(url) //method from wrapper class
} 

// enter username and password
   async loginCredentials(username:string,password:string){
        await this.clearAndFill('#username',username) //method from wrapper class
        await this.click("[id='Login']") //method from wrapper class
        await this.clearAndFill('#password',password) //method from wrapper class
        await this.click("[id='Login']") //method from wrapper class
    }

  }
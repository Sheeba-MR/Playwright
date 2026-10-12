// this class will be a parent class because we have page reference here

import {Page} from "@playwright/test"
export abstract class Wrapper {
    // global property
    page:Page
    // constructor
    constructor(tpage:Page){
    this.page=tpage
    }

    // reusable methods - so that we can implement these methods in all pages

    // load url
    async loadApplication(url:string) {
        try{
            await this.page.goto(url)
            console.log("Login success")
        }
        catch(error) {
            console.log("Login fail")
            throw new Error("Login has failed")
            
        }
    }

    // clear and fill
    async clearAndFill(locator:string, data:string) {
        try {
            await this.page.locator(locator).clear()
            await this.page.locator(locator).fill(data)
        }
        catch(error) {
            throw new Error("Nor cleared neither filled")
        }
    }

    // click
    async click(locator:string) {
        try {
            await this.page.locator(locator).click()
        }
        catch(error) {
            throw new Error("Not clicked")
        }
        
    }
}
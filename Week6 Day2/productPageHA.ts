// Create a class named: ProductPage
// Extend BasePage and Implement PageRules

import { BasePage } from "./abstractHA"

class ProductPage extends BasePage implements PageRules {
    // implement verifyPage() (method is from interface)
    verifyPage(): void {
        console.log("Product Page Verified")
    }

    // add below methods
    searchProduct(): void {
        console.log("Searched Product")
    }
    addToCart(): void {
        console.log("Add to cart")
    }
}

export class BankAccount{
    constructor(owner, balance){
        this.owner = owner
        this.balance = balance
    }

    deposit(amount){
        this.balance += amount
    }

    withraw(amount){
        if ((this.balance - amount) > 0){
            this.balance -= amount
        } else {
            console.log("Insufficient balance");
        }
    }
}
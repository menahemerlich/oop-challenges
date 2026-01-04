
export class Bank{
    constructor(){
        this.accountsList = []
    }

    addAccount(account){
        this.accountsList.push(account)
    }

    transfer(fromName, toName, amount){
        for (const account of this.accountsList) {
            if (account.owner === fromName && (account.balance - amount) > 0){
                account.balance -= amount
            }
            if (account.owner === toName){
                account.balance += amount
            }
        }
    }

    showBalances(){
        for (const account of this.accountsList){
            console.log(`Owner: ${account.owner}, Balance: ${account.balance}`);
            
        }
    }
}
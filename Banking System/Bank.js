
export class Bank{
    constructor(){
        this.accountsList = []
    }

    addAccount(account){
        this.accountsList.push(account)
    }

    transfer(fromName, toName, amount){
        const fromAccount = this.accountsList.filter((account) =>{
            if (account.owner === fromName){
                return true
            }
        })
        const toAccount = this.accountsList.filter((account) =>{
            if (account.owner === toName){
                return true
            }
        })

        if (fromAccount.length > 0 && toAccount.length > 0){
            for (const account of this.accountsList) {
            if (account.owner === fromName ){
                if ((account.balance - amount) < 0){
                    console.log("Insufficient balance");
                    return
                }
                account.balance -= amount
            }
            if (account.owner === toName){
                account.balance += amount
            }
            
            }
        } else {
            console.log("Incorrect details");
        }
    }

    showBalances(){
        for (const account of this.accountsList){
            console.log(`Owner: ${account.owner}, Balance: ${account.balance}`);
            
        }
    }
}
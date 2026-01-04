import { Library } from "./Digital Library/Library.js";
import { Book } from "./Digital Library/Book.js";
import { Movie } from "./Digital Library/Movie.js";
import { Bank } from "./Banking System/Bank.js";
import { BankAccount } from "./Banking System/BankAccount.js";

const lib = new Library()
lib.addItem(new Book("Dune", 1965, "Sci-Fi", "Frank Herbert", 412))
lib.addItem(new Movie("Dune", 2021, "Sci-Fi", "Denis Villeneuve", 155))

// console.log(lib.search("dune"));
// console.log(lib.listByGener("Sci-Fi"));

const bank = new Bank()
bank.addAccount(new BankAccount("Avi", 1500))
bank.addAccount(new BankAccount("Dana", 1500))
bank.showBalances()
bank.transfer("Avi", "Dana", 2300)
bank.showBalances()



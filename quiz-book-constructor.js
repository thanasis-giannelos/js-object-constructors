function Player (title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  this.info = () => {
      return `${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead ? "already read":"not read yet"} .`
  };
};

let myPlayer = new Player("The Hobbit", "J.R.R", 295, false);

console.log(myPlayer.info());

class AutoNews {
  constructor() {
    this.news = "";
    this.actions = [];
  }

  setNews(text) {
    this.news = text;
    this.notifyAll();
  }

  notifyAll() {
    return this.actions.forEach((subs) => subs.inform(this));
  }

  register(observer) {
    this.actions.push(observer);
  }

  unregister(observer) {
    this.actions = this.actions.filter((e) => !(e instanceof observer));
  }
}

class Jack {
  inform(msg) {
    console.log(`Jack has been informed about: ${msg.news}`);
  }
}

class Max {
  inform(msg) {
    console.log(`Max has been informed about: ${msg.news}`);
  }
}

const autoNews = new AutoNews();

autoNews.register(new Jack());
autoNews.register(new Max());

autoNews.setNews("New BMW price is 30000");
// Jack has been informed about: New BMW price is 30000
// Max has been informed about: New BMW price is 30000

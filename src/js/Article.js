export class Article {
  constructor({ id, title, urlToImg, tags, ...rest }) {
    this.id = id;
    this.title = title;
    this.urlToImage = urlToImg;
    this.tags = tags;
  }

  // article generator
  generateArticle() {
    let template = "";
    let article = document.createElement("article");
    article.className = "strategy block-shadowed";
    article.setAttribute("data-id", this.id);

    this.urlToImage &&
      (template += `<img class="strategy__image" src=${this.urlToImage} alt="strategy">`);

    if (this.title || this.tags) {
      template += `<div class="strategy__content">`;

      this.title &&
        (template += `<h3 class="strategy__name">${this.title}</h3>`);

      if (this.tags) {
        template += `<div class="strategies__tags">`;

        this.tags.map((tag) => {
          template += `<span class="tag tag_colored">${tag}</span>`;
        });

        template += `</div>`;
      }

      template += `</div>`;
    }

    article.innerHTML = template;
    return article;
  }
}

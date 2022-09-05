"use strict";

import { Article } from "./js/Article";

// date for pop-up
const data = [
  {
    id: 1,
    title: "Increasing Prosperity With Positive Thinking",
    urlToImg: "./src/img/strategies/increasing.jpg",
    tags: ["Art", "Design"],
    content:
      "Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?",
    date: "12/12/2020",
  },
  {
    id: 2,
    title: "Motivation Is The First Step To Success",
    urlToImg: "./src/img/strategies/motivation.jpg",
    tags: ["Culture"],
    content:
      "Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?",
    date: "12/12/2020",
  },
  {
    id: 3,
    title: "Success Steps For Your Personal Or Business Life",
    urlToImg: "./src/img/strategies/success.jpg",
    tags: ["Culture", "Design", "Art"],
    content:
      "Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?",
    date: "12/12/2020",
  },
  {
    id: 4,
    title:
      "Success Steps For Your Personal Or Business Life Plus Funny Image on the Back",
    urlToImg: "./src/img/strategies/success-steps.jpg",
    tags: ["Culture", "Design", "Art"],
    content:
      "Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?",
    date: "12/12/2020",
  },
  {
    id: 5,
    title: "Increasing Prosperity With Positive Thinking",
    urlToImg: "./src/img/strategies/prosperity.jpg",
    tags: ["Design"],
    content:
      "Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?",
    date: "12/12/2020",
  },
  {
    id: 6,
    title: "Increasing Prosperity With Positive Thinking",
    urlToImg: "./src/img/strategies/increasing.jpg",
    tags: ["Art", "Design"],
    content:
      "Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?",
    date: "12/12/2020",
  },
  {
    id: 7,
    title: "Motivation Is The First Step To Success",
    urlToImg: "./src/img/strategies/motivation.jpg",
    tags: ["Culture"],
    content:
      "Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?",
    date: "12/12/2020",
  },
  {
    id: 8,
    title: "Success Steps For Your Personal Or Business Life",
    urlToImg: "./src/img/strategies/success.jpg",
    tags: ["Culture", "Design", "Art"],
    content:
      "Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?",
    date: "12/12/2020",
  },
];
window.onload = function () {
  // render Article
  if (data) {
    renderArticlesToDom();
  }

  //tags
  addTagsClickHandler();
};

const addTagsClickHandler = () => {
  document.querySelector(".strategies__tags").addEventListener("click", (e) => {
    if (e.target.classList.contains("tag")) {
      let clickedTag = e.target;
      removeSelectedTags();
      selectClickedTag(clickedTag);
      if (clickedTag.innerText === "All") {
        showAllStrategies();
      } else {
        filterStrategyBySelectedTag(clickedTag.innerText);
      }
    }
  });
};

const removeSelectedTags = () => {
  let tags = document.querySelectorAll(".filter__tags .tag");
  tags.forEach((tag) => {
    tag.classList.remove("tag_selected");
    tag.classList.add("tag_bordered");
  });
};

const selectClickedTag = (clickedTag) => {
  clickedTag.classList.remove("tag_bordered");
  clickedTag.classList.add("tag_selected");
};

const showAllStrategies = () => {
  let strategies = document.querySelectorAll(".strategy-wrapper .strategy");
  strategies.forEach((strategy) => {
    strategy.classList.remove("strategy_hidden");
  });
};

const filterStrategyBySelectedTag = (selectedTag) => {
  let strategies = document.querySelectorAll(".strategy-wrapper .strategy");
  strategies.forEach((strategy) => {
    strategy.classList.add("strategy_hidden");
    strategy.querySelectorAll(".tag").forEach((tag) => {
      if (tag.innerText === selectedTag) {
        strategy.classList.remove("strategy_hidden");
      }
    });
  });
};

const renderArticlesToDom = () => {
  let strategiesWrapper = getStrategiesWrapper();
  console.log(generateArticles(data));
};

const getStrategiesWrapper = () => {
  const strategiesContiner = document.querySelector(".strategy-wrapper");
  strategiesContiner.innerHTML = "";
  return strategiesContiner;
};

const generateArticles = (data) => {
  let articles = [];
  data.forEach((article) => {
    articles.push(new Article(article));
  });
  return articles;
};

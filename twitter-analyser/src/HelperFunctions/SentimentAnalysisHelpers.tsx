import React from "react";

export interface Article {
  source: Source;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}
export interface Source {
  id: number;
  name: string;
}

// calculate the sentiment value of the set of articles retured by the API
export function calculateSentiment(articles: Article[]): number {
  var sentimentTotal: number = 0;
  articles.forEach(article => {
    var Sentiment = require("sentiment");
    var sentiment = new Sentiment();
    sentimentTotal =
      sentimentTotal + sentiment.analyze(article.description).score;
  });
  return sentimentTotal / articles.length;
}

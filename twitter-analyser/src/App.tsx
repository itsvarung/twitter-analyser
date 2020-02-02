import React from "react";
import "./App.css";
import SearchBar from "./SearchBar";
import NewsArticles from "./NewsArticles";

export interface Data {
  status: string;
  totalResults: number;
  articles: Article[];
}

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

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [sentiment, setSentiment] = React.useState(0);
  const [data, setData] = React.useState<Data>({
    status: "",
    totalResults: 0,
    articles: []
  });

  // Generates API Request with the users search Term
  async function generateRequest(searchTerm: string): Promise<Request> {
    var url =
      "https://newsapi.org/v2/everything?" +
      "q=" +
      searchTerm +
      "&" +
      "apiKey=4c66e7adfd0e448fa046d66e26a559e3";
    var req = new Request(url);
    return req;
  }

  // Performs data fetch from News API
  async function fetchNews(request: Request): Promise<Data | undefined> {
    try {
      const response = await fetch(request);
      if (!response) {
        throw new Error("There was no data returned by the API");
      }
      const typeCastedResponse: Data = await response.json();
      return typeCastedResponse;
    } catch (e) {
      console.error(e);
    }
  }

  async function calculateSentiment(articles: Article[]): Promise<number> {
    var sentimentTotal = 0;
    articles.forEach(article => {
      var Sentiment = require("sentiment");
      var sentiment = new Sentiment();
      sentimentTotal += sentiment.analyze(article.description);
      alert(sentiment);
    });
    return sentimentTotal / articles.length;
  }

  return (
    <div className="App">
      <SearchBar
        onSearchTermChanged={async searchTerm => {
          try {
            const request = await generateRequest(searchTerm);
            const returnedData = await fetchNews(request);
            if (returnedData != undefined) {
              setData(returnedData);
              const sentimentValue = await calculateSentiment(data.articles);
              setSentiment(sentimentValue);
            } else {
              throw new Error("undefined value returned");
            }
          } catch (e) {
            console.error(e);
          }
        }}
      />
      <NewsArticles articles={data.articles} />
    </div>
  );
};

export default App;

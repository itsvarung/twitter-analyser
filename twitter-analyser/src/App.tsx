import React, { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./SearchBar";
import NewsArticles from "./NewsArticles";
import SentimentAnalysisResults from "./SentimentAnalysisResults";
import { calculateSentiment } from "./HelperFunctions/SentimentAnalysisHelpers";
import { generateRequest } from "./HelperFunctions/GenerateRequest";
import { fetchNews } from "./HelperFunctions/FetchData";

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

  // performs sentiment calculation when data is returned from API
  useEffect(() => {
    if (data.articles.length != 0) {
      const sentimentValue = calculateSentiment(data.articles);
      setSentiment(sentimentValue);
    }
  });

  return (
    <div className="App">
      <SearchBar
        onSearchTermChanged={async searchTerm => {
          try {
            const request = await generateRequest(searchTerm);
            const returnedData = await fetchNews(request);
            if (returnedData != undefined) {
              setData(returnedData);
            } else {
              throw new Error("undefined value returned");
            }
          } catch (e) {
            console.error(e);
          }
        }}
      />
      <SentimentAnalysisResults sentimentValue={sentiment} />
      <NewsArticles articles={data.articles} />
    </div>
  );
};

export default App;

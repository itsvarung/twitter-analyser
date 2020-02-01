import React from "react";
import "./App.css";
import SearchBar from "./SearchBar";
import { Url } from "url";
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
  async function fetchNews(request: Request) {
    fetch(request)
      .then(function(response) {
        return response.json();
      })
      .then(function(jsonData) {
        console.log(jsonData);
        var processedData: Data = jsonData;
        setData(processedData);
      });
  }

  return (
    <div className="App">
      <SearchBar
        onSearchTermChanged={async searchTerm => {
          try {
            const request = await generateRequest(searchTerm);
            await fetchNews(request);
          } catch (e) {
            alert(e);
          }
        }}
      />
      <NewsArticles articles={data.articles} />
    </div>
  );
};

export default App;

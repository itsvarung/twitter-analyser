import React from "react";

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

// Performs data fetch from News API
export async function fetchNews(request: Request): Promise<Data | undefined> {
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

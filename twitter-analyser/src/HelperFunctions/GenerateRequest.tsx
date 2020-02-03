import React from "react";

// Generates API Request with the users search Term
export async function generateRequest(searchTerm: string): Promise<Request> {
  var url =
    "https://newsapi.org/v2/everything?" +
    "q=" +
    searchTerm +
    "&" +
    "apiKey=4c66e7adfd0e448fa046d66e26a559e3";
  var req = new Request(url);
  return req;
}

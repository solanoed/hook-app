import React from "react";
import { useFetch,useCounter } from "../Hooks";
import { LoadingQuote } from "./LoadingQuote";
import { Quote } from "./Quote";

export const MultipleCustomHooks = () => {
  const { counter, increment, decrement } = useCounter(1);
  const { data, isLoading } = useFetch(
    `https://breakingbadapi.com/api/quotes/${counter}`
  );

  const { author, quote } = !!data && data[0];

  return (
    <>
      <h2>Breaking Bad Quotes</h2>
      <hr />
      {isLoading ? (
        <LoadingQuote/>
        // <div className="alert alert-info text-center">Loading</div>
      ) : (
        <Quote quote={quote} author={author}/>
      )}


      <div className="btn-group">
      <button
        className="btn btn-primary"
        onClick={() => decrement()}
        disabled={isLoading}
        type='button'
      >
        Prev Quote
      </button>
      <button
        className="btn btn-primary"
        onClick={() => increment()}
        disabled={isLoading}
      >
        Next Quote
      </button>
      </div>
      
    </>
  );
};

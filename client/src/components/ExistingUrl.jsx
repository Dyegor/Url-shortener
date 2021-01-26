import React from "react";

export default function ExistingUrl(props) {
  return (
    <div className="existing-url">
          <h3>  {props.message} </h3>
          <a href={props.longUrl}> {props.shortUrl} </a>
        </div>
  );
}
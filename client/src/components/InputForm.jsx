import React from "react";

export default function InputForm(props) {
    return (
        <form onSubmit={props.handleSubmit}>
          <input type="text" required
            onChange={props.onChangeUrl} name="longUrl" />
          <input type="submit" value="Create" />
        </form>
    );
}
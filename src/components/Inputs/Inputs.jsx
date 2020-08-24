import React, { useEffect, useState } from "react";
import "./Inputs.css";
import getApi from "../../api/getApi";
import { inject, observer } from "mobx-react";

export const Search = inject("AutocompleteStore")(
  observer(({ withIcon, placeholder, AutocompleteStore }) => {
    const [query, setQuery] = useState("");

    useEffect(() => {
      const fn = async () => {
        if (query.length > 3) {
          await getApi({
            url: `/search/${query}`,
          }).then((res) => {
            if (res) {
              AutocompleteStore.setList(res);
            }
          });
        }

        if (!query) {
          AutocompleteStore.setList([]);
        }
      };

      fn();
    }, [query]);

    return (
      <div className={`input-wrapper w-full ${withIcon ? `with-icon` : ""}`}>
        <i className="fas fa-search"></i>
        <input
          type="search"
          placeholder={placeholder || "Search for a project"}
          className="form-input"
          name="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    );
  })
);

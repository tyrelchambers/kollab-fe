import React, { useState } from "react";
import { useEffect } from "react";

const InfiniteScroll = ({ children, parentRef, itemSelector, loadMore }) => {
  const [list, setList] = useState([]);
  const [status, setStatus] = useState("pending");

  useEffect(() => {
    const itemList = document.getElementsByClassName(itemSelector);
    setList(itemList);
  }, [children, itemSelector, status]);

  let callback = (entries, observer) => {
    if (
      entries[0].isIntersecting &&
      (status === "pending" || status === "success")
    ) {
      (async () => {
        setStatus("fetching");
        await loadMore();
        setStatus("success");
      })();
    }
  };

  let observer = new IntersectionObserver(callback, {
    root: document.querySelector("body"),
    rootMargin: "100px",
    threshold: 0.15,
  });

  if (list.length) {
    observer.observe(list[list.length - 1]);
  }
  return (
    <div>
      {children} {status === "fetching" && <p>Fetching...</p>}
    </div>
  );
};

export default InfiniteScroll;

import Link from "next/link";
import React from "react";

import classes from "./evet-item.module.css";

const EventItem = ({ title, image, date, location, id }) => {
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = location.replace(", ", "\n");
  const exploreLnk = `/events/${id}`;

  return (
    <li className={classes.item}>
      <img src={"/" + image} alt={title} />
      <div>
        <div>
          <h2>{title}</h2>
          <div>
            <time>{humanReadableDate}</time>
          </div>
          <div>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <Link href={exploreLnk}>Explore Event</Link>
      </div>
    </li>
  );
};

export default EventItem;

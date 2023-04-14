// import { useState } from "react";

export default function Panel({title, summary, isActive, onClick}) {

  return (
    <section>
      <div
        className='topic'
        onClick={onClick}
      >
        <h3>{title}</h3>
      </div>

      {isActive ? (
        <p>{summary}</p>
      ) : (
        null
      )}

    </section>
  )
};

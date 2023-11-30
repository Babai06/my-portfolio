import React from "react";

const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>Testimonial</h2>
      <section>
        <TestimonialCard
          name={"Sanu"}
          feedback={"Your Product is so Good, Keep it up."}
        />
        <TestimonialCard
          name={"Swapnanill"}
          feedback={
            "Wow what a portfolio, didn't expect this to be on youtube!"
          }
        />
        <TestimonialCard
          name={"Nilanjan"}
          feedback={"Amazing, Great to see you are doing pretty well."}
        />
      </section>
    </div>
  );
};
const TestimonialCard = ({ name, feedback }) => (
  <article>
    <img
      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
      alt="User"
    />
    <h4>{name}</h4>
    <p>
      {}
      {feedback}
    </p>
  </article>
);

export default Testimonial;

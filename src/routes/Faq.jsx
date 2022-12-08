import React from "react";
import Faq from "react-faq-component";

const FAQ = () => {
  const data = {
    rows: [
      {
        title: (
          <h1 className="pl-8 font-mono font-bold tracking-wide text-white drop-shadow-3xl text-xl md:text-2xl">
            What is a hackathon ?
          </h1>
        ),
        content: (
          <p className="px-16 pb-4 font-mono text-lg font-bold tracking-wide text-black drop-shadow-4xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero omnis
            ducimus eum atque? In minus quos, temporibus similique doloremque,
            numquam eos esse consectetur voluptatem unde molestias, dolor
            nostrum voluptatibus possimus!
          </p>
        ),
      },
      {
        title: (
          <h1 className="pl-8 font-mono font-bold tracking-wide text-white drop-shadow-3xl text-xl md:text-2xl">
            What are the services proposed in this hackathon ?
          </h1>
        ),
        content: (
          <p className="px-16 pb-4 font-mono text-lg font-bold tracking-wide text-black drop-shadow-4xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero omnis
            ducimus eum atque? In minus quos, temporibus similique doloremque,
            numquam eos esse consectetur voluptatem unde molestias, dolor
            nostrum voluptatibus possimus!
          </p>
        ),
      },
      {
        title: (
          <h1 className="pl-8 font-mono font-bold tracking-wide text-white drop-shadow-3xl text-xl md:text-2xl">
            Who can participate in this workshop ?
          </h1>
        ),
        content: (
          <p className="px-16 pb-4 font-mono text-lg font-bold tracking-wide text-black drop-shadow-4xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero omnis
            ducimus eum atque? In minus quos, temporibus similique doloremque,
            numquam eos esse consectetur voluptatem unde molestias, dolor
            nostrum voluptatibus possimus!
          </p>
        ),
      },
      {
        title: (
          <h1 className="pl-8 font-mono font-bold tracking-wide text-white drop-shadow-3xl text-xl md:text-2xl">
            What are the prerequisites for joining this workshop ?
          </h1>
        ),
        content: (
          <p className="px-16 pb-4 font-mono text-lg font-bold tracking-wide text-black drop-shadow-4xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero omnis
            ducimus eum atque? In minus quos, temporibus similique doloremque,
            numquam eos esse consectetur voluptatem unde molestias, dolor
            nostrum voluptatibus possimus!
          </p>
        ),
      },
      {
        title: (
          <h1 className="pl-8 font-mono font-bold tracking-wide text-white drop-shadow-3xl text-xl md:text-2xl">
            What is a hackathon ?
          </h1>
        ),
        content: (
          <p className="px-16 pb-4 font-mono text-lg font-bold tracking-wide text-black drop-shadow-4xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero omnis
            ducimus eum atque? In minus quos, temporibus similique doloremque,
            numquam eos esse consectetur voluptatem unde molestias, dolor
            nostrum voluptatibus possimus!
          </p>
        ),
      },
    ],
  };

  const styles = {
    bgColor: "#53758F",
    titleTextColor: "black",
    rowTitleColor: "black",
    rowContentColor: "grey",
    transitionDuration: "0.5s",
    timingFunc: "ease",
    arrowColor : "white"
  };

  const config = {
    animate: true,
    tabFocus: true,
  };

  return (
    <div className="flex h-[90vh] w-full flex-col items-center">
      <h1 className="my-5  h-[10%] font-title text-3xl drop-shadow-3xl md:text-4xl lg:text-6xl">
        FAQ
      </h1>
      <div className="w-[80%] pb-20">
        <Faq data={data} styles={styles} config={config} />
      </div>
    </div>
  );
};

export default FAQ;

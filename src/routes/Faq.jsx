import React,{useEffect} from "react";
import Faq from "react-faq-component";

const FAQ = () => {

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);
  const data = {
    rows: [
      {
        title: (
          <h1 className="pl-8 font-mono text-xl font-bold tracking-wide text-white drop-shadow-3xl md:text-2xl">
            What is a hackathon ?
          </h1>
        ),
        content: (
          <p className="xl:px-16 px-4 pb-4 font-mono text-lg font-bold tracking-wide text-white drop-shadow-2xl">
            A Hackathon is a type of a competition in which a large number of
            people meet to engage in collaborative computer programming.
          </p>
        ),
      },
      {
        title: (
          <h1 className="pl-8 font-mono text-xl font-bold tracking-wide text-white drop-shadow-3xl md:text-2xl">
            Can anyone attend CS ?
          </h1>
        ),
        content: (
          <p className="xl:px-16 px-4 pb-4 font-mono text-lg font-bold tracking-wide text-white drop-shadow-2xl">
            Yes, everyone is welcome, a computer student, student of any kind, a
            professional or just out of curiosity.
          </p>
        ),
      },
      {
        title: (
          <h1 className="pl-8 font-mono text-xl font-bold tracking-wide text-white drop-shadow-3xl md:text-2xl">
            Is it free ?
          </h1>
        ),
        content: (
          <p className="xl:px-16 px-4 pb-4 font-mono text-lg font-bold tracking-wide text-white drop-shadow-2xl">
            Absolutly, Citizenservice is and will always be totally FREE!
          </p>
        ),
      },
      {
        title: (
          <h1 className="pl-8 font-mono text-xl font-bold tracking-wide text-white drop-shadow-3xl md:text-2xl">
            What do participants gain ?{" "}
          </h1>
        ),
        content: (
          <p className="xl:px-16 px-4 pb-4 font-mono text-lg font-bold tracking-wide text-white drop-shadow-2xl">
            Participants in cs Hackathon 'll strengthen their soft skills by
            working in a team and sharpen their echnical skills as well
          </p>
        ),
      },
      {
        title: (
          <h1 className="pl-8 font-mono text-xl font-bold tracking-wide text-white drop-shadow-3xl md:text-2xl">
            Will their be mentors ?{" "}
          </h1>
        ),
        content: (
          <p className="xl:px-16 px-4 pb-4 font-mono text-lg font-bold tracking-wide text-white drop-shadow-3xl">
            There will be qualified mentors from HIS who will follow along till
            the end and satisfy all participants needs.
          </p>
        ),
      },
    ],
  };

  const styles = {
    bgColor: "#53758F",
    transitionDuration: "0.5s",
    timingFunc: "ease",
    arrowColor: "white",
  };

  const config = {
    animate: true,
    tabFocus: true,
  };

  return (
    <div className="flex h-[90vh] w-full flex-col items-center">
      <h1 className="my-5 h-[10%] self-center font-title text-2xl drop-shadow-3xl md:text-3xl lg:text-5xl">
        FAQ
      </h1>
      <div className="w-[80%] pb-20">
        <Faq data={data} styles={styles} config={config} />
      </div>
    </div>
  );
};

export default FAQ;

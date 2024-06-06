import { useState } from "react";
import "./main.css";
import { myProjects } from "./myProjects";
import { AnimatePresence, motion } from "framer-motion";

const Main = () => {
  const [currentActive, setcurrentActive] = useState("all");
  const [arr, setArr] = useState(myProjects);

  const handleClick = (buttonCategory) => {
    setcurrentActive(buttonCategory);

    const newArr = myProjects.filter((item) => {
      const ZZZ = item.category.find((myItem) => {
        return myItem === buttonCategory;
      });

      return ZZZ === buttonCategory;
    });

    setArr(newArr);
  };

  return (
    <main id="Projects" className="flex ">
      <section className="flex  left-section">
        <button
          onClick={() => {
            setcurrentActive("all");
            setArr(myProjects);
          }}
          className={currentActive === "all" ? "active" : null}
        >
          all projects
        </button>

        <button
          onClick={() => {
            handleClick("css");
          }}
          className={currentActive === "css" ? "active" : null}
        >
          HTML & CSS
        </button>

        <button
          onClick={() => {
            handleClick("js");
          }}
          className={currentActive === "js" ? "active" : null}
        >
          JavaScript
        </button>
        <button
          onClick={() => {
            handleClick("react");
          }}
          className={currentActive === "react" ? "active" : null}
        >
          React
        </button>
        {/* <button
          onClick={() => {
            handleClick("node");
          }}
          className={currentActive === "node" ? "active" : null}
        >
          Node & Express
        </button> */}
      </section>

      <section className=" flex right-section">
        <AnimatePresence>
          {arr.map((item) => {
            return (
              <motion.article
                layout
                initial={{ transform: "scale(0.4)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ type: "spring", damping: 8, stiffness: 50 }}
                key={item.imgPath}
                className="  card"
              >
                <img className="imggg" src={item.imgPath} alt="" />

                <div  className="box">
                  <h1 className="title">{item.projectTitle}</h1>
                  <p className="sub-title">
      {item.discription}
                  </p>

                  <div className="flex icons">
                    <div style={{ gap: "11px" }} className="flex">
                      {/* <div className="icon-link"></div>
                      <div className="icon-github"></div> */}
                        <a href={item.github} target="_blank" className="icon-github">  Code</a>
                        <a href={item.livedemo} target="_blank" className="icon-link" >Live Demo</a> 
                    </div>

                    {/* <a className="link flex" href="">
                      more
                      <span
                        style={{ alignSelf: "end" }}
                        className="icon-arrow-right"
                      ></span>
                    </a> */}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </section>
    </main>
  );
};

export default Main;

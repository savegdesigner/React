import React, { FunctionComponent } from "react";
import { motion } from "framer-motion";

const Box: FunctionComponent = () => {
  return (
    <motion.div
      style={{
        width: "60%",
        opacity: 0.4,
        height: "100vh",
        backgroundColor: "#222",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        textAlign: "center",
        flexFlow: "column",
      }}
      animate={{ width: "100%", opacity: 1 }}
    >
      <motion.h1 animate={{ fontSize: "34px", color: "#c94084" }}>
        Hello framer-motion
      </motion.h1>

      <motion.button
        style={{
          marginTop: "25px",
          padding: "16px 40px",
          backgroundColor: "#ff2994",
          color: "#FFF",
          border: "none",
          cursor: "pointer",
          fontWeight: "bold",
          outline: "none",
        }}
        animate={{ scale: 1.1 }}
      >
        Whats Up?
      </motion.button>
    </motion.div>
  );
};

export default Box;

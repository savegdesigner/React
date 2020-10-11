import React, { FunctionComponent } from 'react'
import { motion } from 'framer-motion'

const Box: FunctionComponent = () => {

    const loadingContainerVariants = {
        start: {
          transition: {
            staggerChildren: 0.2,
          },
        },
        end: {
          transition: {
            staggerChildren: 0.2,
          },
        },
      }

      const loadingCircleVariants = {
        start: {
          y: "0%",
        },
        end: {
          y: "100%",
        },
      }

      const loadingCircleTransition = {
        duration: 0.5,
        yoyo: Infinity,
        ease: "easeInOut",
      }

      const loadingCircle = {
          width: "20px",
          height: "20px",
          backgroundColor: "white",
          borderRadius: "50%",
          margin: "80px 10px 0px 10px"
      }

      const loadingContainer = {
          marin: 0,
          padding: 0,
          boxSizing: "border-box",
          backgroundColor: "#222",
          position: "relative",
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontFamily: "Monospace"
      }

    return (
        <motion.div
        style={loadingContainer}
        variants={loadingContainerVariants}
        initial="start"
        animate="end"
      >
          <span style={{position: "absolute"}}>Página em desenvolvimento</span>
        <motion.span
          style={loadingCircle}
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
        />
        <motion.span
          style={loadingCircle}
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
        />
        <motion.span
          style={loadingCircle}
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
        />
      </motion.div>
    )

}

export default Box
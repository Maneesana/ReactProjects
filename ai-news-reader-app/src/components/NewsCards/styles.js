import React from "react";
import { makeStyles } from "@material-ui/core/styles";
export default makeStyles({
  container: {
    padding: "0 5%",
    margin: "0",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    gap: "3rem",
    height: 350,
  },
  bigContainer: {
    margin: "10rem 0.3rem",
  },
  projectInfo: {
    fontSize: "0.9rem",
    width: "38rem",
    color: "#12a4d9",
    fontFamily: "Helvatica,Geogria,sans-serif",
    textTransform: "uppercase",
    fontWeight: "800",
  },

  projectInfoContainer: {
    marginTop: "5rem",
    marginLeft: "auto",
    marginRight: "auto",
    background: "#3F3232",
    padding: "5rem",
    paddingRight: "8rem",

    clipPath: "polygon(5% 0%, 90% 0%, 87% 100%, 0% 100%)",
  },
  headingInfo: {
    color: "#be1558",
  },
  links: {
    color: "white",
    textDecoration: "none",
  },
  icons: {
    width: "2rem",

    marginRight: "1rem",
  },
  followMe: {
    paddingBottom: "1rem",
  },
});

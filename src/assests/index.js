import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const container = document.getElementById("root");
createRoot(container).render(<App tab="home" />);

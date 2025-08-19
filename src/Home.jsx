import { useState } from "react";
import { Grid, Typography, useTheme } from "@mui/material";
import { sections } from "./constants";
import Accordion from "./components/Accordion";
import Contact from "./components/Contact";
import HoldToRedirectButton from "./components/HoldToRedirectButton";
import ReactMarkdown from "react-markdown";

function Home() {
  const [expandedIdxs, setExpandedIdxs] = useState([]);
  const theme = useTheme();

  return (
    <>
      <Grid className="container">
        <header>
          <Grid
            sx={{
              textAlign: "center",
            }}
            item
          >
            <Typography
              sx={{
                width: "100%",
                color: `${theme.palette.text.secondary} !important`,
                display: "inline-block",
                fontSize: {
                  xs: "2.2rem",
                  sm: "2.8rem",
                  md: "3.5rem",
                  lg: "4rem",
                },
                padding: "16px 0",
                lineHeight: ".9",
              }}
            >
              {"Sparsh's Guide to Master's"}
            </Typography>
          </Grid>
        </header>
        <Grid container sx={{ width: { xs: "90%", md: "60%" } }}>
          {sections.map((section, idx) => {
            if (section.title && section.content) {
              return (
                <Accordion
                  key={idx}
                  title={section.title}
                  icon={section.icon}
                  expanded={expandedIdxs.includes(idx)}
                  onChange={(_, isExpanded) => {
                    setExpandedIdxs((prev) =>
                      isExpanded
                        ? [...prev, idx]
                        : prev.filter((i) => i !== idx)
                    );
                  }}
                >
                  <div className="section-content-block">
                    <ReactMarkdown
                      components={{
                        a: ({ node, ...props }) => (
                          <a
                            {...props}
                            style={{
                              color: theme.palette.success.main,
                              textDecoration: 'none',
                              transition: 'color 0.2s',
                            }}
                            onMouseEnter={(e) => {
                              e.target.style.color = theme.palette.success.dark || theme.palette.success.main;
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.color = theme.palette.success.main;
                            }}
                          />
                        ),
                      }}
                    >
                      {section.content}
                    </ReactMarkdown>
                  </div>
                </Accordion>
              );
            } else if (section.content) {
              return (
                <div
                  key={idx}
                  style={{
                    marginBottom: "24px",
                    color: "#ccc",
                    fontSize: "1rem",
                    textAlign: "center",
                  }}
                >
                  <ReactMarkdown
                    components={{
                      a: ({ node, ...props }) => (
                        <a
                          {...props}
                          style={{
                            color: theme.palette.success.main,
                            textDecoration: 'none',
                            transition: 'color 0.2s',
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.color = theme.palette.success.dark || theme.palette.success.main;
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.color = theme.palette.success.main;
                          }}
                        />
                      ),
                    }}
                  >
                    {section.content}
                  </ReactMarkdown>
                </div>
              );
            } else {
              return null;
            }
          })}
        </Grid>
        <Contact />
      </Grid>
      <HoldToRedirectButton
        link="https://sparshhurkat.vercel.app/"
        label="If you have any questions about my journey, press and hold to ask SPOT"
      />
    </>
  );
}

export default Home;

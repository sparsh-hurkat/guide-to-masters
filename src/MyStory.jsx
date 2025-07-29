import { Typography, Grid, useTheme } from "@mui/material";
import ReactMarkdown from "react-markdown";
import CloseIcon from "@mui/icons-material/Close";
import { myStoryMarkdown } from "./constants";

function MyStory() {
  const theme = useTheme();
  return (
    <div className="container">
      <CloseIcon
        onClick={() => {
          window.location.href = "/guide-to-masters/";
        }}
        sx={{
          position: "absolute",
          right: "24px",
          top: "24px",
          cursor: "pointer",
        }}
      />
      <header>
        <Grid sx={{ marginBottom: "16px", textAlign: "center" }} item>
          <Typography
            sx={{
              color: `${theme.palette.text.secondary} !important`,
              display: "inline-block",
              fontSize: "70px",
              padding: "16px 0",
              lineHeight: ".8",
              [theme.breakpoints.down("sm")]: {
                fontSize: "40px",
              },
            }}
          >
            My Story
          </Typography>
        </Grid>
      </header>
      <div className="section-content-block">
        <ReactMarkdown>
          {myStoryMarkdown}
        </ReactMarkdown>
      </div>
    </div>
  );
}

export default MyStory;

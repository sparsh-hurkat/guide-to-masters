import { Typography, Grid, useTheme } from "@mui/material";
import ReactMarkdown from "react-markdown";
import CloseIcon from "@mui/icons-material/Close";

function MyStory() {
  const theme = useTheme();
  return (
    <div className="container">
      <CloseIcon
        onClick={() => {
          window.location.href = "/";
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
          {`I never imagined I’d be pursuing a master’s degree, let alone at Carnegie Mellon University — one of the best in the world for computer science. But life, as it turns out, has a strange way of bringing you full circle.
If you're an aspiring engineer reading this, I hope my story helps you in some small way — whether you're at a crossroads, doubting your choices, or just looking for clarity in the noise.
## 🌱 Where It All Began
Even before college, I was certain of one thing: I wanted to become a computer engineer. I loved computers — how they worked, how software could be built from nothing but logic and creativity. So I prepared hard for entrance exams and held on to that dream.
But things didn’t pan out the way I had imagined. I was left with two choices:
- Electronics engineering at VIT Vellore, a well-known, reputed college — but in a field I wasn’t passionate about.
- Computer engineering at Manipal University, Jaipur — in a field I loved, but at a college with less reputation.

I chose VIT, hoping I could switch to computer science after the first year. That didn’t happen. Reality was tougher than I had expected, and I remained in electronics engineering.

## 🧭 Losing the Map
By the end of four years, I found myself with:
- An average CGPA
- No research papers
- No formal academic background in CS
- A major I had no intention of building a career in

So I gave up on the idea of higher studies altogether. I told myself:
“India is booming in tech. You don’t need a master’s. Just build skills and find a good job.”

And that’s what I did. I dived deep into software development, took every elective I could in computer science, worked on personal projects, learned from scratch, and committed every free hour to becoming a better engineer.

Eventually, I landed my first job as a software developer at Moneyview, a fintech startup with a highly skilled tech team. For a while, I thought I was finally past the shadow of my undergraduate decisions.

But I was wrong.

## 🌟 So, What Made Me Choose Higher Education?
Moneyview was everything I had dreamed of — exciting projects, real impact, and a team that believed in me. I loved the work. The challenges were real, the problems were interesting, and I was finally doing what I had always wanted to do.

Software development is exciting, beautiful, logical, creative, frustrating, and deeply rewarding. It gave me a sense of purpose and progress.

And yet… something felt missing.

Despite being in a job I loved, I found myself searching for more — more challenges, more knowledge, more growth. I wanted to go beyond just writing good code; I wanted to build better systems, design with intention, and understand the science behind the software.

As I looked around the global tech landscape, I couldn’t help but notice the incredible innovation happening in the U.S. — the pace, the scale, and the depth of work being done by top computer scientists and engineers was inspiring. In comparison, I felt my skillset was just scratching the surface.

After hustling for nearly two years — building products, solving real-world problems, and earning a promotion — I still felt the hunger to grow deeper.

I considered switching to a multinational company and working toward an internal transfer to the U.S. But that came with its own uncertainties, slow timelines, and lack of control over the kind of work I’d get.

Instead, I asked myself:
What if I gave myself the chance to learn again — the right way? What if I could take a break from execution and focus on understanding?

That’s when the decision became clear.

I wanted to strengthen my fundamentals in software engineering, learn advanced topics, explore new ideas shaping the future of computer science, and surround myself with people who lived and breathed tech.

Higher education — at the right place — would not just give me a degree. It would give me time, mentorship, depth, and the environment to evolve into the engineer I aspired to become.`}
        </ReactMarkdown>
      </div>
    </div>
  );
}

export default MyStory;

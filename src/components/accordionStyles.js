const accordionStyles = (theme, expanded) => ({
  card: {
    background: theme.palette.background.paper,
    color: theme.palette.text.primary,
    border: `1px solid ${
      expanded ? theme.palette.text.secondary : theme.palette.primary.light
    }`,
    borderRadius: "1.2rem !important", // or '0 !important' if you want square corners
    boxShadow: expanded
      ? "0 4px 24px rgba(0,0,0,0.18)"
      : "0 2px 16px rgba(0,0,0,0.12)",
    mb: 2,
    width: "100%",
    fontFamily: "Akshar, sans-serif",
    "&:before": { display: "none" },
    transition: "box-shadow 0.2s, border-color 0.2s",
  },
  header: {
    fontFamily: "Akshar, sans-serif",
    color: theme.palette.text.primary,
    background: theme.palette.background.paper,
    borderRadius: "1rem",
    minHeight: 0,
    padding: "0 16px",
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    gap: "0.7rem",
    border: "2px solid transparent",
    borderRadius: "24px",
    transition: "background 0.2s, border-color 0.2s",
    "&:hover, &:focus": {
      border: `1px solid ${theme.palette.text.secondary}`,
      outline: "none",
    },
    "& .MuiAccordionSummary-content": {
      alignItems: "center",
      gap: 1,
      fontWeight: 700,
      fontSize: "1.18rem",
    },
  },
  emoji: {
    fontSize: "1.6rem",
    marginRight: "0.7rem",
    color: theme.palette.text.primary,
    flexShrink: 0,
  },
  title: {
    flex: 1,
    fontSize: "1.18rem",
    fontWeight: 600,
    letterSpacing: "0.01em",
    color: theme.palette.text.primary,
  },
  arrow: {
    fontSize: "1.1rem",
    marginLeft: "0.7rem",
    color: theme.palette.text.tertiary || theme.palette.text.primary,
    transition: "transform 0.2s",
  },
  details: {
    padding: "2rem 2.5rem 2.5rem 2.5rem",
    fontFamily: "Akshar, sans-serif",
    [theme.breakpoints.down("sm")]: {
      padding: "1rem 1rem 1rem 1rem",
    },
  },
});

export default accordionStyles;

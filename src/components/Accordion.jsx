import { Accordion, AccordionSummary, AccordionDetails, useTheme } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import accordionStyles from './accordionStyles';

export default function ThemedAccordion({ title, icon, children, expanded, onChange }) {
  const theme = useTheme();
  const styles = accordionStyles(theme, expanded);

  return (
    <Accordion
      expanded={expanded}
      onChange={onChange}
      sx={styles.card}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={styles.arrow} />}
        aria-controls="panel-content"
        id="panel-header"
        sx={styles.header}
      >
        <span style={styles.emoji}>{icon}</span>
        <span style={styles.title}>{title}</span>
      </AccordionSummary>
      <AccordionDetails sx={styles.details}>
        {children}
      </AccordionDetails>
    </Accordion>
  );
} 
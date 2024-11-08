import { style } from "@vanilla-extract/css";
import { font, theme } from "@/ui/style";

export const SortButtonContainer = style({
  display: "flex",
  gap: "8px",
});

export const SortButton = style({
  ...font.btn1,
  color: theme.gray[500],
  padding: "10px 10px 3px 0",
  cursor: "pointer",
  border: "none",
  background: "none",
  transition: "color 0.3s ease",
  
  ":hover": {
    color: theme.primary[600],
  },
});

export const Selected = style({
  color: theme.primary[600],
});
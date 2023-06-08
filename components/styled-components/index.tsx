import styled from "@emotion/styled";
import { Button, Paper } from "@mui/material";

const StyledPaper = styled(Paper)(({ theme, square }) => ({ padding: 20 }))
const LayoutPaper = styled(Paper)(({ theme, square }) => ({ padding: 20, height: "100vh", width: "100%" }))
const StyledButton = styled(Button)(({ theme, variant }) => ({}))
const StyledButtonLink = styled(Button)(() => ({}))

export { StyledPaper, LayoutPaper, StyledButton, StyledButtonLink }
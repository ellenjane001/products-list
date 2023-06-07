import styled from "@emotion/styled";
import { Paper } from "@mui/material";

const StyledPaper = styled(Paper)(({ theme, square }) => ({ padding: 20 }))
const LayoutPaper = styled(Paper)(({ theme, square }) => ({ padding: 20, height: "100vh", width: "100%" }))

export { StyledPaper, LayoutPaper }
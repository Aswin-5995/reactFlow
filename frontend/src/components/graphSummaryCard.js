import {
  Card,
  CardContent,
  Typography,
  Stack,
  Chip,
  Box,
  IconButton
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import CloseIcon from "@mui/icons-material/Close";

const GraphSummaryCard = ({ data, onClose }) => {
  return (
    <Card
      elevation={0}
      sx={{
        position: "relative",
        maxWidth: 360,
        borderRadius: 3,
        border: "1px solid",
        borderColor: data.is_dag ? "success.light" : "error.light",
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.9), rgba(245,247,250,0.9))",
        backdropFilter: "blur(10px)"
      }}
    >
     
      <IconButton
        size="small"
        onClick={onClose}
        sx={{
          position: "absolute",
          top: 2,
          right: 8,
          color: "red",
          "&:hover": {
            backgroundColor: "action.hover"
          }
        }}
      >
        <CloseIcon fontSize="small" />
      </IconButton>

      <CardContent>
        <Stack spacing={2}>
        
          <Box display="flex" alignItems="center" gap={1}>
            {data.is_dag ? (
              <CheckCircleIcon color="success" />
            ) : (
              <ErrorIcon color="error" />
            )}
            <Typography variant="h6" fontWeight={600}>
              Graph Analysis
            </Typography>
          </Box>

        
          <Stack direction="row" spacing={1}>
            <Chip label={`Nodes: ${data.num_nodes}`} variant="outlined" />
            <Chip label={`Edges: ${data.num_edges}`} variant="outlined" />
          </Stack>

         
          <Box>
            <Typography variant="body2" color="text.secondary">
              Valid DAG
            </Typography>
            <Typography
              variant="subtitle1"
              fontWeight={600}
              color={data.is_dag ? "success.main" : "error.main"}
            >
              {data.is_dag ? "Yes" : "No"}
            </Typography>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default GraphSummaryCard;

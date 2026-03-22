import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Paper,
  TablePagination,
  IconButton,
  TextField,
  Menu,
  MenuItem,
} from "@mui/material";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

import { useState } from "react";

const ProjectsTable = ({ projects }: any) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [search, setSearch] = useState("");

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedRow, setSelectedRow] = useState<any>(null);

  const open = Boolean(anchorEl);

  // 🔍 Filter
  const filtered = projects.filter((p: any) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  // 📄 Pagination
  const paginated = filtered.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const copyToClipboard = (key: string) => {
    navigator.clipboard.writeText(key);
  };

  return (
    <Paper
      sx={{
        background: "#161616",
        color: "#fff",
        border: "1px solid #222",
        borderRadius: "10px",
        padding: "15px",
      }}
    >
      {/* 🔝 Top bar */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "15px",
        }}
      >
        <TextField
          size="small"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{
            input: { color: "#fff" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "#333" },
              "&:hover fieldset": { borderColor: "#555" },
            },
          }}
        />
      </div>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {["#", "Project Name", "Created", "API Key", "Actions"].map(
                (h) => (
                  <TableCell
                    key={h}
                    sx={{
                      color: "#aaa",
                      borderBottom: "1px solid #222",
                    }}
                  >
                    {h}
                  </TableCell>
                )
              )}
            </TableRow>
          </TableHead>

          <TableBody>
            {paginated.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} align="center" sx={{ color: "#777" }}>
                  No projects found
                </TableCell>
              </TableRow>
            ) : (
              paginated.map((p: any, i: number) => (
                <TableRow
                  key={i}
                  hover
                  sx={{
                    "&:hover": { background: "#1e1e1e" },
                  }}
                >
                  <TableCell sx={{ color: "#fff" }}>{p.index}</TableCell>

                  <TableCell sx={{ color: "#fff" }}>{p.name}</TableCell>

                  <TableCell sx={{ color: "#aaa" }}>{p.created}</TableCell>

                  <TableCell sx={{ color: "#aaa" }}>
                    {p.apiKey.slice(0, 8)}****{p.apiKey.slice(-4)}
                  </TableCell>

                  {/* ACTION */}
                  <TableCell>
                    <IconButton
                      onClick={(e) => {
                        setAnchorEl(e.currentTarget);
                        setSelectedRow(p);
                      }}
                    >
                      <MoreVertIcon sx={{ color: "#aaa" }} />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* 🔥 MENU (ALL ACTIONS HERE) */}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        PaperProps={{
          sx: {
            background: "#111",
            color: "#fff",
            border: "1px solid #222",
          },
        }}
      >
        <MenuItem
          onClick={() => {
            copyToClipboard(selectedRow?.apiKey);
            setAnchorEl(null);
          }}
        >
          <ContentCopyIcon fontSize="small" style={{ marginRight: 8 }} />
          Copy API Key
        </MenuItem>

        <MenuItem
          onClick={() => {
            console.log("Edit", selectedRow);
            setAnchorEl(null);
          }}
        >
          <EditIcon fontSize="small" style={{ marginRight: 8 }} />
          Edit
        </MenuItem>

        <MenuItem
          onClick={() => {
            console.log("Delete", selectedRow);
            setAnchorEl(null);
          }}
        >
          <DeleteIcon fontSize="small" style={{ marginRight: 8 }} />
          Delete
        </MenuItem>
      </Menu>

      {/* 📄 Pagination FIX */}
      <TablePagination
        component="div"
        count={filtered.length}
        page={page}
        onPageChange={(e, newPage) => setPage(newPage)}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={(e) =>
          setRowsPerPage(parseInt(e.target.value, 10))
        }
        rowsPerPageOptions={[5, 10, 25]}
        sx={{
          color: "#aaa",
          "& .MuiSelect-icon": { color: "#aaa" },
        }}
      />
    </Paper>
  );
};

export default ProjectsTable;
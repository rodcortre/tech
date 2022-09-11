import { CenterContainerStyled } from "@/styled-components";
import React, { useState } from "react";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
interface Props {
  data: any[];
}
const BodyPosts = ({ data }: Props) => {
  const [parsedData, setParsedData] = useState(data);
  const style = {
    width: "100%",
    maxWidth: 360,
    bgcolor: "background.paper",
  };
  const handleDelete = (id: number) => {
    setParsedData((oldData: any) => {
      return oldData.filter((post: any) => post.id !== id);
    });
  };
  return (
    <CenterContainerStyled>
      <List sx={style} component="nav" aria-label="mailbox folders">
        {parsedData.map((post) => (
          <div key={post.id}>
            <Divider />
            <ListItem style={{ display: "flex", flexDirection: "column" }}>
              <ListItemText primary={post.title} />
              <ListItemText secondary={post.body} />
              <IconButton onClick={() => handleDelete(post.id)}>
                <DeleteIcon htmlColor="red"></DeleteIcon>
              </IconButton>
            </ListItem>
          </div>
        ))}
      </List>
    </CenterContainerStyled>
  );
};

export default BodyPosts;

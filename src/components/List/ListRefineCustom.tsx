
import React from 'react';
import { List } from "@refinedev/mui";

interface ListRefineCustomProps {
  children: React.ReactNode;
  title?: React.ReactNode;
}

export const ListRefineCustom: React.FC<ListRefineCustomProps> = ({ children, title }) => {
  return (
    <List
      canCreate={false}
      title={title}
      headerProps={{
        sx: {
          padding: "4px 16px",
          height: "auto",
          minHeight: "40px",
          "& .MuiCardHeader-content": {
            margin: 0,
          },
          "& .MuiCardHeader-title": {
            fontSize: "16px",
            lineHeight: 1.2,
          },
        },
      }}
    >
      {children}
    </List>
  );
};

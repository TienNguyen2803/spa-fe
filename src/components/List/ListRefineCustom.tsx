
import React, { ReactNode } from "react";
import { List, ListProps } from "@refinedev/mui";

interface ListRefineCustomProps extends Omit<ListProps, 'children'> {
  children: ReactNode;
  canCreate?: boolean;
}

export const ListRefineCustom: React.FC<ListRefineCustomProps> = ({ 
  children, 
  canCreate = false,
  ...rest 
}) => {
  return (
    <List
      canCreate={canCreate}
      {...rest}
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

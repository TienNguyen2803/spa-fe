import React, { ReactNode } from "react";
import { List } from "@refinedev/mui";
import { UseListProps } from "@refinedev/core";

type Props = UseListProps & {
  children: ReactNode;
};

export const ListRefineCustom: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <List
      canCreate={false}
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

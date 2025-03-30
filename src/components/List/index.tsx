import { List } from "@refinedev/mui";

export const ListRefineCustome = ({ props }) => {
  return (
    <List
      {...props}
      canCreate={false}
      title={<p>Danh sách Spa</p>}
      headerProps={{
        sx: {
          padding: "4px 16px", // giảm padding
          height: "auto", // cho phép chiều cao tự động điều chỉnh
          minHeight: "40px", // đặt chiều cao tối thiểu
          "& .MuiCardHeader-content": {
            margin: 0, // giảm margin
          },
          "& .MuiCardHeader-title": {
            fontSize: "16px", // giảm kích thước font
            lineHeight: 1.2, // giảm line height
          },
        },
      }}
    ></List>
  );
};

import { useList, useSelect } from "@refinedev/core";
import { MuiInferencer } from "@refinedev/inferencer/mui";

export const UsersList = () => {
  const { options, query } = useSelect<any>({
    resource: "users",
    optionLabel: (item) => `${item.firstName} ${item.lastName}`,
    optionValue: "id",
    defaultValue: "10",
    debounce: 500,
    queryOptions: {
      staleTime: 1000 * 60 * 5, // 5 phút
      cacheTime: 1000 * 60 * 60, // 1 giờ
    },
  });

  console.log("options", options);

  const handleOnClick = (e: any) => {
    if (query.isFetched) {
      query.refetch();
    }
  };

  return (
    <>
      <label>
        Select a category:
        <select onClick={handleOnClick}>
          {options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
    </>
  );
};

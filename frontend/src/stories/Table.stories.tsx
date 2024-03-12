import { DataTable } from "@/components/data-table/DataTable";
import { DataTablePagination } from "@/components/data-table/DataTablePagination";
import { columns } from "@/components/data-table/columns";
import { RowModel, Table, getCoreRowModel, useReactTable } from "@tanstack/react-table";

export default {
    title: 'Design System/Components/DataTable',
    component: DataTable,
    docs: {
      autodocs: false,
    },
  };

const data: any[] = [
    {
        "d" : "2023-06-18",
        "team" : "ottobi",
        "code" : "wacc",
        "v" : 7.50
      },
];

export const Basic = () => {

  return (
    <DataTable columns={columns} data={data} />
  );
}

export const Pagination = () => {

    const table = useReactTable({
        data,
        columns: [],
        getCoreRowModel: getCoreRowModel(),
    })

      return (
      <DataTablePagination table={table} />
    );
};

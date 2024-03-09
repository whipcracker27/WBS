import { ColumnDef } from "@tanstack/react-table";

import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"

export type Data = {
    d: Date
    team: string
    code: string
    v: number
  };

export const columns: ColumnDef<Data>[] = [
    {header: "Date", accessorKey: "d" },
    { header: "Team", accessorKey: "team" },
    { header: "Code", accessorKey: "code" },
    { header: "Value", accessorKey: "v" }
];

"use client"

import { ColumnDef } from "@tanstack/react-table"

export const  columns = [   
  {
    accessorKey: "year",
    header: "Year",
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "character",
    header: "Character",
  },
]

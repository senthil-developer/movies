"use client"

import { ColumnDef } from "@tanstack/react-table"
import Link from "next/link"

export const  columns = [   
  {
    accessorKey: "year",
    header: "Year",
  },
  {
    accessorKey: "title",
    header: "Title",
    cell:({row})=>{
      const res = row.getValue('title')
      return <Link href={'f'}>{res}</Link>
    }
  },
  {
    accessorKey: "character",
    header: "Character",
  },
]

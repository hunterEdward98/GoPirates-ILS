import {
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  TableContainer,
  Table,
  Paper,
} from '@mui/material';
interface GenericTableProps<T> {
  data: T[];
  headers: string[];
  fields: Array<keyof T>;
  rowClick?: (arg0: T) => void;
}
export function GenericTable<T>({
  data,
  fields,
  headers,
  rowClick,
}: GenericTableProps<T>) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {headers.map((header) => (
              <TableCell key={header}>{header}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((dataItem) => (
            <TableRow
              key={JSON.stringify(dataItem)}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              onClick={() => (rowClick !== undefined ? rowClick(dataItem) : {})}
            >
              {fields.map((field) => (
                <TableCell key={JSON.stringify(field)}>
                  {JSON.stringify(dataItem[field])}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

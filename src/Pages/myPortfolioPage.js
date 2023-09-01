import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

function MyPortfolioPage({ data }) {
  const { altin, doviz } = data;

  // Hem altin hem doviz verilerini birleştirme
  const allData = [...altin, ...doviz];
  console.log(altin);
  console.log(altin);
  // Tarihe göre verileri sıralama

  // Bir tarih stringini Date nesnesine çeviren fonksiyon
  function parseDate(dateString) {
    const [day, month, year] = dateString.split("/");
    return new Date(`${year}-${month}-${day}`);
  }

  // ...

  allData.sort(
    (a, b) =>
      parseDate(b.created || b.created_altin) -
      parseDate(a.created || a.created_altin)
  );

  return (
    <div>
      <div className="baslikaltibosluk">
        <h1>Portföyüm</h1>
      </div>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Tür</TableCell>
              <TableCell>Zaman</TableCell>
              <TableCell>Adet</TableCell>
              <TableCell>Birim Fiyatı</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allData.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.altinTuru || item.dovizTuru}</TableCell>
                <TableCell>{item.created || item.created_altin}</TableCell>
                <TableCell>{item.quantity || item.quantity_altin}</TableCell>
                <TableCell>{item.unitPrice || item.unitPrice_altin}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default MyPortfolioPage;

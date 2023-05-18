import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  table: {
    display: 'table',
    width: '100%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    margin: 'auto',
    flexDirection: 'row',
  },
  tableCellHeader: {
    fontSize: 12,
    fontWeight: 'bold',
    backgroundColor: '#f2f2f2',
    padding: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCell: {
    fontSize: 10,
    padding: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
});

const PDFReport = ({ Prestaciones }) => {
  const currentDate = new Date().toLocaleString();
  return (
    <Document>
      <Page style={styles.page}>
        <View>
          <Text style={styles.title}>Empleados</Text>
          <Text>Fecha y Hora de Generación: {currentDate}</Text>
        </View>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={styles.tableCellHeader}>Empleado</Text>
            <Text style={styles.tableCellHeader}>Departamento</Text>
            <Text style={styles.tableCellHeader}>Salario</Text>
            <Text style={styles.tableCellHeader}>ISSS Laboral</Text>
            <Text style={styles.tableCellHeader}>ISSS Patronal</Text>
            <Text style={styles.tableCellHeader}>AFP Laboral</Text>
            <Text style={styles.tableCellHeader}>AFP Patronal</Text>
            <Text style={styles.tableCellHeader}>Total descuentos</Text>
            <Text style={styles.tableCellHeader}>Renta</Text>
            <Text style={styles.tableCellHeader}>Salario liquido</Text>
          </View>
          {Prestaciones.map((prest) => (
            <View style={styles.tableRow} key={prest.id}>
              <Text style={styles.tableCell}>{prest.empleado}</Text>
              <Text style={styles.tableCell}>{prest.departamento}</Text>
              <Text style={styles.tableCell}>{prest.salario}</Text>
              <Text style={styles.tableCell}>{prest.isss_laboral}</Text>
              <Text style={styles.tableCell}>{prest.isss_patronal}</Text>
              <Text style={styles.tableCell}>{prest.afp_laboral}</Text>
              <Text style={styles.tableCell}>{prest.afp_patronal}</Text>
              <Text style={styles.tableCell}>{prest.total_descuento}</Text>
              <Text style={styles.tableCell}>{prest.impuesto_renta}</Text>
              <Text style={styles.tableCell}>{prest.sueldo_liquido}</Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};

export default PDFReport;
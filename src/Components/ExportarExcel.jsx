import * as XLSX from "xlsx";

export function ExportarExcel(ListaCliente,YearActual,ImpActual,FiltroActivo,TextoFiltro)
{
    let DatosClientes = [];

        const GetMonths = (Impuestos) => {

            let MesesRecibidos = {};

            for(let i=0; i<12; i++)
            {
                let Mes = new Date(0, i);
                let NombreMes = Mes.toLocaleString('es', { month: 'short'});
                const MesUpper = NombreMes.charAt(0).toUpperCase() + NombreMes.slice(1);

                MesesRecibidos[MesUpper] = Impuestos && Impuestos.includes(i) ? "✓" : "✕";
            }

            return MesesRecibidos;
        }


        Object.entries(ListaCliente).map((element) => {
        
            const docs = element[1][YearActual]?.[ImpActual];

            if(!FiltroActivo) {

                let MesesRecibidos = GetMonths(docs);

                DatosClientes.push({ Cliente: element[0], ...MesesRecibidos});
            }
            else {

                if(new RegExp(TextoFiltro, "i").test(element[0])) {

                    let MesesRecibidos = GetMonths(docs);

                    DatosClientes.push({ Cliente: element[0], ...MesesRecibidos});
                }
            }
        })

        // Crear hoja de trabajo (worksheet)
        const worksheet = XLSX.utils.json_to_sheet(DatosClientes);

        const wscols = [
            { wpx: 300 },
            { wpx: 50 },            
            { wpx: 50 },
            { wpx: 50 },            
            { wpx: 50 },
            { wpx: 50 },            
            { wpx: 50 },
            { wpx: 50 },            
            { wpx: 50 },
            { wpx: 50 },            
            { wpx: 50 },
            { wpx: 50 },            
            { wpx: 50 }  
          ];
          
          const headerStyle = {
            font: { bold: true, color: { rgb: "FFFFFF" } },
            fill: { fgColor: { rgb: "4F81BD" } },
            alignment: { horizontal: "center" },
            border: {
              top: { style: 'thin', color: { rgb: "000000" } },
              bottom: { style: 'thin', color: { rgb: "000000" } },
              left: { style: 'thin', color: { rgb: "000000" } },
              right: { style: 'thin', color: { rgb: "000000" } }
            }
          };

        worksheet['!cols'] = wscols; 

        Object.keys(worksheet).forEach(cell => {
            if (cell.includes("1")) {
                worksheet[cell].s = headerStyle;
            }
          });

        console.log(worksheet);

        // Crear libro de trabajo (workbook)
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, `${ImpActual} Recibidos`);

        XLSX.writeFile(workbook, `${ImpActual} Recibidos.xlsx`);
}
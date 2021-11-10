import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, _MatTableDataSource } from '@angular/material/table';
import { LogBpmVO } from '@intercam/model';
import { SoporteService } from '../../../services/soporte.service';


@Component({
  selector: 'intercam-consulta-log',
  templateUrl: './consulta-log.component.html',
  styleUrls: ['./consulta-log.component.scss']
})
export class ConsultaLogComponent implements OnInit {
  nombre:string= "iron man ";
  edad: number=45;
  filterPost = '';
  titulo="Consulta de log";
  logi:string= "";
  borrado:string ="";

heroes: string[]= ['spiderman','ironam', 'hulk', 'thor'];


 
  displayedColumns: string[] = ['Hora','Contrato','Usuario','Error','Mensaje'];
  dataSource = new MatTableDataSource<LogBpmVO>();
 @ViewChild(MatPaginator) paginator: MatPaginator;
  logBPM : string; //es el log del bpm
 

 constructor(private soporte: SoporteService ){ // el constructor debe tener un componente con el nombre de consulta.service pero no se como crearlo 
  this.logBPM = sessionStorage.getItem('logBpm')
 }
 
  ngOnInit(): void {
  this.cargaDatos();
  
  }
  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }  
  
  refresh(): void {
  this.cargaDatos();
}
  cargaDatos():void {

    this.soporte.showlogBPM().subscribe(
      then =>{ 
        this.dataSource = new MatTableDataSource(then);
        this.dataSource.paginator= this.paginator;
      },
      error => console.error(error)
      
    );
  }
  rowSelected(event){
   this.logi = event.stacktrace;
   
   //console.log("selected:", this.logi);
  }
 

  
 
  
}

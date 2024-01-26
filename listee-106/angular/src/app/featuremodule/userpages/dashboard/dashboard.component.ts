import { Component,ViewChild  } from '@angular/core';
import { routes } from 'src/app/core/helpers/routes/routes';
import { DataService } from 'src/app/service/data.service';
import {
  ApexAxisChartSeries,
  ApexTitleSubtitle,
  ApexChart,
  ApexXAxis,
  ChartComponent
} from "ng-apexcharts";
export type ChartOptions = {
  series: ApexAxisChartSeries | any;
  chart: ApexChart | any;
  title: ApexTitleSubtitle |any;
  xaxis: ApexXAxis |any;
  dataLabels:|any;
  animations:|any;
  colors:|any;
  toolbar:|any;
  legend:|any;
  markers:|any;
  stroke:|any;
};


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  public routes=routes;
  public dashboarddata:any=[]
  public dashboardreview:any=[]
  @ViewChild("chart") chart !: ChartComponent ;
  public chartOptions: Partial<ChartOptions>;
  constructor(private DataService:DataService) {
    this.chartOptions = {
      series: [
        {
          name: "Series 1",
          data: [80, 50, 30, 40, 100, 20]
        },
        {
          name: 'Series 2',
          data: [20, 30, 40, 80, 20, 80]
        },
        {
          name: 'Series 3',
          data: [44, 76, 78, 13, 43, 10],
        }
      ],
      colors:['#666666', '#C10037', '#666666'],
      chart: {
        height: 350,
        type: "radar",
        dropShadow: {
          enabled: false,
          blur: 1,
          left: 1,
          top: 1
        },
      },
      dataLabels: {
        enabled: false
        },
        animations: {
          enabled: true,
          easing: 'easeinout',
          speed: 800,
          animateGradually: {
            enabled: true,
            delay: 150
          },
          dynamicAnimation: {
            enabled: true,
            speed: 350
          },
         
          },
          legend: {
            show: false,
           },
           markers: {
            size: 0
          },
          
          
          stroke: {
            width: 2
          },
          
      
      
      xaxis: {
        categories: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
      },
     
        
    };
    this.dashboarddata=this.DataService.dashboarddata
    this.dashboardreview=this.DataService.dashboardreview
  }

}

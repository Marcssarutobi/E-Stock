<template>
  <main class="mains">
    
    <div class="content">
      
      <div class="stat">
        <div class="cards">
          <i class="fas fa-store"></i>
          <div class="info">
            <span class="title">Total Produits</span>
            <span class="number">100558</span>
          </div>
        </div>
        <div class="cards">
          <i class="fas fa-wallet"></i>
          <div class="info">
            <span class="title">Coût total(FCFA)</span>
            <span class="number">2059687</span>
          </div>
        </div>
        <div class="cards">
          <i class="fas fa-dollar-sign"></i>
          <div class="info">
            <span class="title">Vente(FCFA)</span>
            <span class="number">4059687</span>
          </div>
        </div>
        <div class="cards">
          <i class="fas fa-clock"></i>
          <div class="info">
            <span class="title">Produits Périmé</span>
            <span class="number">100558</span>
          </div>
        </div>
      </div>

      <div class="graph">
          <div class="areas">
            <h4>Revenue par Mois</h4>
            <div id="Area" ref="Area"></div>
          </div>
          <div class="pin">
            <h4>Top 05 Produits vendue (Janvier)</h4>
            <div id="Pin" ref="Pin"></div>
          </div>
      </div>

      <div class="tableau">
        <h4>Vente Récente</h4>
        <table class="table table-striped table-hover">
          <thead class=" table-light ">
            <tr>
              <th scope="col">Référence</th>
              <th scope="col">Produits</th>
              <th scope="col">Qte Vendue</th>
              <th scope="col">Prix Unitaire(FCFA)</th>
              <th scope="col">Prix Totale(FCFA)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">87305928</th>
              <td>Yaourt Franboise</td>
              <td>03</td>
              <td>500</td>
              <td>1500</td>
            </tr>
            <tr>
              <th scope="row">98765432</th>
              <td>Pain Complet</td>
              <td>05</td>
              <td>300</td>
              <td>1200</td>
            </tr>
            <tr>
              <th scope="row">76543210</th>
              <td>Jus d'Orange</td>
              <td>02</td>
              <td>750</td>
              <td>2000</td>
            </tr>
            <tr>
              <th scope="row">54321098</th>
              <td>Pâtes Fusilli</td>
              <td>01</td>
              <td>400</td>
              <td>800</td>
            </tr>
            <tr>
              <th scope="row">24681012</th>
              <td>Céréales Miel</td>
              <td>04</td>
              <td>200</td>
              <td>600</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>

  </main>
</template>

<script>
import ApexCharts from 'apexcharts'
export default {
    name:'Accueil-Vue',
    mounted(){
      this.ChartArea()
      this.ChartPin()
    },
    methods:{
      ChartArea(){
        const option ={
          series: [{
            name: 'series1',
            data: [5000, 6000, 5500, 5800, 7000, 7500, 8000, 9000, 8500, 7800, 6800, 9000]
          }],
          chart: {
            height: 350,
            type: 'area'
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth'
          },
          xaxis: {
            type: 'text',
            categories: ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil", "Août", "Sep", "Oct", "Nov", "Déc"]
          },
          tooltip: {
            x: {
              format: 'dd/MM/yy HH:mm'
            },
          },
        }
        const Area = new ApexCharts(this.$refs.Area,option)
        Area.render()
      },
      ChartPin(){
        const option = {
          series: [44, 55, 41, 17, 15],
          labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
          chart: {
            type: 'donut',
          },
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 300,
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        }
        const Pin = new ApexCharts(this.$refs.Pin,option)
        Pin.render()
      }
    }
}
</script>

<style>
  .content{
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    height: 100%;
    padding: 15px;
    overflow-y: scroll;
  }
  .content .stat{
    width: 100%;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
  }
  .content .stat .cards{
    width: calc(100%/4 - 20px);
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 0 5px rgba(0, 0, 0, .5);
    background: #fff;
    padding: 10px;
    border-radius: 15px;
  }
  .content .stat .cards i{
    width: 15%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    color: #0a2c5a;
  }
  .content .stat .cards .info{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    width: 85%;
    height: 100%;
  }
  .content .stat .cards .info .title{
    font-size: 19px;
    font-weight: 600;
    color: #0a2b5a9a;
  }
  .content .stat .cards .info .number{
    font-size: 28px;
    font-weight: 600;
  }
  .content .graph{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 10px;
  }
  .content .graph .areas{
    width: 50%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
    box-shadow: 0 0 5px rgba(0, 0, 0, .5);
    border-radius: 5px;
  }
  .content .graph .areas #Area{
    width: 100%;
  }
  .content .graph .pin{
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
    box-shadow: 0 0 5px rgba(0, 0, 0, .5);
    border-radius: 5px;

  }
  .content .graph .pin h4{
    width: 100%;
  }
  .content .graph .pin #Pin{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 500px;
  }
  .tableau{
    width: 100%;
    padding: 10px;
    background: #fff;
    box-shadow: 0 0 5px rgba(0, 0, 0, .5);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 10px;
    border-radius: 10px;
  }

</style>
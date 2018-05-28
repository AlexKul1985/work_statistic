import { Line , mixins} from 'vue-chartjs'
//import Vue from 'vue'

//import axios from 'axios'
export default {
  extends: Line,
  mixins: [mixins.reactiveProp],
  props: ['chartData', 'options'],
 
  mounted () {
   console.log('mounted BarEx')
   
    this.renderChart(this.chartData, this.options)
  },
  created(){
    
    
    console.log(' created BarEx',this)
   
    
   
  }

}
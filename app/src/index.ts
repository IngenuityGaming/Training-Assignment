
import {APIService} from './ts/APIService';

const api = new APIService();

const table = document.getElementById('table');

const btn = document.querySelector('#btn');

let selectedValue: string;
const x:string = "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/";
var y:string;
var answer:string;
btn.addEventListener('click',(event) => {
    event.preventDefault();
    selectedValue = (<HTMLInputElement>document.getElementById('optionsSelect')).value;
   
    if(selectedValue == 'All')
    {
        showData.textContent = null;
        y = "npm-covid-data/";
        answer = x + y;
        api.API = answer;
        dispalycovidData();
    }
    if(selectedValue == 'Asia'){
        showData.textContent = null;
        y = "npm-covid-data/asia";
        answer = x + y;
        api.API = answer;
        dispalycovidData()
            }
      if(selectedValue == 'North America'){
                showData.textContent = null;
                y = "npm-covid-data/northamerica";
                answer = x + y;
                api.API = answer;
                dispalycovidData()
       }
    if(selectedValue == 'Africa'){
        showData.textContent = null;
        y = "npm-covid-data/africa";
        answer = x + y;
        api.API = answer;
        dispalycovidData()
            }
    if(selectedValue == 'Europe'){
        showData.textContent = null;
        y = "npm-covid-data/europe";
        answer = x + y;
        api.API = answer;
        dispalycovidData()
                    }
  
    if(selectedValue == 'South America'){
        showData.textContent = null;
        y = "npm-covid-data/southamerica";
        answer = x + y;
        api.API = answer;
        dispalycovidData()
            }
});

const showData = document.querySelector('#showData');
function dispalycovidData(){
    api.getCovidData().then(data => {
        const table = document.createElement('table');
        showData.appendChild(table);
        const keys = Object.keys(data[0]);
        const topRow = document.createElement('tr');
        table.appendChild(topRow);
        keys.forEach(key => {
            const th = document.createElement('th');
            th.textContent = key;
            topRow.appendChild(th);
        })
        data.forEach(element =>{
            const keys = Object.keys(element);
            const row = document.createElement('tr');
            keys.forEach(key =>{
                const td = document.createElement('td');
                td.textContent = (<any>element)[key];
                row.appendChild(td);
            });
            table.appendChild(row);
            })
            
        });
}
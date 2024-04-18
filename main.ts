import { Serie } from "./Serie.js";
import { series } from "./data.js";

let seriesTabla: HTMLElement = document.getElementById("series-table")!;
showData(series);

function showData(series: Serie[]): void {
    let seriesTableBody: HTMLElement = document.createElement("tbody");
    for(let serie of series) {
        let serieRow: HTMLElement = document.createElement("tr");
        serieRow.innerHTML = `<td class="table-active"><b>${serie.id}</b></td>
                              <td class="table-active" style="color:cornflowerblue">${serie.name}</td>
                              <td class="table-active">${serie.channel}</td>
                              <td class="table-active">${serie.seasons}</td>`;
        seriesTableBody.appendChild(serieRow);
    }
    seriesTabla.appendChild(seriesTableBody);
}

let average: HTMLElement = document.getElementById("average")! ; 
showAverage(series)

function showAverage(series: Serie[]): void {
    let totalSeasons: number = 0;
    for(let serie of series) {
        totalSeasons += serie.seasons;
    }
    let averageSeasons: number = totalSeasons / series.length;
    average.innerHTML = `Season average: ${averageSeasons}`;
}
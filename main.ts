import { Serie } from "./Serie.js";
import { series } from "./data.js";

let seriesTabla: HTMLElement = document.getElementById("series-table")!;
showData(series);

function showData(series: Serie[]): void {
    let seriesTableBody: HTMLElement = document.createElement("tbody");
    for(let serie of series) {
        let serieRow: HTMLElement = document.createElement("tr");
        serieRow.addEventListener("click", listenerShowMoreData);
        serieRow.innerHTML = `<td class="table-active"><b>${serie.id}</b></td>
                              <td class="table-active serie-name" style="color:cornflowerblue">${serie.name}</td>
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

let moreData: HTMLElement = document.getElementById("info")! ; 

function listenerShowMoreData(ev: Event) {
    var target = ev.target as HTMLElement;
    var serieIdElement = target.parentElement?.querySelector("td:first-child b");
    var serieIdText: string = serieIdElement ? serieIdElement.textContent || "" : "";
    var serieId: number = parseInt(serieIdText, 10);
    console.log("ID de la serie:", serieId);
    for(let serie of series) {
        if (serie.id == serieId) {
            var image = serie.imageUrl;
            console.log("Imagen de la serie:", image);
            moreData.innerHTML=`<div class="card">
                                    <img src="${image}" class="card-img-top" alt="Series image" id="image" width="70%">
                                    <div class="card-body">
                                        <h5 class="card-title">${serie.name}</h5>
                                        <p class="card-text">${serie.description}</p>
                                        <a class="btn btn-primary" href="${serie.website}">Mas Información</a>
                                    </div>
                                </div>`;
        }
    }
}
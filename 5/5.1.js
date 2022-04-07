function askTvSerie()
{
    let favSerie = {};
    favSerie.name = prompt("your favorite serie's name");
    favSerie.prodyear = prompt("year of production");
    
    while(favSerie.cast)
    favSerie.cast = prompt("Names of the cast members (there can be as much as you want, type end to stop your list)");

    return favSerie;
}
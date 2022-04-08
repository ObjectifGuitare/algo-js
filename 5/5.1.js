function askTvSerie()
{
    const favSerie = {
      cast: [],
      name: prompt('Name of the serie?'),
      year: prompt('Year of production?')
    };
    let isCastOver = false;
    
    
    while(!isCastOver)
    {
      const answer = prompt('Name of the cast member');
  
      if(answer === 'end' || answer == null)
        isCastOver = true;
      else
        favSerie.cast.push(answer);
    }
    return favSerie;
  }

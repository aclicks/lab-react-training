function Rating(rate) {
  if (rate.children >= 0 && rate.children < 0.5)
    return (
      <div className="Rating">
        {'\u2606'}
        {'\u2606'}
        {'\u2606'}
        {'\u2606'}
        {'\u2606'}
      </div>
    );
  if (rate.children >= 0.5 && rate.children < 1.5)
    return (
      <div className="Rating">
        {'\u2605'}
        {'\u2606'}
        {'\u2606'}
        {'\u2606'}
        {'\u2606'}
      </div>
    );
    if (rate.children >= 1.5 && rate.children < 2.5)
    return (
      <div className="Rating">
        {'\u2605'}
        {'\u2605'}
        {'\u2606'}
        {'\u2606'}
        {'\u2606'}
      </div>
    );
    if (rate.children >= 2.5 && rate.children < 3.5)
    return (
      <div className="Rating">
        {'\u2605'}
        {'\u2605'}
        {'\u2605'}
        {'\u2606'}
        {'\u2606'}
      </div>
      
    );
    if (rate.children >= 3.5 && rate.children < 4.5)
    return (
      <div className="Rating">
        {'\u2605'}
        {'\u2605'}
        {'\u2605'}
        {'\u2605'}
        {'\u2606'}
      </div>
    );
    if (rate.children >= 4.5 && rate.children <= 5)
    return (
      <div className="Rating">
        {'\u2605'}
        {'\u2605'}
        {'\u2605'}
        {'\u2605'}
        {'\u2605'}
      </div>
    );
  
}

export default Rating;

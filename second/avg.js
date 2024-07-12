const avg = (n) => {
    if (n.length === 0) return 0;
    const output = n.reduce((hp, num) => hp + num, 0);
    return (output / n.length).toFixed(2);
  };
  
  module.exports = avg;
  
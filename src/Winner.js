// Child Component
const Winner = (squares) => {
  const lines = [
  [0,1,2],
  [0,3,6],
  [3,4,5],
  [1,4,7],
  [6,7,8],
  [2,5,8],
  [0,4,8],
  [2,4,6]
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a,b,c] = lines[i];
    if (squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }  
  }
}
export default Winner;
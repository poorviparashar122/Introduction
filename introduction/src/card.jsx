
  const a={
    listStyle :"square",
   }
   const card2={
    listStyle :"circle",
   }
function  Static(){
  return (
       <div> 
           <h3>Moblie Operating System</h3>
        <ul>
    <li>Android</li>
    <li>Blckberry</li>
    <li>iPhone</li>
    <li>Windows Phone</li>
</ul>
<h3>Moblie  Manufactures</h3>
        <ul>
    <li style={a}>Samsung</li>
    <li style={a}>HTC</li>
    <li>Micromax</li>
    <li style={card2}>Apple</li>
</ul>
</div>) ;
  
}
export default Static

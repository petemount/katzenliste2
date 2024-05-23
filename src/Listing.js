import './styles/Listing.css'

function CatListing ({ Name, Preis, imageURL }) {
        return (   
         <div className="cat-list"> 
             <img src= {imageURL}
             alt="alternativtext" style={{width: '300px', height: 'auto'}}/>
             <h2>Rasse: {Name} </h2>
             <h2>Preis: €{Preis}</h2>
             <div style={{border: '7px solid black'}}/>            
         </div>
     )
 }



export default CatListing
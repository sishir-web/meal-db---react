 import React, { useState } from 'react'
 import { useEffect } from 'react'
 import './Mealdb.css';

 const Mealdb = () => {
    const [mealsData, setMealsData]=useState([]);
    const[area,setArea]=useState("indian");
    const[searchdata,setSearchData]=useState("");
    useEffect(() => {
        const fetchDataFromApi = async ()=>{
           const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);

           const data = await api.json();

           console.log("the data is:",data.meals);

           setMealsData(data.meals);
        };
        fetchDataFromApi();
        
      }, [area])

      const HandleSubmit= async (e)=>{
         e.preventDefault();
         const api1= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchdata}`);
         const data1 = await api1.json();
         console.log("the daaata is:",data1.meals)
         if(data1.meals){
         setMealsData(data1.meals);
          
         } else{
            alert(`no results found for ${searchdata}`);
              return false;
         }
         setSearchData("");
        }
   return (
     <>
     <div>
      <div  style={{width:"1200px", display:"flex",justifyContent:"center",flexWrap:"wrap"
         ,justifySelf:"center",alignSelf:"center",gap:"30px", marginTop:"10px"}}>

         <button className='btn'  onClick={()=>setArea('Indian')}
         style={{height:"50px",width:"120px",
         border:"15px light",color:"yellow",fontSize:"larger", backgroundColor:"maroon",borderRadius:"10px",
         cursor:"pointer",
         }}>Indian</button>

         <button  onClick={()=>setArea('japanese')}
         style={{height:"50px",width:"120px",border:"non1px lighte",color:"yellow",fontSize:"larger", backgroundColor:"maroon",borderRadius:"10px",cursor:"pointer"}}>Japanese</button>

         <button  onClick={()=>setArea('american')}
          style={{height:"50px",width:"120px",border:"1px light",color:"yellow",fontSize:"larger", backgroundColor:"maroon",borderRadius:"10px",cursor:"pointer"}}>American</button>

         <button  onClick={()=>setArea('british')}
          style={{height:"50px",width:"120px",border:"1px light",color:"yellow",fontSize:"larger", backgroundColor:"maroon",borderRadius:"10px",cursor:"pointer"}}>British</button>

         <button  onClick={()=>setArea('russian')}
         style={{height:"50px",width:"120px",border:"1px light",color:"yellow",fontSize:"larger", backgroundColor:"maroon",borderRadius:"10px",cursor:"pointer"}}>Russian</button>

         <button onClick={()=>{setArea("chinese"); console.log("vayenaaa")}}
         style={{height:"50px",width:"120px",border:"1px light",color:"yellow",fontSize:"larger", backgroundColor:"maroon",borderRadius:"10px",cursor:"pointer"}}
         >Chinese</button>
      </div>
      <div style={{textAlign:"center",}}>
         <form onSubmit={HandleSubmit}>
            <input type='text' placeholder='enter the item you want to search'
            onChange={(e)=>setSearchData(e.target.value)}
            value={searchdata}
            ></input>
         <button type='submit'
         style={{height:"40px",width:"120px",border:"1px light",color:"yellowgreen",fontSize:"larger", backgroundColor:"maroon",borderRadius:"10px",cursor:"pointer",}}
         >Search</button>
         </form>
      </div>
     <div style={
        {    width:"90%", display:"flex", justifyContent:"center",
            flexWrap:"wrap",gap:"10px",
           justifySelf:"center", gap:"76px", marginTop:"30px",
           }}>
     {mealsData.map((data)=>(
        <div key={data.idMeal}>
            <div >
                <img style={{width:"300px", height:"300px", borderRadius:"20px"}} src={data.strMealThumb} alt="meals" />
                <h3 style={{textAlign:"center"}}>{data.strMeal}</h3>
            </div>
        </div>
        
     ))}
     </div>
     </div>
     </>
   )
 }
 
 export default Mealdb
 
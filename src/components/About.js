/* eslint-disable */
import React ,{useState,useEffect}from 'react'

export const About =() =>{
   
    const [data, setdata] =useState([])
    
    useEffect(()=>{
        const getData = async () => {
            const res =await fetch('https://www.integrationapi.tk/listar/alumnos')
            const data1 = await res.json()
            
            setdata(data1)
       }
        getData()
        
    },[])
      
    return (
<div className="row">    
    { <table className="table table-hover">
        <thead>
            <tr className="table-success">
                <th scope="col">Codigo</th>
                <th scope="col">Nombre</th>
                <th scope="col">Dni</th>
            </tr>
        </thead>
        <tbody>
           { data?.map((value)=>
               <tr key={value._id}>
                    <th>{value.cod_alumno}</th>
                    <th>{value.nombre}</th>
                    <th>{value.dni}</th>

               </tr>
           )
           }
        </tbody>
     </table> }       
 </div>
    )
}

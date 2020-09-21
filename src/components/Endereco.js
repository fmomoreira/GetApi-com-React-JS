import React, { Fragment, useEffect, useState,} from 'react'



async function  getEnderecos(){
    let response = await fetch('https://servicodados.ibge.gov.br/api/v3/calendario/')
    let data =  await response.json()
    return data;
}


const Endereco = (props) =>{
    const [enderecos, setEnderecos] = useState([])
    
            useEffect(() => {
                getEnderecos().then (data =>{
                setEnderecos(data['items'])
               })
            }, [])

    return (
        <Fragment>
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Titulo</th>
      <th scope="col">Data Divulgacao</th>
     
    </tr>
  </thead>
  <tbody>
  {enderecos.map((endereco) =>
                    <tr>    
                        <td scope="row">{endereco.id}</td>
                        <td>{endereco.titulo}</td>
                        <td> {endereco.data_divulgacao}</td> 
                    </tr>
                    )}

  </tbody>
</table>

</Fragment>

      
              
        
    )
}

export default Endereco
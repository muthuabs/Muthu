import React from 'react'

export default function Task() {
  return (
    <div class="container">
        <h2 className='text-center my-2 'style={{fontFamily:'Roboto',fontWeight:'bolder'}} ><u>INVOICE</u></h2>
        <div className='row'>
          <div>
        <img src="https://weconnect.chat/wp-content/uploads/2022/08/logo.png" width="10%" alt="Cinque Terre"></img></div>
            <div className='col-6'>
                <dv>
                <div>
                    <h6 style={{fontFamily:'Roboto'}}>weConnect.Chat</h6>
                </div>
                <div>
                    <h6 style={{fontFamily:'Roboto'}}>Portland 66,1046 BD</h6>
                </div>
                <div>
                    <h6 style={{fontFamily:'Roboto'}}>Amsterdam,</h6>
                </div>
                <div>
                    <h6 style={{fontFamily:'Roboto'}}>Netherland</h6>
                </div>
                </div>
                <hr style={{height:'2%',bolder:"10px"}}></hr>
            </div>
            <div className='col-6'>
                <div class="card w-100 p-3" style={{backgroundColor:"lightgray",border:'none',borderRadius:1}}>
                    <div className='d-flex'>
                   <h4 style={{fontFamily:'Roboto',fontWeight:'bold'}}>Invoice Number: </h4>
                   <p className='my-2' style={{marginLeft:"39%", fontFamily:'Roboto'}}>WEC64378695021</p>
                   </div>
                   <div className='d-flex'>
                   <h4 style={{fontFamily:'Roboto',fontWeight:'bold'}}>Invoice Date: </h4>
                   <p className='my-2' style={{marginLeft:"46%",fontFamily:'Roboto'}}>2022-08-15</p>
                   </div>
                   <div className='d-flex'>
                   <h4 style={{fontFamily:'Roboto',fontWeight:'bold'}}>Next Payment Date: </h4>
                   <p className='my-2' style={{marginLeft:"34.5%",fontFamily:'Roboto'}}>2022-09-08</p>
                   </div>
                </div>
            </div>
            <div>
            <div className='col-6'>
                <div>
                <div>
                    <h6 style={{fontFamily:'Roboto',fontWeight:'bold'}}>Bill To:</h6>
                </div>
                <div style={{marginTop:'3%'}}>
                    <h6 style={{fontFamily:'Roboto'}}>studytube</h6>
                </div>
                <div>
                    <h6 style={{fontFamily:'Roboto'}}>studyTube,</h6>
                </div>
                <div>
                    <h6 style={{fontFamily:'Roboto'}}>aritaweg 70 1043 BZ Amsterdam</h6>
                </div>
                </div>
              
            </div>
            <hr></hr>
            </div>
      
            <div>
              <div>
                </div>                    
                <h6 style={{fontFamily:'Roboto',fontWeight:'bold'}}>Contact</h6>
              </div> 
              <div >
                    <h6 style={{fontFamily:'Roboto'}}>https://weconnect.chat</h6>
                </div>

        </div>
        <table class="table table-bordered">
    <thead>
      <tr>
       <th style={{fontFamily:'Roboto'}} scope="col">Item description</th>
       <th style={{fontFamily:'Roboto'}} scope="col">Ordered Oty </th>
       <th style={{fontFamily:'Roboto'}} scope="col">Unit Price</th>
       <th style={{fontFamily:'Roboto'}} scope="col">Extended Price</th>
      </tr>
   </thead>
   <tbody>
     <tr>
      <td scope="row">Pro Plan</td>
      <td>1</td>
      <td>200</td>
      <td>200</td>
     </tr>
    </tbody>
   </table>

   <div className='col-6' style={{marginLeft:'38%',marginTop:'10%'}}>
                <div class="card w-80 p-3" style={{backgroundColor:"lightgrey",border:'none',borderRadius:1}}>
                    <div className='d-flex'>
                   <h4 style={{fontFamily:'Roboto',fontWeight:'bold'}}>NET TOTAL: </h4>
                   <p className='my-2' style={{marginLeft:"50%", fontFamily:'Roboto'}}>€200.00</p>
                   </div>
                   <div className='d-flex'>
                   <h4 style={{fontFamily:'Roboto',fontWeight:'bold'}}>VAT (Netherlands) 21%: </h4>
                   <p className='my-2' style={{marginLeft:"32%",fontFamily:'Roboto'}}>€42.00</p>
                   </div>
                   <div className='d-flex'>
                   <h4 style={{fontFamily:'Roboto',fontWeight:'bold'}}>TOTAL: </h4>
                   <p className='my-2' style={{marginLeft:"59%",fontFamily:'Roboto'}}>€242.00</p>
                   </div>
                </div>
               </div>
           </div>
   )
   }




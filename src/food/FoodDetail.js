import {Fragment} from "react";
import {NavLink,useNavigate} from "react-router-dom";
import {useEffect,useState} from "react";
import {useParams} from "react-router";
import axios from "axios";

function FoodDetail(){
 // 전송된 데이터 받기
 const {fno}=useParams();
 const nav=useNavigate();
 const [foodDetail,setFoodDetail]=useState({})
 useEffect(() => {
   axios.get('http://localhost/food/food_detail_react',{
    params:{
     fno:fno
    }
   }).then(response=>{
    console.log(response.data)
    setFoodDetail(response.data)
   })
 }, {})
 let poster=String(foodDetail.poster)
 const img=poster.split("^")
 const html=img.map((m)=>
  <td><img src={m} style={{"width":"100%"}}/></td>
 )
 return(
     <div className={"row"}>
       <table className={"table"}>
        <tbody>
        <tr>
         {html}
        </tr>
        </tbody>
       </table>
         <div style={{"height":"10px"}}></div>
         <table className={"table"}>
             <tbody>
              <tr>
                  <td colSpan={"2"}>
                      <h3>{foodDetail.name}&nbsp;<span style={{"color":"orange"}}>{foodDetail.score}</span></h3>
                  </td>
              </tr>
             <tr>
                 <th width={"15%"}>주소</th>
                 <td width={"85%"}>{foodDetail.address}</td>
             </tr>
              <tr>
                  <th width={"15%"}>전화</th>
                  <td width={"85%"}>{foodDetail.phone}</td>
              </tr>
              <tr>
                  <th width={"15%"}>음식종류</th>
                  <td width={"85%"}>{foodDetail.type}</td>
              </tr>
              <tr>
                  <th width={"15%"}>가격대</th>
                  <td width={"85%"}>{foodDetail.price}</td>
              </tr>
              <tr>
                  <th width={"15%"}>영업시간</th>
                  <td width={"85%"}>{foodDetail.time}</td>
              </tr>
              <tr>
                  <th width={"15%"}>주차</th>
                  <td width={"85%"}>{foodDetail.parking}</td>
              </tr>
             <tr>
                 <td className={"text-right"} colSpan={"2"}>
                     <button onClick={()=>nav(-1)} className={"btn btn-sm btn-primary"}>목록</button>
                 </td>
             </tr>
             </tbody>
         </table>
     </div>
 )
}
export default FoodDetail
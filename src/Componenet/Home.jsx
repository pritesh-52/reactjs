import React from "react";

export const Home = (props) => {
    let login=false;
    const namelist=()=>{
        const listitem=[];
        for(let i=0;i<props.fname.length;i++)
        {
            listitem.push(<li key={i}>{props.fname[i]}</li>);
        }
        return listitem;
    }
    const clglist=()=>{
        const clgdata=[];
        for(let j=0;j<props.clg.length;j++)
        {
            clgdata.push(<li>{props.clg[j]}</li>);
        }
        return clgdata;
    
    }
  return (
    <>
      <div className="mt-11 ml-11">
            <h1 className="text-2xl font-semibold">Home Page</h1>
            <ul>{namelist()}</ul>
            <ul className="mt-5">{clglist()}</ul>
            {login?<h1>Loin True</h1>:<h1>Login Uncessfull</h1>}
      </div>
    </>
  );
};

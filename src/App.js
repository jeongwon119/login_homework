import React from 'react'
import { useState } from 'react';

function App() {
  let [faild, setFaild] = useState("")
  let [Id, setId] = useState("")
  let [Pw, setPw] = useState("")

  const userid = "jeongwon@gmail.com"
  const password = "jeongwon"

  const getId = (e) => {
    let getuid = e.target.value
    Id = getuid
    setId(Id)
  }

  const getPw = (e) => {
    let getupw = e.target.value
    Pw = getupw
    setPw(Pw)
  }

  const onSubmit = (e) => {
    if((Id !== userid) || (Pw !== password)) {
      e.preventDefault()
      faild = "이메일 혹은 비밀번호가 잘못되었습니다"
      setFaild(faild)
      Id = ""
      setId(Id)
      Pw = ""
      setPw(Pw)
    }
    else {
      e.preventDefault()
      faild = ""
      setFaild(faild)
      Id = ""
      setId(Id)
      Pw = ""
      setPw(Pw)
    }
  }

  return (
    <>
      <div className='w-full h-full bg-[#D9D9D9] flex justify-center items-center'>
        <div className="w-[450px] h-[600px] bg-white">
          <div className='text-center text-[46px]'>
            <h1 className='mt-[70px]'>LOGIN</h1>
          </div>
          <div className='w-full text-center text-[14px] text-[#FE4747]'>
            <p>{faild}</p>
          </div>
          <form onSubmit={onSubmit} className='flex flex-col w-full items-center'>
            <div className='flex flex-col mt-[40px]'>
              <h1 className='text-[25px]'>Email</h1>
              <input type="text" onChange={getId} className='w-[300px] h-[40px] border-[1px] border-black pl-[10px] text-[20px]' value={Id}/>
            </div>
            <div className='flex flex-col mt-[10px]'>
              <h1 className='text-[25px]'>Password</h1>
              <input type="password" onChange={getPw} className='w-[300px] h-[40px] border-[1px] border-black pl-[10px] text-[20px]' value={Pw}/>
            </div>
            <input type="submit" value="SUBMIT" className='bg-[#65C5FC] w-[245px] h-[55px] text-[30px] text-white mt-[55px] hover:cursor-pointer'/>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;

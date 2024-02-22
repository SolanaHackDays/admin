"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import socket from "socket.io-client";



export const Start = () => {
    const io = socket("http://localhost:8000");
    const[users, setUsers] = useState([]) as any ;

    const   [isConnected, setIsConnected] = useState(false);


 
    const startRoom = () => {

        io.on("connect", () => {
           console.log("connected");
            
        });
        io.on('userJoined', (user) => {
           
            console.log(`Kullanıcı katıldı: ${user.username}, Oda: ${user.room}`);
            setUsers([...users, user])
           
        });

    io.emit("init")

    console.log("socket connected", io.connected);

   if(io.connected){
        console.log("connected")
        setIsConnected(true)

        
      }



    


    }
    return(
        <Link
                href="/"
              onClick={startRoom}
              className="bg-neu-purple2 h-[40vh] w-[40vw] lg:h-[41vh] text-white flex flex-col justify-between p-0 lg:p-5 rounded-10 lg:rounded-20 border border-black border-r-4 border-b-4 lg:border-r-8 lg:border-b-8 font-lexend hover:border-l-4 hover:border-t-4 hover:border-r-0 hover.border-b-0 hover:border-neu-white duration-300"
            >
              <div className="hidden lg:flex flex-row justify-between">
                <div className="flex flex-row space-x-3 items-center">
                  <div>
                  
                  </div>
                
                </div>
                <div className="hidden lg:flex flex-row space-x-5 items-center">
               
                 
                </div>
              </div>
              <div className="flex flex-row justify-center items-center w-full h-full relative">
                <div className="text-4xl lg:text-5xl xl:text-5xl font-bold lg:p-0">
                {
                    !isConnected ? 
                  <span className="drop-shadow-[2px_2px_rgba(0,0,0,40)]">
                   OYUNU BAŞLAT
                  </span>
                  :

                  <span className="drop-shadow-[2px_2px_rgba(0,0,0,40)]">
                   OYUN BAŞLATILDI
                  </span>
                }

                </div>
              </div>
              <div className=" lg:block text-xs font-bold mx-24 text-center text-white">
                <span className="text-neu-yellow">ÖNEMLİ NOT: </span> Quiz
                başladıktan sonra 1 dakika içinde katılım sağlamanız
                gerekmektedir.

                {
                    users.map((user:any,index:any) => {
                        return(
                            <div
                            key={index}
                            >
                                <p>{user.username}</p>
                            </div>
                        )
                    })
                }
              </div>
            </Link>
    )
}
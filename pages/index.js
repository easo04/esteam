import Head from 'next/head'

import AppLayout from 'components/AppLayout'
import Button from 'components/Button'

import { colors } from 'styles/themes'

import { loginWIthPassword, logout, onAuthStateChanged } from '../firebase/client'

import { useEffect, useState } from 'react'

export default function Home () {
  const [user, setUser] = useState(null)

  useEffect(() => {
    onAuthStateChanged(setUser)
  }, [])

  const handleClick = () => {
    loginWIthPassword().then(response => {
      setUser(response)
    }).catch(error => {
      console.log(error)
    })
  }

  const logoutClick = () => {
    logout()
  }

  return (
    <div>
      <Head>
        <title>ESTeam</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppLayout>
        <div className="content">
            <h1>ESTeam</h1>
            <h2>Plan your team's season</h2>
            <div className="login">
              <input type="text" placeholder="User" />
              <input type="password" placeholder="Password" />
              <div>
                {
                  user === null
                    ? <div className="btn-login">
                      <Button onClick={handleClick}>Login</Button>
                    </div>
                    : <p>Hello {user.email}</p>
                }
              </div>
            </div>

            <div className="logout">
              {
                user !== null && <a onClick={logoutClick}>Logout</a>
              }
            </div>
        </div>
      </AppLayout>

      <style jsx>{`
         h1{
           font-size:24px;
           color:${colors.primary};
           margin-bottom:18px;
           text-align:center;
         }
         h2{
           font-size:18px;
           color:${colors.secondary};
           margin:0;
         }

         .content{
           display:grid;
           place-content:center;   
           place-items:center;
           height:100%;
           position:relative;
         }

         nav{
           margin-top:10px;
         }

         .btn-login{
           margin-top:20px;
         }

         .login{
           display:block;
           margin-top:18px;
         }

         input{
            background:transparent;
            border:1px solid ${colors.black};
            color:${colors.black};
            font-size:14px;
            border-radius:9999px;
            padding:8px 24px;
            display:block;
            margin-bottom:5px;
         }

         input:focus{
           outline:none;
         }

         .btn-login{
           width:100%;
           display:flex;
           justify-content:flex-end;
         }
         .logout{
           position:absolute;
           top:5px;
           right:10px;
           cursor:pointer;
         }
        `
      }
      </style>
    </div>
  )
}

import Link from 'next/link'
import AppLayout from '../../components/AppLayout'

export default function Calendar ({ userName }) {
  return (
        <>
            <AppLayout>
                <Link href="/"><a>Go home</a></Link>
                <h1>Calendar {userName}</h1>
            </AppLayout>
            <style jsx>{`
                `
            }</style>
        </>
  )
}

// component nextjs qui s'execute côté serveur (types pages)
/* Calendar.getInitialProps = () =>{
    //return { userName : 'lala' }
    return fetch('http://localhost:3000/api/hello')
    .then(res => res.json())
    .then(response => {
        console.log(response)
        const {userName} = response
        return {userName}
    })
} */

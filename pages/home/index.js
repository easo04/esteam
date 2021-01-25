import AppLayout from "components/AppLayout";

export default function HomePage(){
    return (
        <>
            <AppLayout>
                <header>
                    <h2>Home</h2>
                </header>
                <section>

                </section>
                <nav>
                    GoHome
                </nav>

            </AppLayout>
                <style jsx>{`
                    header{
                        border-bottom:1px solid #ccc;
                        height:49px;
                        position: absolute;
                        top: 0;
                        width: 96%;
                    }
                    nav{
                        width:96%;
                        bottom:0;
                        position:absolute;
                        border-top:1px solid #ccc;
                    }
                    `}</style>
        </>
    )
} 
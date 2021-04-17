import React,{ lazy, Suspense } from 'react'
import NavBar from '../NavBar';
import Footer from '../Footer';

const MainNewsSection = lazy(() => import('../MainNewsSection'))
const EthioFinanceSection = lazy(() => import('../EthioFinanceSection'))
const WorldNewsSection = lazy(() => import('../WorldNewsSection'))

export default function Home(){
    return(
      <div>
        <NavBar/>
        <div className="container">
            {/* Main News Section - Start */}
            <Suspense fallback={<h1>Loading...</h1>}>
               <MainNewsSection/>
            </Suspense>
      {/* Main News Section - End */}

        {/* World News Section - Start */}
        <Suspense fallback={<h1>Loading...</h1>}>
               <EthioFinanceSection/>
            </Suspense>          
    {/* World News Section - End */}

        {/* Popular News Section - Start */}
        <Suspense fallback={<h1>Loading...</h1>}>
               <WorldNewsSection/>
            </Suspense>
   
        {/* Popular News Section - End */}
      <Footer/>
    </div>
    </div>
    )
}
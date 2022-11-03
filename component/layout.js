import Header from './header';
import Footer from './footer';

export default function Layout({children}){
    return(
        <div>
            <Header/>
            <h1>레이아웃 화면!</h1>
            <div>{children}</div>
            <Footer/>
        </div>
    );
}
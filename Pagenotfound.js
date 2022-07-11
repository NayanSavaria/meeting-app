import  NP from '.././img/NotFound.png';

function NotFound(){
    return(
        <div>
<div className="container text-center">
<img src={NP} alt="welcome" className="NP" />
<h1 className='title'>Page Not Found</h1>
            <p className='desc'>Foster meaningful relationships with events, newsletters, and community analytics</p>
            <a href='#Home'>
            <button className='btn mt-1'> Homepage</button>
            </a>
        </div>
        </div>
    )
}

export default NotFound;
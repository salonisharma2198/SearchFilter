import './Design.css';
import book from './images/book.jpg';
import profile from './images/profile.png';
function Design() {
    return (
        <div>

            <div className="container-fluid abc ">
                <div className="row size">



                    <div className="col-md-6 col-sm-12 search">
                        <div className="card mt-5 mb-5">
                            <img className="card-img-top " src={profile} alt="Card image cap" />
                            <div className="card-body">
                                <h3 className="card-title">Search By UserName</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6  bground" />




                </div>
            </div>
        </div>
    );
}
export default Design;
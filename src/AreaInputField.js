import './AreaInputField.css'
function AreaInputField({Word, onHandleClick,Submithandler}) {
    

    return(
        <div className="formIn">
            <form onSubmit={Submithandler}  >
                      
                            <input className="form-control " type="text" value={Word} onChange={onHandleClick} className="form-control" placeholder="search Usernames" />
                        
                           
                    </form>
                    
        </div>
        
    );
} 
export default AreaInputField;
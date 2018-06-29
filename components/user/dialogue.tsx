import * as React from 'react';
export function Dialogue(props:any){
    var dialogueData={message:'',icon:'',buttonText:'',data:'',color:''};
    switch(props.status){
        case 'success':
        dialogueData={message:'Your account has been created successfully.',
        icon:'check', buttonText:'Go To Home',data:'Congrts!!!!',color:'green'};
        break;
        case 'exist':
        dialogueData={message:'Email Id already exist.',
        icon:'close', buttonText:'Retry',data:'OOPS !!!!',color:'red'};
        break;
    };

    return  (
        <div id="myModal" className="modal fade">
        <div className="modal-dialog modal-confirm">
            <div className="modal-content">
                <div className={'modal-header '+props.status}>
                    <div className="icon-box">
                        <i className="material-icons">{dialogueData.icon}</i>
                    </div>
                    <button type="button" className="close" onClick={props.gotoHome} data-dismiss="modal" aria-hidden="true">&times;</button>
                </div>
                <div className="modal-body text-center">
                    <h4>{dialogueData.data}</h4>	
                    <p>{dialogueData.message}</p>
                    <button className="btn btn-success" onClick={props.gotoHome} data-dismiss="modal"><span>{dialogueData.buttonText}</span> <i className="material-icons">&#xE5C8;</i></button>
                </div>
            </div>
        </div>
    </div>
    )
}
// Uncomment or provide an image/avatar later, for now we will use an icon or default semantic class
// import user from "../images/user.png";

const ContactCard =(props)=>{
    const {name, email} = props.contact;
    return (
        <div className="item">
            <i className="large github middle aligned icon user"></i>
            <div className="content">
                <div className="header">{name}</div>
                <div>{email}</div>
            </div>
            <i 
                className="trash alternate outline icon"
                style={{color: "red", marginTop: "7px", float: "right"}}
            ></i>
        </div>
    );
};

export default ContactCard;
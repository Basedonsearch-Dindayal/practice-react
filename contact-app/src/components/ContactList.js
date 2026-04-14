import ContactCard from "./ContactCard";

const ContactList = (props) => {
    const renderContactList = props.contacts.map((contact, index) => {
        return (
            <ContactCard contact={contact} key={index}></ContactCard>
        );
    });
    return (
        <div className="main">
            <h2>Contact List</h2>
            <div className="ui celled list">
                {renderContactList}
            </div>
        </div>
    );
}

export default ContactList;
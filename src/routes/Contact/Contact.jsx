import { Form } from "react-router-dom";
import Favorite from "../Favorite/Favorite";

const Contact = () => {
    const contact = {
        first: "Jojo",
        last: "Gojo",
        avatar: "https://placekitten.com/g/200/200",
        twitter: "your_handle",
        notes: "Jojo Gojo is a good cat of mine. He is so cute and pretty. But he is so lazy",
        favorite: true,
      };
    return (
        <div id="contact">
            <div>
            <img
                key={contact.avatar}
                src={contact.avatar || null}
            />
            </div>
    
            <div>
            <h1>
                {contact.first || contact.last ? (
                <>
                    {contact.first} {contact.last}
                </>
                ) : (
                <i>No Name</i>
                )}{" "}
                <Favorite contact={contact} />
            </h1>
    
            {contact.twitter && (
                <p>
                <a
                    target="_blank"
                    href={`https://twitter.com/${contact.twitter}`}
                    rel="noreferrer"
                >
                    {contact.twitter}
                </a>
                </p>
            )}
    
            {contact.notes && <p>{contact.notes}</p>}
    
            <div>
                <Form action="edit">
                <button type="submit">Edit</button>
                </Form>
                <Form
                method="post"
                action="destroy"
                onSubmit={(event) => {
                    if (
                    !confirm(
                        "Please confirm you want to delete this record."
                    )
                    ) {
                    event.preventDefault();
                    }
                }}
                >
                <button type="submit">Delete</button>
                </Form>
            </div>
            </div>
      </div>
    );
};

export default Contact;
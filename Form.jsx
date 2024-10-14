import { useContext, useState } from "react";
import { DataContext } from "./Context";
{
  /* this jsx file deals with the form component on our main page */
}

function CreateForm() {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    bio: "",
  });

  //use the DataContext and grab the function
  const { updateInfo } = useContext(DataContext);

  const handleChange = (event) => {
    //update using target event will change value of given name
    //will only change local state, not context state (handled in handleSubmit)
    const { name, value } = event.target;
    setFormData((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
    console.log(formData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //use function from DataContext file
    updateInfo(formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <br />
        <input
          name="userName" //required and needs to be the same as formData name
          placeholder="John Doe"
          type="text"
          onChange={handleChange}
          value={formData.userName}
        />
        <br />
        <label>Email: </label>
        <br />
        <input
          name="email" //required and needs to be the same as formData name
          placeholder="j.doe@gmail.com"
          type="text"
          onChange={handleChange}
          value={formData.email}
        />
        <br />
        <label>Bio: </label>
        <br />
        <input
          name="bio" //required and needs to be the same as formData name
          placeholder="Something about myself"
          type="text"
          onChange={handleChange}
          value={formData.bio}
        />
        <br />
        <br />
        <button type="submit" value="submit">
          Save Profile
        </button>
      </form>
    </>
  );
}

export default CreateForm;

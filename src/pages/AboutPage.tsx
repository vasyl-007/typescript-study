import React from "react";
import { useHistory } from "react-router-dom";

export const AboutPage: React.FC = () => {
  const history = useHistory();

  return (
    <React.Fragment>
      <h1>Info about this App</h1>
      <p>
        My name is Vasyl. I'm a front-end developer! <br />
        <hr/>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        possimus est vitae quis animi commodi facere ipsum voluptatem asperiores
        illum delectus consequatur inventore, omnis, magnam suscipit rerum odit
        doloremque non! Eos repellat quisquam dignissimos nulla praesentium
        similique omnis officia obcaecati. Tempora aspernatur ratione placeat,
        quas iure maiores natus animi? Aspernatur enim repellat dolor velit
        neque animi ut et saepe perferendis. In, dolorum, asperiores illo rem
        iure dolorem quaerat quibusdam, voluptatum numquam consequatur esse
        doloribus recusandae officiis quos aperiam ut placeat porro? Commodi,
        vero tempore.
      </p>
      <button className="btn" onClick={() => history.push("/")}>
        Back to List of tasks
      </button>
    </React.Fragment>
  );
};

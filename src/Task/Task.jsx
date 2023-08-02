import { useRef } from "react";
import Swal from "sweetalert2";

const Task = () => {
  const formRef = useRef(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const description = form.description.value;
    // const status = form.status.value;
    // console.log("amar sonar", title, description, status);
    const task = {
      title,
      description,
      status: "uncomplete",
    };
    fetch("http://localhost:5000/addTask", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(task),
    })
      .then((res) => res.json())
      .then((data) => {
         formRef.current.reset();
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your task has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className="w-9/12 mx-auto mt-10">
      <h2 className="text-4xl font-medium">Add A New Task</h2>
      <form onSubmit={handleSubmit} ref={formRef}>
        <div className="">
          <div className="w-1/2">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              name="title"
              className="form-control border w-full p-2 rounded-sm"
            />
          </div>

          <div className="w-1/2">
            <label htmlFor="description" className="form-label block ">
              Description
            </label>
            <textarea
              className="border w-full resize-none p-1 rounded-sm"
              name="description"
              rows={8}
              cols={20}
            ></textarea>
          </div>

          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Task;

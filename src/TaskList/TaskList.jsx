import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { FaBeer } from "react-icons/fa";

const TaskList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/tasks")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [data]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:5000/task/${id}`).then((res) => {
          if (("delete", res.data.deletedCount > 0)) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Your task has been Delete",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      }
    });
  };

  //update task status
  const handleUpdate = (item) => {
    axios.patch(`http://localhost:5000/task/${item._id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        const updateData = data.filter((items) => items._id !== item._id);
        setData(updateData);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  return (
    <div className="grid grid-cols-2 gap-4">
      {data.map((item) => (
        <div key={item._id}>
          <div
            key={item._id}
            className="card w-full bg-base-100 shadow-xl mt-4"
          >
            <div className="m-2">
              <div className="flex justify-between">
                <h2 className="card-title">Title: {item?.title}</h2>
                <p onClick={() => handleUpdate(item)} className="font-semibold btn btn-sm">Status: {item?.status}</p>
              </div>
              <p>Description: {item?.description}</p>
              <div className="card-actions ">
                <button
                  onClick={() => handleDelete(item._id)}
                  className="btn btn-primary btn-sm mt-2"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;

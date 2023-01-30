//App.js
import "./App.css";
// import Add from "./components/Add";
// import Mul from "./components/Mul";
// import Sqr from "./components/Sqr";
// import Students from "./components/Students";
// import Sub from "./components/Sub";
import UserListing from "./components/UserListing";

function App() {
  // var student1 = {
  //   name: "Parth",
  //   age: 23,
  //   roll_no: 1234,
  //   city: "Mumbai",
  // };
  // function showData() {
  //   alert("hi");
  //   fetch("https://reqres.in/api/users?page=1")
  //     .then((res) => res.json())
  //     .then((result) => console.table(result.data));
  // }
  return (
    <>
      {/* <button onClick={showData}>Click Me</button> */}
      <UserListing />
      {/* <h1>
        <Sqr />
      </h1> */}
      {/* <h1>
        <Mul />
      </h1>
      <Students data={student1} />
      <Students
        data={{ name: "Gaurav", age: 30, roll_no: 5678, city: "Mumbai" }}
      />
      <h1>Hello world</h1>
      <h1>Welcome to react app</h1>
      <h2>{9 * 5}</h2>
      <Add x={50} y={60} />
      <Sub x={500} y={400} /> */}
    </>
  );
}

export default App;

export default function Data(props) {
  const data = props.data;
  const div = data.map((el) => (
    <div>
      <h2>
        <strong>Title:</strong> {el.Title}
      </h2>
      <p>
        <strong>Year:</strong> {el.Year}
      </p>
      <p>
        <strong>Director:</strong> {el.Director}
      </p>
      <p>
        <strong>Actors:</strong> {el.Actors}
      </p>
    </div>
  ));
  console.log(data);
  return <section>{div}</section>;
}

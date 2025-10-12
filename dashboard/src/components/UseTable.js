import UseFetch from "../hooks/UseFetch";

export default function Table() {
  const { data } = UseFetch({ url: "https://jsonplaceholder.typicode.com/posts" });

  return (
    <div style={{ padding: "20px" }}>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {data && data.length > 0 ? (
            data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.body}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" style={{ textAlign: "center" }}>
                Loading...
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
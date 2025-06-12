import Column from "./Column"

function Table() {
  return (
    <>
      <table class="table">
        <thead>
            <tr>
                <th>1</th>
                <th>2</th>
                <th>3</th>
            </tr>
        </thead>
        <tbody>
            <Column/>
        </tbody>
      </table>
    </>
  )
}

export default Table

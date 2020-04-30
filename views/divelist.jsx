const React = require('react');
const AuthContent = require('./authcontent.jsx');

class DiveList extends AuthContent {
  constructor (props) {
    super(props);
    this.title = "Dive List";
  }

  showContent() {
    let diveData = this.props.dives;
    const dateOpts = {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    };

    let dives = diveData.map(dive => {
      let key = `dive-${dive.id}`;
      let diveLink = `/dive/${dive.id}`;
      let tripLink = `trip/${dive.trip_id}`;

      return (
        <tr key={key} className="text-info">
          <td>
            <a href={diveLink}>{dive.dive_no}</a>
          </td>
          <td>{dive.time_in.toLocaleDateString(undefined, dateOpts)}</td>
          <td><a href={tripLink}>{dive.name}</a></td>
        </tr>
      );
    });

    return (
      <>
        <div className="row" key="button">
          <div className="col">
            <a href="/dive/new/"
               className="btn btn-outline-info btn-block">
              <span className="h5">Add New Dive</span>
            </a>
          </div>
        </div>

        <div className="row my-3"
             style={{overflowY: "scroll", maxHeight: "60vh"}} key="table">
          <div className="col">
            <table className="table table-hover">
              <thead className="bg-info text-white">
                <tr>
                  <th scope="col">Dive #</th>
                  <th scope="col">Date</th>
                  <th scope="col">Trip</th>
                </tr>
              </thead>
              <tbody>
                {dives}
              </tbody>
            </table>
          </div>
        </div>
      </>

    );
  }
}

module.exports = DiveList;

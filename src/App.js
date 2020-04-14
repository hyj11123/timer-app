import React from "react";
import "./styles/main.css";
import emp from "./database/db";
import ProfileBox from "./components/ProfileBox";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      empList: [],
    };
  }

  componentDidMount() {
    this.setState({
      empList: emp,
    });
  }

  render() {
    const { empList } = this.state;

    return (
      <div className="box">
        <ProfileBox />
        <div className="box__content">
          {empList.length !== 0 ? (
            empList.map((doc) => {
              return (
                <ProfileBox
                  avatar={doc.avatar}
                  age={doc.age}
                  name={doc.name}
                  school={doc.school}
                  gender={doc.gender}
                />
              );
            })
          ) : (
            <div>데이터 없음</div>
          )}
        </div>
      </div>
    );
  }
}

export default App;

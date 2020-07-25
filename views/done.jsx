var React = require('react');
import Style from 'style-it';
import Footer from './footer.jsx';

  const bodyStyle = {
    backgroundColor: 'white'
  }

  const progressBar = {
    marginTop: '25px',
    marginBottom: '35px',
    marginLeft: '65px',
    marginRight: '90px',
    height: '3px' 
  }

  const firstRowForm = {
    marginTop: '20px',
    marginLeft: '60px',
    marginRight: '50px'
  }

  const withinFirstRowForm = {
    margin: '-5px'
  }
   
  const entryBox = {
    borderRadius: '0px',
    fontFamily: 'Trebuchet MS',
    fontColor: 'black',
    fontWeight: '100',
    fontSize: '17px',
    padding: '10px'
  }

  const textArea = {
    marginTop: '40px',
    marginLeft: '70px',
    marginRight: '75px'
  }

  const defaultButton = {
    marginLeft: '70px',
    marginRight: '75px'
  }

  class Done extends React.Component {
    render() {
      
      return <Style>
        {`
        .yja-bar {
          background-color: #fcfcfc;
          height: 70px;
          position: relative;
        }
        .yja-bar img {
          position: absolute;
          left: 60px;
          top: 7px;
        }
        .slideshow-container {
          width: 100%;
          position: relative;
          margin: auto;
          height: 160px;
          justify-content: center;
          align-items: center;
          background-color: black;
        }
        .register-text {
          font-family: 'Trebuchet MS', sans-serif;
          font-weight: 400;
          font-size: 32px;
          color: white;
          padding: 40px 65px;
          position: absolute;
          top: 16px;
          width: 100%;
          text-align: left;
        }
        .event-text {
          font-family: 'Trebuchet MS', sans-serif;
          font-weight: 200;
          font-size: 11px;
          color: #fcfcfc;
          padding: 4px 8px;
          position: absolute;
          bottom: 0px;
          width: 100%;
          text-align: right;
        }
        .retreatPhotos {
          height: 160px;
          overflow: auto;
          margin: auto;
        }
        .retreatPhotos img {
          opacity: 0.5;
          filter: alpha(opacity=50); /* For IE8 and earlier */
        }
        label {
          font-family: 'Trebuchet MS', sans-serif;
          font-weight: 600;
          display: inline-block;
          max-width: 100%;
          margin-bottom: 3px;
          font-size: 14px;
          font-color: #777777;
        }
        .formTitle {
          font-family: 'Trebuchet MS', sans-serif;
          font-weight: 400;
          font-size: 30px;
          color: black;
          padding: 0px 65px;
          position: absolute;
          margin-bottom: 45px;
          top: 40px;
          width: 100%;
          position: relative;
        }
        .progress-bar {
          background-color: #00A4EF;
        }
        .btn-primary {
          font-family: 'Trebuchet MS', sans-serif;
          font-weight: 200;
          font-size: 14px;
          width: 100%;
          border-radius: 0px;
          border: #00A4EF;
          background-color: #00A4EF;
        }
        .btn-default {
          font-family: 'Trebuchet MS', sans-serif;
          font-weight: 200;
          font-size: 14px;
          width: 100%;
          margin-bottom: 20px;
          border-radius: 0px;
          border-color: black;
          background-color: white;
        }
        .footer {
            margin-top: 55px;
        }
      `}
        
        <div>
          <head>
            <link href="https://fonts.googleapis.com/css?family=Oswald" rel="stylesheet"></link>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossOrigin="anonymous"></link>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous"/>
            <link rel="stylesheet" href="css/style.css"/>
            <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
            <script src="/main.js"></script>
        </head>
          <body style={bodyStyle}>
            <img src="header1.png" alt="header" width="100%"/>
            <div className="yja-bar">
              <img src="yja.png" alt="yja" height="80%"/>
            </div>

            <div className="slideshow-container">
              <div className="retreatPhotos">
                <img src="east.jpg" width="100%"/>
                <div class="register-text">Register</div>
                <div class="event-text">2019 Mid-Atlantic Retreat</div>
              </div>
              <div className="retreatPhotos">
                <img src="midwest.jpg" width="100%"/>
                <div class="register-text">Register</div>
                <div class="event-text">2019 Midwest Retreat</div>
              </div>
              <div className="retreatPhotos">
                <img src="south.jpg" width="100%"/>
                <div class="register-text">Register</div>
                <div class="event-text">2019 South Retreat</div>
              </div>
              <div className="retreatPhotos">
                <img src="southeast.jpg" width="100%"/>
                <div class="register-text">Register</div>
                <div class="event-text">2019 Southeast Retreat</div>
              </div>
              <div className="retreatPhotos">
                <img src="west.jpg" width="100%"/>
                <div class="register-text">Register</div>
                <div class="event-text">2019 West Retreat</div>
              </div>
            </div>

            <div class="formTitle">You have successfully registered!</div>

            <div class="progress" style={progressBar}>
              <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"/>
            </div>
            <div style={defaultButton}>
                <a href="/"><button class="btn btn-default">Return to Signup</button></a>
            </div>
            <div style={defaultButton}>
                <a href="https://yja.org/"><button class="btn btn-default">Go To yja.org</button></a>
            </div>
            <div className="footer"><Footer/></div>
          </body>
        </div>
        </Style>;
    }    
  }

module.exports = Done; 
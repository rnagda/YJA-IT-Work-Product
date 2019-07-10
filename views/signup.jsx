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

  const bdayBox = {
    marginLeft: '-3px'
  }

  const textArea = {
    marginTop: '20px',
    marginLeft: '70px',
    marginRight: '75px'
  }

  const defaultButton = {
    marginLeft: '70px',
    marginRight: '75px'
  }

  class SignUp extends React.Component {
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

            <div class="formTitle">Sign Up for Retreat</div>

            <div class="progress" style={progressBar}>
              <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"/>
            </div>

            <form method="post" id="registration-form">
              <div className="row" style={firstRowForm}>
                <div className="form-group col-md-4" style={withinFirstRowForm}>
                  <label for="first_name">Legal First Name *</label> 
                  <input id="first_name" type="text" style={entryBox} name="first_name" value="" required="required" class="form-control"/>
                </div>
                <div className="form-group col-md-4" style={withinFirstRowForm}>
                  <label for="middle_name">Legal Middle Name </label> 
                  <input id="middle_name" type="text" style={entryBox} name="middle_name" value="" class="form-control"/>
                </div>
                <div className="form-group col-md-4" style={withinFirstRowForm}>
                  <label for="last_name">Legal Last Name *</label> 
                  <input id="last_name" type="text" style={entryBox} name="last_name" value="" required="required" class="form-control"/>
                </div>
              </div>
              <div className="row" style={firstRowForm}>
                <div className="form-group col-md-6" style={withinFirstRowForm}>
                  <label for="email">Email Address *</label> 
                  <input id="email" type="email" style={entryBox} name="email" value="" required="required" class="form-control"/>
                </div>
                <div className="form-group col-md-6" style={withinFirstRowForm}>
                  <label for="middle_name">Birthdate (i.e. mm/dd/yyyy) * </label> 
                  <div className="row">
                    <div class="form-group col-md-4" style={bdayBox}>
                      <input type="text" placeholder="mm" style={entryBox} maxlength="2" id="birthday_month" name="birthday_month" required="required" class="form-control"/> 
                    </div>
                    <div class="form-group col-md-4" style={bdayBox}>
                      <input type="text" placeholder="dd" style={entryBox} maxlength="2" id="birthday" name="birthday" required="required" class="form-control"/> 
                    </div>
                    <div class="form-group col-md-4" style={bdayBox}>
                      <input type="text" placeholder="yyyy" style={entryBox} maxlength="4" id="birthday_year" name="birthday_year" required="required" class="form-control"/> 
                    </div> 
                  </div>
                </div>
              </div>
              <div className="row" style={firstRowForm}>
                <div className="form-group col-md-4" style={withinFirstRowForm}>
                  <label for="phone_number">Phone Number *</label> 
                  <input id="phone_number" type="text" style={entryBox} name="phone_number" value="" required="required" class="form-control"/>
                </div>
                <div className="form-group col-md-5" style={withinFirstRowForm}>
                  <label for="address">Address *</label> 
                  <input id="address" type="text" style={entryBox} name="address" required="required" value="" class="form-control"/>
                </div>
                <div className="form-group col-md-3" style={withinFirstRowForm}>
                  <label for="address_two">Address 2</label> 
                  <input id="address_two" type="text" style={entryBox} name="address_two" value="" class="form-control" placeholder="apt, suite, or floor"/>
                </div>
              </div>
              <div className="row" style={firstRowForm}>
                <div className="form-group col-md-6" style={withinFirstRowForm}>
                  <label for="city">City *</label> 
                  <input id="city" type="text" style={entryBox} name="city" value="" required="required" class="form-control"/>
                </div>
                <div className="form-group col-md-4" style={withinFirstRowForm}>
                  <label for="state">State *</label> 
                  <input id="state" type="text" style={entryBox} name="state" value="" required="required" class="form-control"/>
                </div>
                <div className="form-group col-md-2" style={withinFirstRowForm}>
                  <label for="zip_code">Zip Code *</label> 
                  <input id="zip_code" type="text" style={entryBox} name="zip_code" value="" required="required" class="form-control"/>
                </div>
              </div>
              <div className="row" style={firstRowForm}>
                <div className="form-group col-md-5" style={withinFirstRowForm}>
                  <label for="jain_center">Jain Center *</label> 
                  <input id="jain_center" type="text" style={entryBox} name="jain_center" value="" required="required" class="form-control"/>
                </div>
                <div className="form-group col-md-7" style={withinFirstRowForm}>
                  <label for="dietary_preferences">Dietary Preferences *</label> 
                  <input id="dietary_preferences" type="text" style={entryBox} name="dietary_preferences" value="" required="required" class="form-control" placeholder="Jain, vegetarian, vegan"/>
                </div>
              </div>
              <div class="form-group" style={textArea}>
                <label for="special_needs">Any special needs?</label>
                <textarea class="form-control" style={entryBox} id="special_needs" name="special_needs" rows="3"></textarea>
              </div>
              <div class="form-group" style={textArea}>
                  <button type="submit" class="btn btn-primary">Register</button>
              </div>
            </form>
            <div style={defaultButton}>
                <a href="/edit"><button class="btn btn-default">Edit Previous Registration</button></a>
            </div>
            <div className="footer"><Footer/></div>
          </body>
        </div>
        </Style>;
    }    
  }

module.exports = SignUp; 
import React, { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: Number
    };
  };

  componentDidMount() {
    this.getAge();
  };

  getAge() {
    this.setState(() => ({
      age: (new Date().getFullYear() - 1995)}));
    if (new Date().getMonth() <10 && new Date().getDate() < 19){
      this.setState(() => ({
        age: (new Date().getFullYear() - 1996)}));
    };
  };



  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const profilepic = "images/" + this.props.data.image;
    const bio = this.props.data.bio;
    const street = this.props.data.address.street;
    const state = this.props.data.address.state;
    const phone = this.props.data.phone;
    const email = this.props.data.email;
    const cv = "docs/" + this.props.data.cv


    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src={profilepic} alt="Nordic Giant Profile Pic" />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>{this.state.age + bio}</p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{name}</span>
                  <br />
                  <span>
                    {street}
                    <br />
                    {state}
                  </span>
                  <br />
                  <span>{phone}</span>
                  <br />
                  <span>{email}</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a 
                    href={cv} 
                    target="_blank"
                    rel="noreferrer" className="button">
                    <i className="fa fa-download"></i>Download Resume
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;

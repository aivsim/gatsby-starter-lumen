import React from 'react';
import './style.scss';
import '../../assets/fonts/fontello-771c82e0/css/fontello.css';

class Links extends React.Component {
  render() {
    const author = this.props.data;
    const links = {
      telegram: author.telegram,
      twitter: author.twitter,
      github: author.github,
      vk: author.vk,
      rss: author.rss,
      email: author.email,
      facebook: author.facebook,
      linkedin: author.linkedin
    };

    return (
      <div>
        <p className="sidebar__author-subtitle"><em>interested in working with me?<br />let's connect!</em></p>
        <div className="links">
          <ul className="links__list">
            <li className="links__list-item">
              <a href={`https://www.linkedin.com/in/${links.linkedin}`} target="_blank" >
                <i className="icon-linkedin" />
              </a>
            </li>
            <li className="links__list-item">
              <a href={`https://www.github.com/${links.github}`} target="_blank" >
                <i className="icon-github" />
              </a>
            </li>
            <li className="links__list-item">
              <a href={`https://www.twitter.com/${links.twitter}`} target="_blank" >
                <i className="icon-twitter" />
              </a>
            </li>
            <li className="links__list-item">
              <a href={`mailto:${links.email}`}>
                <i className="icon-mail" />
              </a>
            </li>
            <li className="">
              <a href="/resume" style={{color: 'grey'}}>
                resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Links;

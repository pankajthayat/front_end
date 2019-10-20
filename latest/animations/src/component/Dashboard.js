import React from "react";

export default class Dashboard extends React.Component {
    handleClick=(e)=> {
        e.preventDefault();
        // this.anchorTarget.scrollIntoView({behavior:"smooth", block:"start"});
      }
  render() {
    return (
      <div>
        <section className = "container" id="welcome">
          <div >
            <h1>Welcome To My Presentation</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
              et eaque quo illo. Aliquid nostrum commodi blanditiis. Laudantium
              quam error doloribus iure exercitationem maxime odio. Qui quam
              porro numquam, aliquam aliquid vitae officia unde iusto, voluptate
              optio, quis voluptates deleniti.
            </p>
            <a href="#page2" className = "bg-light">Next Page</a>
            {/* <button className = "bg-light">Next Page</button> */}
          </div>
        </section>

        {/* page 2 */}
        <section className = "container" id="page2">
        <div>
          <h1>Page 2</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
            et eaque quo illo. Aliquid nostrum commodi blanditiis. Laudantium
            quam error doloribus iure exercitationem maxime odio. Qui quam porro
            numquam, aliquam aliquid vitae officia unde iusto, voluptate optio,
            quis voluptates deleniti.
          </p>
          <a href="#welcome" className = "bg-dark">Pre Page</a>
          <a  href="#page3" className = "bg-light">Next Page</a>
          </div>
        </section>

        {/* page 3 */}
        <section className = "container" id="page3">
        <div>
          <h1>Page 3</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
            et eaque quo illo. Aliquid nostrum commodi blanditiis. Laudantium
            quam error doloribus iure exercitationem maxime odio. Qui quam porro
            numquam, aliquam aliquid vitae officia unde iusto, voluptate optio,
            quis voluptates deleniti.
          </p>
          <a href="#page2" className = "bg-dark">Pre Page</a>
          <a href="#page4" className = "bg-light">Next Page</a>
          </div>
        </section>


          {/* page 4 */}
          <section className = "container" id="page4">
        <div>
          <h1>Page 4</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
            et eaque quo illo. Aliquid nostrum commodi blanditiis. Laudantium
            quam error doloribus iure exercitationem maxime odio. Qui quam porro
            numquam, aliquam aliquid vitae officia unde iusto, voluptate optio,
            quis voluptates deleniti.
          </p>
          <a href="#page3" className = "bg-light">Pre Page</a>
          </div>
        </section>
      </div>
    );
  }
}

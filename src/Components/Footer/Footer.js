import React from "react";
import "./Footer.css"

function Footer () {

return (

<div className="Con">
      <div className="footer-distributed">

			<div className="footer-left">

				<h3>Company<span>Movies</span></h3>

				<p className="footer-links">
					<a href="#" class="link-1">Home</a>
					
					<a href="#">Blog</a>
				
					<a href="#">Pricing</a>
				
					<a href="#">About</a>
					
					<a href="#">Que</a>
					
					<a href="#">Contact</a>
				</p>

				<p className="footer-company-name">Company Movies © 2020</p>
			</div>

			<div className="footer-center">

				<div>
					<i className="fa fa-map-marker"></i>
					<p><span>444 S. Cedros Ave</span> California</p>
				</div>

				<div>
					<i className="fa fa-phone"></i>
					<p>+1.000.025.5555</p>
				</div>

				<div>
					<i className="fa fa-envelope"></i>
					<p><a href="mailto:support@company.com">Movies@company.com</a></p>
				</div>

			</div>

			<div className="footer-right">

				<p class="footer-company-about">
					<span>About the company Movies</span>
					Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
				</p>

				<div class="footer-icons">

					<a href="#"><i className="fa fa-facebook"></i></a>
					<a href="#"><i className="fa fa-twitter"></i></a>
					<a href="#"><i className="fa fa-linkedin"></i></a>
					<a href="#"><i className="fa fa-github"></i></a>

				</div>
</div>
			</div>
  </div>
)
}

export default Footer
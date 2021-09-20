import React from "react";
import logo from "../images/logo.png";

export default function Footer() {
    return (
        <footer class="container-fluid">
            <div class="row">
                <div class="col-sm-5 col-lg-3 py-4">
                    <a href="#" class="footer-logo">
                        <img src={logo} alt="logo" />
                    </a>
                </div>
                <div class="col-6 col-sm-7 col-lg-3 py-4">
                    <h4>About Desh Ke Mentor</h4>
                    <ul class="footer-links">
                        <li>
                            <a href="#">About Us</a>
                        </li>
                        <li>
                            <a href="#">Team</a>
                        </li>
                        <li>
                            <a href="#">FAQ</a>
                        </li>
                        <li>
                            <a href="#">Contact Us</a>
                        </li>
                        <li>
                            <a href="#">Terms of Use</a>
                        </li>
                        <li>
                            <a href="#">Privacy Policy</a>
                        </li>
                    </ul>
                </div>
                <div class="col-6 col-sm-6 col-lg-3 py-4">
                    <h4>Get Involved</h4>
                    <ul class="footer-links">
                        <li>
                            <a href="#">Join as Mentor</a>
                        </li>
                        <li>
                            <a href="#">Join as Mentee</a>
                        </li>
                        <li>
                            <a href="#">Give Suggestions</a>
                        </li>
                        <li>
                            <a href="#">Join the team</a>
                        </li>
                        <li>
                            <a href="#">Contribute</a>
                        </li>
                    </ul>
                </div>
                <div class="col-sm-6 col-lg-3 py-4">
                    <h4>Join The Conversation</h4>
                    <ul class="list-inline footer-social">
                        <li class="list-inline-item">
                            <a href="#" title="Facebook">
                                <svg class="icon icon-4x">
                                    <use href="icons.svg#icon_facebook"></use>
                                </svg>
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a href="#" title="Twitter">
                                <svg class="icon icon-4x">
                                    <use href="icons.svg#icon_twitter"></use>
                                </svg>
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a href="#" title="Instagram">
                                <svg class="icon icon-4x">
                                    <use href="icons.svg#icon_instagram"></use>
                                </svg>
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a href="#" title="YouTube">
                                <svg class="icon icon-4x">
                                    <use href="icons.svg#icon_youtube"></use>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="row copyrights mt-4">
                <div class="col-sm-12 py-4">
                    &copy; 2021 DKM | All Rights Reserved.
                </div>
            </div>
        </footer>
    );
}

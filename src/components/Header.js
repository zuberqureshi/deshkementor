import React from "react";
import logo from "../images/logo.png";
import delhisarkar from "../images/delhi-sarkar.png";

export default function Header() {
    return (
        <header>
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-6 col-md-5 col-lg-4">
                        <a href="#" class="top-logo">
                            <img src={logo} alt="logo" />
                        </a>
                    </div>
                    <div class="col d-none d-lg-block text-center">
                        <h1>देश के मेन्टर</h1>
                        <h5>An initiative of Youth for Education</h5>
                    </div>
                    <div class="col-6 col-md-7 col-lg-4 text-end">
                        <button class="btn btn-light rounded-0 d-inline-block d-md-none mobile-menu-toggle">
                            <svg class="icon icon-5x">
                                <use href="icons.svg#icon_list"></use>
                            </svg>
                        </button>
                        <div class="d-none d-md-inline-block ">
                            <ul class="list-inline text-nowrap">
                                <li class="list-inline-item">
                                    <a href="#" class="top-social social-fb">
                                        <svg class="icon icon-4x">
                                            <use href="icons.svg#icon_facebook"></use>
                                        </svg>
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="#" class="top-social social-insta">
                                        <svg class="icon icon-4x">
                                            <use href="icons.svg#icon_instagram"></use>
                                        </svg>
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="#" class="top-social social-tw">
                                        <svg class="icon icon-4x">
                                            <use href="icons.svg#icon_twitter"></use>
                                        </svg>
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="#" class="top-social social-yt">
                                        <svg class="icon icon-4x">
                                            <use href="icons.svg#icon_youtube"></use>
                                        </svg>
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a
                                        href="#"
                                        class="btn btn-sm btn-outline-primary text-uppercase"
                                    >
                                        Contact Us
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a
                                        href="#"
                                        class="btn btn-sm btn-primary text-uppercase"
                                    >
                                        Login
                                    </a>
                                </li>
                            </ul>
                            <div class="text-center">
                                <img
                                    src={delhisarkar}
                                    class="mw-100"
                                    alt="delhisakar"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

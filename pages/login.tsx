import React from "react";
import Image from "next/image";
import Link from "next/link"


// interface HTMLProps<T> extends HTMLAttributes, ClassAttributes<T> {
// }

const Login = () => {
  return (
    <div className="loginBanner_main">
      <div className="bannerBlock">
        <Image
          src="/../public/images/netflix-loginBanner.jpg"
          alt="loginBannerImage"
          layout="fill"
          objectFit="cover"
          quality={100}
          loading="lazy"
        />
      </div>

      <div className="authBlock">
        <h1>Sign In</h1>
        <form>
          <input type="text" placeholder="Email or Phone Number" />
          <input type="password" placeholder="Password" />
          <button>Sign In</button>
        </form>
        {/* <div className="rememberMe">
            <input type="checkbox" id="remember" name="remember" value="Bike" />
            <label for="remember"> Remember me.</label>
        </div> */}

        <div className="signUpBlock">
            <h3>New to Netflix?</h3>
            <Link href="#">Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

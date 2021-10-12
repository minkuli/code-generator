import React from 'react'
import Header from '../../header'
import Navbar from '../../navbar'
import Footer from '../../footer'
import './style.css'

const Instructions = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <div>
        <h1>Step 1</h1>
        <p>Create the code.</p>
        <h1>Step 2</h1>
        <p>
          Log into our
          <a
            href="https://getjoan.com/wp-login.php?redirect_to=https%3A%2F%2Fgetjoan.com%2Fwp-admin%2F&reauth=1"
            className="tab"
          >
            WOO-Commerce
          </a>
          and navigate to the correct JOAN Order.
        </p>
        <h1>Step 3</h1>
        <p>
          Fill in the below template - replace the ENTER_CODE_HERE,
          ENTER_CUSTOM_TEXT
        </p>
        <div className="code">
          <code className="line">
            &lt;h3 style="text-align:left;"&gt;&lt;strong&gt;Your Joan Credit
            code/s for your devices:&lt;/strong&gt;&lt;/h3&gt;
          </code>
          <code className="line">
            &lt;h3 style="text-align:left;"&gt;ENTER_CODE_HERE
            (ENTER_CUSTOM_TEXT)&lt;/h3&gt;
          </code>
          <code className="line">
            &lt;h4 style="text-align:left;"&gt;Find out how to redeem your code
            &lt;a
            href="https://support.getjoan.com/hc/en-us/articles/115005963565"&gt;here.&lt;/a&gt;&lt;/h4&gt;
          </code>
        </div>
        <h1>Step 4</h1>
        <p>
          In WOO-Commerce add a note on the right side, copy-paste inside the
          above text and don't forget to mark{' '}
          <strong>"Note to Customer"</strong> instead of "Private note".
          <p>
            <img src="./example3.png" alt="pic" />
          </p>
          Click <strong>"Add"</strong>.
        </p>
        <h1>Step 5</h1>
        <p>Done!</p>
      </div>
      <Footer />
    </div>
  )
}

export default Instructions

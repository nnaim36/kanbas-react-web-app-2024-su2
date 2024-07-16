import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Lab2() {
  return (
    <div id="wd-lab2">
      <h2>Lab 2 - Cascading Style Sheets</h2>
      <h3>Styling with the STYLE attribute</h3>
      <p>
        Style attribute allows configuring look and feel
        right on the element. Although it's very convenient
        it is considered bad practice and you should avoid
        using the style attribute
      </p>
      <div id="wd-css-id-selectors">
        <h3>ID selectors</h3>
        <p id="wd-id-selector-1">
Instead of changing the look and feel of all the 
elements of the same name, e.g., P, we can refer to a specific element by its ID
        </p>
        <p id="wd-id-selector-2">
Here's another paragraph using a different ID and a different look and
          feel
        </p>
      </div>

      <div id="wd-css-class-selectors">
        <h3>Class selectors</h3>
        <p className="wd-class-selector">
          Instead of using IDs to refer to elements, you can use an element's CLASS attribute
        </p>
        <h4 className="wd-class-selector">
          This heading has same style as paragraph above
        </h4>
      </div>

      <div id="wd-css-document-structure">
  <div className="wd-selector-1">
    <h3>Document structure selectors</h3>
    <div className="wd-selector-2">
      Selectors can be combined to refer elements in particular
      places in the document
      <p className="wd-selector-3">
        This paragraph's red background is referenced as
        <br />
        .selector-2 .selector3<br />
        meaning the descendant of some ancestor.<br />
        <span className="wd-selector-4">
          Whereas this span is a direct child of its parent
        </span><br />
          You can combine these relationships to create specific 
          styles depending on the document structure
      </p>
    </div>
  </div>
</div>

{/* foreground */}
<div id="wd-css-colors">
  <h2>Colors</h2>
  <h3 className="wd-fg-color-blue">Foreground color</h3>
  <p className="wd-fg-color-red">
    The text in this paragraph is red but
    <span className="wd-fg-color-green">this text is green</span>
  </p>
</div>

{/*background */}
<div id="wd-css-background-colors">
  <h3 className="wd-bg-color-blue wd-fg-color-white">Background color</h3>
  <p className="wd-bg-color-red wd-fg-color-black">
    This background of this paragraph is red but
    <span className="wd-bg-color-green wd-fg-color-white">
      the background of this text is green and the foreground white
    </span>
  </p>
</div>

{/* Borders */}
<div id="wd-css-paddings">
  <h2>Padding</h2>
  <div className="wd-padded-top-left wd-border-fat 
      wd-border-red wd-border-solid 
      wd-bg-color-yellow">
    Padded top left
  </div>
  <div className="wd-padded-bottom-right wd-border-fat 
      wd-border-blue wd-border-solid 
      wd-bg-color-yellow">
    Padded bottom right
  </div>

  <div className="wd-padding-fat wd-border-fat 
      wd-border-yellow wd-border-solid 
      wd-bg-color-blue wd-fg-color-white">
    Padded all around
  </div>
</div>

{/*Padding*/}
<div id="wd-css-paddings">
  <h2>Padding</h2>
  <div className="wd-padded-top-left wd-border-fat 
      wd-border-red wd-border-solid 
      wd-bg-color-yellow">
    Padded top left
  </div>
  <div className="wd-padded-bottom-right wd-border-fat 
      wd-border-blue wd-border-solid 
      wd-bg-color-yellow">
    Padded bottom right
  </div>

  <div className="wd-padding-fat wd-border-fat 
      wd-border-yellow wd-border-solid 
      wd-bg-color-blue wd-fg-color-white">
    Padded all around
  </div>
</div>


{/*Margin*/}
<div id="wd-css-margins">
  <h2>Margins</h2>
  <div
    className="wd-margin-bottom 
      wd-padded-top-left 
      wd-border-fat wd-border-red 
      wd-border-solid 
      wd-bg-color-yellow">
    Margin bottom
  </div>
  <div
    className="wd-margin-right-left 
      wd-padded-bottom-right 
      wd-border-fat wd-border-blue 
      wd-border-solid 
      wd-bg-color-yellow">
    Margin left right
  </div>
  <div
    className="wd-margin-all-around 
      wd-padding-fat wd-border-fat 
      wd-border-yellow 
      wd-border-solid 
      wd-bg-color-blue 
      wd-fg-color-white">
    Margin all around
  </div>
</div>

{/*Corners*/}
<div id="wd-css-borders">
  <h3>Rounded corners</h3>
  <p className="wd-rounded-corners-top wd-border-thin 
     wd-border-blue wd-border-solid wd-padding-fat">
    Rounded corners on the top
  </p>
  <p className="wd-rounded-corners-bottom 
     wd-border-thin wd-border-blue wd-border-solid 
     wd-padding-fat">
    Rounded corners at the bottom
  </p>
  <p className="wd-rounded-corners-all-around 
     wd-border-thin wd-border-blue wd-border-solid 
     wd-padding-fat">
    Rounded corners all around
  </p>
  <p className="wd-rounded-corners-inline 
     wd-border-thin wd-border-blue wd-border-solid 
     wd-padding-fat">
    Different rounded corners
  </p>
</div>

{/*demension */}
<div id="wd-css-dimensions">
  <h2>Dimension</h2>
  <div>
    <div className="wd-dimension-portrait wd-bg-color-yellow">
      Portrait
    </div>
    <div className="wd-dimension-landscape wd-bg-color-blue
                    wd-fg-color-white">
      Landscape
    </div>
    <div className="wd-dimension-square wd-bg-color-red">
      Square</div>
  </div>
</div>

{/*relative positions*/}
<div id="wd-css-position-relative">
  <h2>Relative</h2>
  <div className="wd-bg-color-gray">
    <div className="wd-bg-color-yellow 
                    wd-dimension-portrait">
      <div className="wd-pos-relative-nudge-down-right">
        Portrait</div></div>
    <div className="wd-pos-relative-nudge-up-right 
        wd-bg-color-blue wd-fg-color-white 
        wd-dimension-landscape">
      Landscape</div>
    <div className="wd-bg-color-red wd-dimension-square">
      Square</div>
  </div>
</div>

{/*absolute positions*/}
<div id="wd-css-position-absolute">
  <h2>Absolute position</h2>
  <div className="wd-pos-relative">
    <div className="wd-pos-absolute-10-10 
         wd-bg-color-yellow wd-dimension-portrait">
      Portrait</div>
    <div className="wd-pos-absolute-50-50 
         wd-bg-color-blue wd-fg-color-white 
         wd-dimension-landscape">
      Landscape</div>
    <div className="wd-pos-absolute-120-20 
         wd-bg-color-red wd-dimension-square">
      Square</div>
  </div><br /><br /><br /><br /><br /><br /><br />
</div>

{/*fixed positions*/}
<div id="wd-css-position-fixed">
  <h2>Fixed position</h2>
  Checkout the blue square that says "Fixed position" stuck all the way on the right and half way down the page. It doesn't scroll with the rest of the page. Its position is "Fixed".
  <div className="wd-pos-fixed 
    wd-dimension-square wd-bg-color-blue 
    wd-fg-color-white">
    Fixed position
  </div>
</div>

{/*Z index*/}
<div id="wd-z-index">
  <h2>Z index</h2>
  <div className="wd-pos-relative">
    <div className="wd-pos-absolute-10-10 
         wd-bg-color-yellow wd-dimension-portrait">
      Portrait
    </div>
    <div className="wd-zindex-bring-to-front 
         wd-pos-absolute-50-50 wd-dimension-landscape
         wd-bg-color-blue wd-fg-color-white">
      Landscape
    </div>
    <div className="wd-pos-absolute-120-20 
         wd-bg-color-red wd-dimension-square">
      Square
    </div>
  </div><br /><br /><br /><br /><br /><br /><br />
</div>

{/*Floating images content*/}
<div id="wd-float-divs">
 <h2>Float</h2>
 <div>
   <div className="wd-float-left wd-dimension-portrait wd-bg-color-yellow">
     Yellow </div>
   <div className="wd-float-left wd-dimension-portrait wd-bg-color-blue wd-fg-color-white">
     Blue </div>
   <div className="wd-float-left wd-dimension-portrait wd-bg-color-red">
     Red </div>
   <img className="wd-float-right"
     src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"/>
   <div className="wd-float-done"></div>
 </div>
</div>

{/*grid layout*/}
<div id="wd-css-grid-layout">
  <div id="wd-css-left-right-layout">
    <h2>Grid layout</h2>
    <div className="wd-grid-row">
      <div className="wd-grid-col-half-page wd-bg-color-yellow">
        <h3>Left half</h3>
      </div>
      <div className="wd-grid-col-half-page wd-bg-color-blue wd-fg-color-white">
        <h3>Right half</h3>
      </div>
    </div>
  </div>
  <div id="wd-css-left-third-right-two-thirds" className="wd-grid-row">
    <div className="wd-grid-col-third-page wd-bg-color-green
        wd-fg-color-white">
      <h3>Left third</h3>
    </div>
    <div className="wd-grid-col-two-thirds-page wd-bg-color-red wd-fg-color-white">
      <h3>Right two thirds</h3>
    </div>
  </div>
  <div id="wd-css-side-bars" className="wd-grid-row">
    <div className="wd-grid-col-left-sidebar wd-bg-color-yellow">
      <h3>Side bar</h3>
      <p>This is the left sidebar</p>
    </div>
    <div className="wd-grid-col-main-content wd-bg-color-blue wd-fg-color-white">
      <h3>Main content</h3>
      <p>
        This is the main content. This is the main content. This is the
        main content.
      </p>
    </div>
    <div className="wd-grid-col-right-sidebar wd-bg-color-green wd-fg-color-white">
      <h3>Side bar</h3>
      <p>This is the right sidebar</p>
    </div>
  </div>
</div>

{/* Flex*/}
<div id="wd-css-flex">
  <h2>Flex</h2>
  <div className="wd-flex-row-container">
    <div className="wd-bg-color-yellow 
                    wd-width-75px">
      Column 1</div>
    <div className="wd-bg-color-blue">
      Column 2</div>
    <div className="wd-bg-color-red
                    wd-flex-grow-1">
      Column 3</div>
  </div>
</div>



{/*React Icons*/}

{/*hiding and showing responsive content*/}
<div id="wd-screen-size-label">
      <div className="d-block d-sm-none">
        XS - Extra Small (&lt;576px)
      </div>
      <div className="d-none d-sm-block d-md-none">
        S - Small (≥576px)
      </div>
      <div className="d-none d-md-block d-lg-none">
        M - Medium (≥768px)
      </div>
      <div className="d-none d-lg-block d-xl-none">
        L - Large (≥992px)
      </div>
      <div className="d-none d-xl-block d-xxl-none">
        XL - Extra Large (≥1200px)
      </div>
      <div className="d-none d-xxl-block">
        XXL - Extra Extra Large (≥1400px)
      </div>
    </div>

{/*Styling tables */}
<div id="wd-css-styling-tables">
  <h2>Tables</h2>
  <table className="table">
    <thead>
      <tr className="table-dark"><th>Quiz</th><th>Topic</th><th>Date</th><th>Grade</th></tr>
    </thead>
    <tbody>
      <tr className="table-warning"><td>Q1</td><td>HTML</td><td>2/3/21</td><td>85</td></tr>
      <tr className="table-danger"><td>Q2</td><td>CSS</td><td>2/10/21</td><td>90</td></tr>
      <tr className="table-primary"><td>Q3</td><td>JavaScript</td><td>2/17/21</td><td>90</td></tr>
    </tbody>
    <tfoot>
      <tr className="table-success"><td colSpan={3}>Average</td><td>90</td></tr>
    </tfoot>
  </table>
</div>


{/*Responsive tables*/}
<div id="wd-css-responsive-tables">
  <h2>Responsive tables</h2>
  <div className="table-responsive">
    <table className="table">
      <thead>
        <tr><th>Very</th><th>long</th><th>set</th><th>of</th><th>columns</th>
            <th>Very</th><th>long</th><th>set</th><th>of</th><th>columns</th>
            <th>Very</th><th>long</th><th>set</th><th>of</th><th>columns</th>
        </tr>
      </thead>
      <tbody>
        <tr>
           <td>Very</td><td>long</td><td>set</td><td>of</td><td>columns</td>
           <td>Very</td><td>long</td><td>set</td><td>of</td><td>columns</td>
           <td>Very</td><td>long</td><td>set</td><td>of</td><td>columns</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

{/*bootstrap lists*/}
<div id="wd-css-styling-lists">
  <h2>Favorite movies</h2>
  <ul className="list-group">
    <li className="list-group-item active">Aliens</li>
    <li className="list-group-item">Terminator</li>
    <li className="list-group-item">Blade Runner</li>
    <li className="list-group-item">Lord of the Ring</li>
    <li className="list-group-item disabled">Star Wars</li>
  </ul>
</div>

{/*Bootstrap Hyperlinks*/}
<div id="wd-css-hyperlink-list">
  <h3>Favorite books</h3>
  <div className="list-group">
    <a href="https://en.wikipedia.org/wiki/Dune_(novel)" 
       className="list-group-item list-group-item-action active">
       Dune</a>
    <a href="https://en.wikipedia.org/wiki/The_Lord_of_the_Rings" 
       className="list-group-item list-group-item-action">
       Lord of the Rings</a>
    <a href="https://en.wikipedia.org/wiki/The_Forever_War" 
       className="list-group-item list-group-item-action">
       The Forever War</a>
    <a href="https://en.wikipedia.org/wiki/2001:_A_Space_Odyssey_(novel)" 
       className="list-group-item list-group-item-action">
       2001 A Space Odyssey</a>
    <a href="https://en.wikipedia.org/wiki/Ender%27s_Game" 
       className="list-group-item list-group-item-action disabled">
       Ender's Game</a>
  </div>
</div>

{/*Bootstrap Form*/}
<div id="wd-css-styling-forms">
  <h2>Forms</h2>
  <div className="mb-3">
    <label htmlFor="input1" className="form-label">
      Email address</label>
    <input type="email" className="form-control"
      id="input1" placeholder="name@example.com"/>
  </div>
  <div className="mb-3">
    <label htmlFor="textarea1" className="form-label">
      Example textarea</label>
    <textarea className="form-control" id="textarea1" 
              rows={3}></textarea>
  </div></div>

    {/*BootStrap Drop-down*/}
    <div id="wd-css-styling-dropdowns">
  <h3>Dropdowns</h3>
  <select className="form-select">
     <option selected>Open this select menu</option>
     <option value="1">One</option>
     <option value="2">Two</option>
     <option value="3">Three</option>
  </select>
</div>

{/*switches*/}
<div id="wd-css-styling-switches">
  <h3>Switches</h3>
  <div className="form-check form-switch">
    <input className="form-check-input" type="checkbox" 
           id="switch1" />
    <label className="form-check-label" htmlFor="switch1">
      Default switch checkbox input
    </label>
  </div>
  <div className="form-check form-switch">
    <input className="form-check-input" type="checkbox"
      id="switch2" checked />
    <label className="form-check-label" htmlFor="switch2">
      Checked switch checkbox input
    </label>
  </div>
  <div className="form-check form-switch">
    <input className="form-check-input" type="checkbox"
      id="switch3" disabled />
    <label className="form-check-label" htmlFor="switch3">
      Disabled switch checkbox input
    </label>
  </div>
  <div className="form-check form-switch">
    <input className="form-check-input" type="checkbox"
      id="switch4" checked disabled />
    <label className="form-check-label" htmlFor="switch4">
      Disabled checked switch checkbox input
    </label>
  </div>
</div>



    </div>
  );
}

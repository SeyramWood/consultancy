function Test() {
    return ( 
//         <>
//        <button
//   type="button"
//   className="btn btn-primary"
//   data-toggle="modal"
//   data-target="#exampleModal"
// >
//   Launch demo modal
// </button>
// <div
//   className="modal fade"
//   id="exampleModal"
//   tabIndex={-1}
//   role="dialog"
//   aria-labelledby="exampleModalLabel"
//   aria-hidden="true"
// >
//   <div className="modal-dialog" role="document">
//     <div className="modal-content">
//       <div className="modal-header">
//         <h5 className="modal-title" id="exampleModalLabel">
//           Modal title
//         </h5>
//         <button
//           type="button"
//           className="close"
//           data-dismiss="modal"
//           aria-label="Close"
//         >
//           <span aria-hidden="true">×</span>
//         </button>
//       </div>
//       <div className="modal-body">...</div>
//       <div className="modal-footer">
//         <button
//           type="button"
//           className="btn btn-secondary"
//           data-dismiss="modal"
//         >
//           Close
//         </button>
//         <button type="button" className="btn btn-primary">
//           Save changes
//         </button>
//       </div>
//     </div>
//   </div>
// </div>


//         </>
<>
ff
<>
<div
  id="carouselExampleIndicators"
  className="carousel slide"
  data-mdb-ride="carousel"
>
  <div className="carousel-indicators">
    <button
      type="button"
      data-mdb-target="#carouselExampleIndicators"
      data-mdb-slide-to={0}
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    />
    <button
      type="button"
      data-mdb-target="#carouselExampleIndicators"
      data-mdb-slide-to={1}
      aria-label="Slide 2"
    />
    <button
      type="button"
      data-mdb-target="#carouselExampleIndicators"
      data-mdb-slide-to={2}
      aria-label="Slide 3"
    />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img
        src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
        className="d-block w-100"
        alt="Wild Landscape"
      />
    </div>
    <div className="carousel-item">
      <img
        src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
        className="d-block w-100"
        alt="Camera"
      />
    </div>
    <div className="carousel-item">
      <img
        src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
        className="d-block w-100"
        alt="Exotic Fruits"
      />
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-mdb-target="#carouselExampleIndicators"
    data-mdb-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-mdb-target="#carouselExampleIndicators"
    data-mdb-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>


  {/* Extra large modal */}
  <button
    type="button"
    className="btn btn-primary"
    data-toggle="modal"
    data-target=".bd-example-modal-1"
  >
   1
  </button>
</>
<div
  className="modal fade bd-example-modal-1"
  tabIndex={-1}
  role="dialog"
  aria-labelledby="myExtraLargeModalLabel"
  aria-hidden="true"
>
  <div className="modal-dialog modal-xl" role="document">
    <div className="modal-content">1</div>
  </div>
</div>
<>
  {/* Extra large modal */}
  <button
    type="button"
    className="btn btn-primary"
    data-toggle="modal"
    data-target=".bd-example-modal-x"
  >
    2
  </button>
</>
<div
  className="modal fade bd-example-modal-x"
  tabIndex={-1}
  role="dialog"
  aria-labelledby="myExtraLargeModalLabel"
  aria-hidden="true"
>
  <div className="modal-dialog modal-xl" role="document">
    <div className="modal-content">2</div>
  </div>
</div>

<>
<>
  {/* Extra mmm modal */}
  <button
    type="button"
    className="btn btn-primary"
    data-toggle="modal"
    data-target=".bd-example-modal-88"
  >
   3
  </button>
</>
<div
  className="modal fade bd-example-modal-88"
  tabIndex={-1}
  role="dialog"
  aria-labelledby="myExtraLargeModalLabel"
  aria-hidden="true"
>
  <div className="modal-dialog modal-xl" role="document">
    <div className="modal-content">3</div>
  </div>
</div>


  {/* Large modal */}
  <button
    type="button"
    className="btn btn-primary"
    data-toggle="modal"
    data-target=".bd-example-modal-lg"
  >
    4
  </button>

<div
  className="modal fade bd-example-modal-lg"
  tabIndex={-1}
  role="dialog"
  aria-labelledby="myLargeModalLabel"
  aria-hidden="true"
>
  <div className="modal-dialog modal-lg" role="document">
    <div className="modal-content">

    </div>
  </div>
</div>


</>
</>
      );
}

export default Test;
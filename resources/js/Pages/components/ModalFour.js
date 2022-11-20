function ModalFour() {
    return (
        <>
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
                    <div className="modal-content">4</div>
                </div>
            </div>

        </>
    );
}

export default ModalFour;
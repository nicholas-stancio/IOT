const fetchApiModal = () => `
    <div class="modal fade" id="fetchApiModal" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Fetch API</h5>
                    <button type="button" class="btn-close" aria-label="Close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <div class="form-group row">
                        <label for="fetchApiModalEndpoint" class="col-sm-2 col-form-label"><b>Endpoint</b></label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="fetchApiModalEndpoint" placeholder="/api/weather">
                        </div>
                    </div>
                    <div class="form-group row mt-3 pb-3">
                        <label for="fetchApiModalMethod" class="col-sm-2 col-form-label"><b>Method</b></label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="fetchApiModalMethod" placeholder="POST">
                        </div>
                    </div>
                    <hr class="mb-3">
                    <div class="form-group">
                        <label for="fetchApiModalBody"><b>Body</b></label>
                        <textarea class="form-control mt-2" id="fetchApiModalBody" rows="3" placeholder='{"city": "palembang"}'></textarea>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" id="fetchApiModalFetch">Fetch</button>
                </div>
            </div>
        </div>
    </div>
    `;

export default fetchApiModal;

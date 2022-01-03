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
                        <label for="fetchApiModalMethod" class="col-sm-2 col-form-label"><b>Method</b></label>
                        <div class="col-sm-10">
                            <select id="fetchApiModalMethod" class="form-control">
                                <option value="POST">POST</option>
                                <option selected value="GET">GET</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group row mt-3">
                        <label for="fetchApiModalEndpoint" class="col-sm-2 col-form-label"><b>Endpoint</b></label>
                        <div class="col-sm-10">

                            <div class="d-flex flex-row bd-highlight">
                                <div class="flex-grow-1 bd-highlight w-100"><input type="text" class="form-control" id="fetchApiModalEndpoint" placeholder="/api/weather"></div>
                                <div class="px-2 flex-fill bd-highlight"><input type="text" class="form-control" id="fetchApiModalEndpointP1" placeholder="T Start"></div>
                                <div class="flex-fill bd-highlight"><input type="text" class="form-control" id="fetchApiModalEndpointP2" placeholder="T End"></div>
                            </div>

                            <div class="d-flex flex-row bd-highlight mt-2">
                                <div class="form-check mt-1 flex-grow-1 bd-highlight w-50">
                                    <input class="form-check-input" type="checkbox" id="fetchApiModalCheckBox">
                                    <label class="form-check-label" for="fetchApiModalCheckBox">
                                        Add Your Token
                                    </label>
                                </div>
                                <div class="flex-fill bd-highlight"><input type="text" class="form-control" id="fetchApiModalEndpointP3" placeholder="City"></div>
                            </div>

                        </div>
                    </div>
                    <hr>
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

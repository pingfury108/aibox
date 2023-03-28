export default function RewriteText() {

    return (
            <div class="container mt-5">
	        <h6 class="text-center mb-4">文本润色</h6>
            <div class="row">
		    <div class="col-sm-5">
		    <div class="mb-3">
			<label for="input-text" class="form-label">输入文本：</label>
			<textarea id="input-text" class="form-control" rows="10"></textarea>
		    </div>
		    </div>
		    <div class="col-sm-2 d-flex align-items-center justify-content-center">
		    <button class="btn btn-primary" onclick="rewriteText()">润色文本</button>
		    </div>
		    <div class="col-sm-5">
		    <div class="mb-3">
			<label for="output-text" class="form-label">润色后的文本：</label>
			<textarea id="output-text" class="form-control" rows="10"></textarea>
		    </div>
		    </div>
	        </div>
	        </div>
    );
}

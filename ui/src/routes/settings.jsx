
export default function Settings() {
    return (
            <div>
            <label for="input-basic-url" class="form-label">OpenAI AIP Basic url :</label>
            <input type="text" class="form-control" id="input-basic-rul" onchange="inputChanged()" />

            <label for="input-key" class="form-label">API2D AIP KEY:</label>
            <input type="password" class="form-control" id="input-key" onchange="inputChanged()" />
            </div>
    );
}

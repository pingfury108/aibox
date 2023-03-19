#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

#[tauri::command]
fn rewrite(text: &str, apikey: &str) -> String {
    let token = format!("Bearer {}", apikey);
    let content = format!("请润色这段内容, 内容: {}", text);
    let body = ureq::post("https://openai.api2d.net/v1/chat/completions")
        .set("Content-Type", "application/json")
        .set("Authorization", &token)
        .send_json(ureq::json!({
            "model": "gpt-3.5-turbo",
            "messages": [{"role": "user", "content": content}]
        }))
        .expect("send json err")
        .into_string()
        .expect("body to string err");
    println!("{}", body);
    body
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![rewrite])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

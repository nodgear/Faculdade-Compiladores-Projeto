use std::fs;
use std::io::Error;

fn write_file_string(path: &str, content: &str) -> Result<(), Error> {
    fs::write(path, content)
}

pub fn write_file() {
    let text = "Elizabeth was born in Mayfair, London,
as the first child of the Duke and Duchess of York
(later King George VI and Queen Elizabeth).
Her father acceded to the throne in 1936 upon
the abdication of his brother, King Edward VIII,
making Elizabeth the heir presumptive.";
    write_file_string("sample_text.txt", text).expect("Unable to write file");
}

fn read_file_string(path: &str) -> Result<String, Error> {
    fs::read_to_string(path)
}

pub fn read_file() {
    let file_content = read_file_string("sample_text.txt").expect("Unable to read file");
    let mut words: Vec<&str> = file_content.rsplit(" ").collect();
    while let Some(word) = words.pop() {
        println!("{}", word);
    }
}

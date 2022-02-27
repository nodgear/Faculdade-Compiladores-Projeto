mod analitic_analysis;
mod compiler;
mod file_system;
mod lexical_analysis;
mod syntax_analysis;

fn main() {
    compiler::execute();
    file_system::write_file();
    file_system::read_file();
}

pub fn execute() {
    let lexical_result = crate::lexical_analysis::execute();
    println!("lexical_analysis: {}", lexical_result);
    if !lexical_result {
        return;
    };
    let syntax_result = crate::syntax_analysis::execute();
    println!("syntax_analysis: {}", syntax_result);
    if !syntax_result {
        return;
    };
    let analitic_result = crate::analitic_analysis::execute();
    println!("analitic_analysis: {}", analitic_result);
    if !analitic_result {
        return;
    };
}

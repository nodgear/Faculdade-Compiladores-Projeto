pub fn execute() -> bool {
    return true;
}

#[cfg(test)]
mod test {
    use super::*;

    #[test]
    fn expect_to_execute() {
        assert_eq!(true, execute());
    }
}

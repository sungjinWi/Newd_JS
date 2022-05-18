function main() {
    fn2()
    console.log(main)

    function fn2(){
        console.log("fn2")
        fn3();
    }

    function fn3(){
        console.log("fn3")
        fn4();
    }

    function fn4(){
        console.log("fn4")
    }
}

main();

// fn2 fn3 fn4 main

// 콜스택은 함수가 호출됐을 때 들어간다

// 해당 스코프가 끝나면 콜스택에서 나간다


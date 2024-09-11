import Heading from "./heading";

export default function Page(){
    
    const a = 5;
    const b = 10;

    return (
        <main>
            {/* <h1>Week 2 Demo</h1> */}
            {/* instead of the line above, use the line below: */}
            <Heading />
            <p>This is a demo for week 2.</p>
            <p>The sum of a + b is {a+b}</p>
        </main>
    )
}
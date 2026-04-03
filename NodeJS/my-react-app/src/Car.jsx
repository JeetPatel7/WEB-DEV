function Car()
{

    const popup = () =>{
        alert("you have clicked me");
    };

    return(
        <>
        <h2>Hello this is my car</h2>
        <p>
            my car has {218*19} horsepower
        </p>
        <button onClick = {popup}> Click me</button>
        </>
    );
}

export default Car;
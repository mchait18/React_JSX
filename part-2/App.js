function App() {
    return (
        <div>
            <Tweet username="Jdoe" name="John Doe" date={new Date().toDateString()} message="This is my first tweet" />
            <Tweet username="Cchait" name="Chana Chait" date={new Date().toDateString()} message="Seaworld is Awesome!" />
            <Tweet username="TC" name="Toby Chait" date={new Date().toDateString()} message="True dat" />

        </div>
    )
}
ReactDOM.render(<App />, document.getElementById("root"))